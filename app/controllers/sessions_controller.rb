class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      redirect_to user
    else
      flash.now[:danger] = "Invalid email/password combination"
      render 'new'
    end
  end

  def destory

  end
end
