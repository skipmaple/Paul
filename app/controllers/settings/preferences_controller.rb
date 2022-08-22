# frozen_string_literal: true

class Settings::PreferencesController < Settings::ApplicationController
  def show

  end

  def update

  end

  def language
    if signed_in?
      is_changed = current_user.update(language: toggle_language(current_user.language))
      if is_changed
        cookies[:current_locale] = current_user.language
      else
        flash[:danger] = 'Unexpected error.'
      end

      redirect_to settings_preference_path
    else # not signed in
      cookies[:current_locale] = params[:language] ? params[:language] : toggle_language(cookies[:current_locale])

      redirect_to request.referrer || root_path
    end


  end

  def theme
    is_changed = false
    is_changed = current_user.update!(theme: toggle_theme) if signed_in?

    if is_changed
      cookies[:current_theme] = current_user.theme
      redirect_to settings_preference_path
    else
      flash[:danger] = 'you need to sign in.'
      # render :edit, status: :unprocessable_entity
      redirect_to edit_user_path(@user)
    end
  end

  private

  def toggle_language(current_language)
    return I18n.default_locale unless current_language
    current_language == 'en' ? 'zh-CN' : 'en'
  end

  def toggle_theme
    current_user.theme == 'light' ? 'dark' : 'light'
  end

end
