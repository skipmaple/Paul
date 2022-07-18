class UsersController < ApplicationController
  before_action :logged_in_user, only: [:index, :edit, :update, :destroy, :following, :followers]
  before_action :correct_user, only: [:edit, :update]
  before_action :admin_user, only: :destroy
  before_action :set_user, only: %i[ show edit update destroy following followers language ]

  def index
    # @users = User.where(activated: true).paginate(page: params[:page])
    @users = User.all.paginate(page: params[:page])
  end

  def show
    @microposts = @user.microposts.paginate(page: params[:page])
    redirect_to root_path unless @user.confirmed?
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.send_activation_email
      # UserMailer.account_activation(@user).deliver_now
      flash[:info] = "Please check your email to activate your account."
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @user.update(user_params)
      # 处理更新成功的情况
      flash[:success] = "Profile updated"
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    @user.destroy
    flash[:success] = "User deleted"
    redirect_to users_path
  end

  def following
    @title = t(:following)
    @users = @user.following.paginate(page: params[:page])
    render 'show_follow'
  end

  def followers
    @title = t(:followers)
    @users = @user.followers.paginate(page: params[:page])
    render 'show_follow'
  end

  def language


    is_changed = false
    is_changed = @user.update!(language: toggle_language) if signed_in?

    if is_changed
      # I18n.with_locale(params[:language])
      # redirect_to request.referrer || root_url
      # render 'edit'
      redirect_to edit_user_path(@user)
    else
      flash[:danger] = 'you need to sign in.'
      # render :edit, status: :unprocessable_entity
      redirect_to edit_user_path(@user)
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :location, :github_url, :description)
  end

  def set_user
    @user = User.friendly.find(params[:id])
  end

  # 确保是正确的用户
  def correct_user
    @user = User.friendly.find(params[:id])
    redirect_to root_path unless current_user?(@user)
  end

  # 确保是管理员
  def admin_user
    redirect_to root_path unless current_user.admin?
  end

  def toggle_language
    @user.language == 'en' ? 'zh-CN' : 'en'
  end
end
