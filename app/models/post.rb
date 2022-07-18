class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :slug_url, use: :slugged

  validates :title, presence: true

  belongs_to :user

  enum visibility_level: [:private, :public], _prefix: :visibility

  def slug_url
    [
      :url,
      [:created_at, :url]
    ]
  end

end
