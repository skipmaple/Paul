class ApplicationController < ActionController::Base
  include SessionsHelper

  before_action :configure_permitted_parameters, if: :devise_controller?

  around_action :switch_language

  def not_found
    render_404
  end

  def route_not_found
    if current_user
      not_found
    else
      store_location_for(:user, request.fullpath) unless request.xhr?

      redirect_to new_user_session_path, alert: I18n.t('devise.failure.unauthenticated')
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def render_404
    respond_to do |format|
      format.html { render "errors/not_found", layout: "errors", status: :not_found }
      # Prevent the Rails CSRF protector from thinking a missing .js file is a JavaScript file
      format.js { render json: '', status: :not_found, content_type: 'application/json' }
      format.any { head :not_found }
    end
  end

  private

  def switch_language(&action)
    locale = current_user&.language || I18n.default_locale
    I18n.with_locale(locale, &action)
  end

  # 确保用户已登录
  def logged_in_user
    unless user_signed_in?
      store_location
      flash[:danger] = "Please log in."
      redirect_to new_user_session_path
    end
  end
end
