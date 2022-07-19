class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title, comment: '标题'
      t.string :excerpt, comment: '摘要'
      t.string :feature_image, comment: '图片'
      t.text :body, comment: '内容'
      t.integer :visibility_level, default: 0,  comment: '可见性'
      t.string :reading_time, comment: '阅读时间'
      t.string :url, comment: '链接'
      t.datetime :published_at, default: Time.now, comment: '发布时间'
      t.references :user, comment: '用户id'
      t.string :slug, comment: 'friendly slug'
      t.index :slug, unique: true
      t.timestamps
    end

  end
end
