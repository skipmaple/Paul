# frozen_string_literal: true

class GravatarService
  def execute(email, size = nil, scale = 2, username: nil)

    identifier = email.presence || username.presence
    return unless identifier

    hash = Digest::MD5.hexdigest(identifier.strip.downcase)
    size = 40 unless size && size > 0

    sprintf gravatar_url,
      hash: hash,
      size: size * scale,
      email: ERB::Util.url_encode(email&.strip || ''),
      username: ERB::Util.url_encode(username&.strip || '')
  end

  def gravatar_url
    "https://www.gravatar.com/avatar/%{hash}?s=%{size}&d=identicon"
  end
end
