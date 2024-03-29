module UsersHelper
  # 返回指定用户的Gravatar
  # def gravatar_for(user, size: 80)
  #   if user.name
  #     # letter_avatar_tag(user.name, size, class: "gravatar")
  #     image_tag(letter_avatar_url(user.name, 600), alt: user.name, size: size, class: "gravatar")
  #   else
  #     gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
  #     gravatar_url = "https://s.gravatar.com/avatar/#{gravatar_id}?s=#{size}"
  #     image_tag(gravatar_url, alt: user.name, class: "gravatar")
  #   end
  #
  # end

  def gravatar_for(user, options = {})
    options[:class] = "rounded-full" unless options[:class]
    options[:alt] = user&.name unless options[:alt]
    options[:size] = 80 unless options[:size]
    if Rails.env.development?
      image_tag(avatar_icon_for_no_network(user), options)
    else
      image_tag(avatar_icon_for_user(user), options)
    end
  end
end
