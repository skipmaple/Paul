class StaticPagesController < ApplicationController
  def home
    if user_signed_in?
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
    return unless I18n.locale_available?(params[:language])

    current_user.update!(language: params[:language]) if signed_in? && current_user&.language != params[:language]
    I18n.default_locale = params[:language]
    redirect_to request.referrer || root_url
  end

end
