class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name, comment: "用户名"
      t.string :email, comment: "邮箱"

      t.timestamps
    end
  end
end
