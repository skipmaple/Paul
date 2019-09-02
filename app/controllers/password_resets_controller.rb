class PasswordResetsController < ApplicationController
  before_action :get_user, only: [:edit, :update]
  before_action :valid_user, only: [:edit, :update]
  before_action :check_expiration, only: [:edit, :update]

  def new
  end

  def create
    @user = User.find_by_email(params[:password_reset][:email].downcase)
    if @user
      @user.create_reset_digest
      @user.send_password_reset_email
      flash[:info] = "Email sent with password reset instructions"
      redirect_to root_path
    else
      flash.now[:danger] = "Email address not found"
      render 'new'
    end
  end

  def edit
  end

  def update
    if params[:user][:password].empty?  # 没有填写密码和密码确认，更新失败
      @user.errors.add(:password, "can't be empty")
      render 'edit'
    elsif @user.update(user_params) # 成功更新密码
      log_in @user
      @user.update_attribute(:reset_digest, nil)
      flash[:success] = "Password has been reset."
      redirect_to @user
    else  # 填写的新密码无效，更新失败
      flash.now[:alert] = "Invalid new password"
      render 'edit'
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  # 前置过滤器

  def get_user
    @user = User.find_by_email(params[:email])
  end

  # 确保是有效用户
  def valid_user
    redirect_to root_path unless @user&.activated? && @user.authenticated?(:reset, params[:id])
  end

  # 检查重设令牌是否过期
  def check_expiration
    if @user.password_reset_expired?
      flash[:danger] = "Password reset has expired."
      redirect_to new_password_reset_path
    end
  end
end
