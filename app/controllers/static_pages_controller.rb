class StaticPagesController < ApplicationController
  def home
    if logged_in?
      @user = current_user
      @micropost = current_user.microposts.build
      @feed_items = current_user.feed.paginate(page: params[:page])
    end
  end

  def help
  end

  def about
  end

  def contact
  end

  def language
    return unless I18n.locale_available?(params[:locale])

    current_user.update!(locale: params[:locale]) if logged_in? && current_user&.locale != params[:locale]
    I18n.default_locale = params[:locale]
    redirect_to request.referrer || root_url
  end

end
