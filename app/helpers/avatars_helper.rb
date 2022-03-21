module AvatarsHelper
  DEFAULT_AVATAR_PATH = 'no_avatar.png'

  # Takes both user and email and returns the avatar_icon by
  # user (preferred) or email.
  def avatar_icon_for(user = nil, email = nil, size = nil, scale = 2)
    if user
      avatar_icon_for_user(user, size, scale)
    elsif email
      avatar_icon_for_email(email, size, scale)
    else
      default_avatar
    end
  end

  def avatar_icon_for_no_network(user = nil)
    return default_avatar if user.nil?
    letter_avatar_url(user.name, 600)
  end

  def avatar_icon_for_email(email = nil, size = nil, scale = 2)
    return gravatar_icon(email, size, scale) if email.nil?

    avatar_icon_by_user_email_or_gravatar(email, size, scale)
  end

  def avatar_icon_for_user(user = nil, size = nil, scale = 2)
    # return avatar_icon_for_no_network(user)
    return gravatar_icon(nil, size, scale) unless user

    user_avatar = user.avatar_url(size: size)
    user_avatar || default_avatar
  end

  def gravatar_icon(user_email = '', size = nil, scale = 2)
    GravatarService.new.execute(user_email, size, scale) ||
      default_avatar
  end

  def default_avatar
    ActionController::Base.helpers.image_path(DEFAULT_AVATAR_PATH)
  end

  private

  def avatar_icon_by_user_email_or_gravatar(email, size, scale)
    user = User.find_by_email(email)

    if user
      avatar_icon_for_user(user, size, scale)
    else
      gravatar_icon(email, size, scale)
    end
  end

  def user_avatar_url_for( **options)
    return options[:url] if options[:url]
    return avatar_icon_for_user(options[:user], options[:size]) if options[:user]

    avatar_icon_for_email(options[:user_email], options[:size])
  end

  def source_icon(source, options = {})
    avatar_url = source.try(:avatar_url)

    if avatar_url
      image_tag avatar_url, options
    else
      source_identicon(source, options)
    end

  rescue
    source_identicon(source, options)
  end

  def source_identicon(source, options = {})
    bg_key = (source.id % 7) + 1
    size_class = "s#{options[:size]}" if options[:size]

    options[:class] =
      [*options[:class], "identicon bg#{bg_key}", size_class].compact.join(' ')

    content_tag(:span, class: options[:class].strip) do
      source.name[0, 1].upcase
    end
  end
end

