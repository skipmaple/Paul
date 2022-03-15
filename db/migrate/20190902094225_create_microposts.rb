class CreateMicroposts < ActiveRecord::Migration[6.0]
  def change
    create_table :microposts do |t|
      t.text :content, comment: '博客内容'
      t.bigint :user_id, null: false, foreign_key: true, comment: 'user_id为外键'

      t.timestamps
    end
    add_index :microposts, [:user_id, :created_at]
  end
end
