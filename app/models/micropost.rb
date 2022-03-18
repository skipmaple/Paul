class Micropost < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true
  validates :content, presence: true, length: { maximum: 1000 }
  default_scope -> { order(created_at: :desc) }
  mount_uploader :picture, PictureUploader
  validate :check_picture_size

  private

  # 验证上传的图像大小
  def check_picture_size
    if picture.size > 5.megabytes
      errors.add(:picture, t(:over_max_file_size_alert))
    end
  end
end
