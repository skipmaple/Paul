class AddPictureToMicroposts < ActiveRecord::Migration[6.0]
  def change
    add_column :microposts, :picture, :string, comment: "micropost上传图片"
  end
end
