class AddActivationToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :activation_digest, :string, comment: "激活摘要"
    add_column :users, :activated, :boolean, default: false, comment: "激活状态"
    add_column :users, :activated_at, :datetime, comment: "激活时间"
  end
end
