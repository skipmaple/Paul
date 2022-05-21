class AccountActivationsController < ApplicationController
  def edit
    user = User.find_by_email(params[:email])
    if user && !user.confirmed? && user.authenticated?(:activation, params[:id])
      user.activate
      log_in user
      flash[:success] = "Account activated!"
      redirect_to user
    else
      flash[:danger] = "Invalid activation link"
      redirect_to root_path
    end
  end
end
