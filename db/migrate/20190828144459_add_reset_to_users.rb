class AddResetToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :reset_digest, :string, comment: "密码重设摘要"
    add_column :users, :reset_sent_at, :datetime, comment: "密码重设摘要发送时间"
  end
end
