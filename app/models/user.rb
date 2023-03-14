class User < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :confirmable, :lockable, :omniauthable, omniauth_providers: %i[github google_oauth2]

  # attr_accessor :remember_token, :activation_token, :reset_token

  # before_save :downcase_email
  # before_create :create_activation_digest
  # before_save {self.email = email.downcase}  # 数据库中存储email均为小写

  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX },
            uniqueness: { case_sensitive: false }
  # validates :password, presence: true, length: { minimum: 6 }, allow_nil: true
  validates :language, presence: true, inclusion: { in: I18n.available_locales.map(&:to_s) }

  has_many :microposts, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :active_relationships, class_name: "Relationship",
           foreign_key: "follower_id",
           dependent: :destroy
  has_many :passive_relationships, class_name: "Relationship",
           foreign_key: "followed_id",
           dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships

  def self.from_omniauth(auth)
    user = where(provider: auth.provider, uid: auth.uid).first
    user ||= User.find_by_email(auth.info.email.downcase) if auth.info.email
    user ||= User.create(provider: auth.provider, uid: auth.uid, name: auth.info.name, email: auth.info.email, password: Devise.friendly_token[0,20], confirmed_at: Time.current)
    user
  end

  # 返回用户的动态流
  def feed
    following_ids = "SELECT followed_id FROM relationships WHERE follower_id = :user_id"
    Micropost.where("user_id IN (#{following_ids}) OR user_id = :user_id", user_id: id)
  end

  # 关注另一个用户
  def follow(other_user)
    following << other_user
  end

  # 取消关注另一个用户
  def unfollow(other_user)
    following.delete(other_user)
  end

  # 如果当前用户关注了指定的用户，返回true
  def following?(other_user)
    following.include?(other_user)
  end

  def username_for_avatar
    # Translate Chinese hanzi to pinyin
    # https://github.com/flyerhzm/chinese_pinyin
    Pinyin.t(self.name)
  end

  def avatar_url(size: nil, scale: 2, **args)
    GravatarService.new.execute(email, size, scale, username: name)
  end

  def github_full_url
    return nil unless github_url.present?
    "https://github.com/#{github_url}"
  end

  private

  # # 把电子邮件地址转换为小写
  # def downcase_email
  #   self.email = email.downcase
  # end

  # # 创建并赋值激活令牌和摘要
  # def create_activation_digest
  #   self.activation_token = User.new_token
  #   self.activation_digest = User.digest(activation_token)
  # end
end
