class AddSlugToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :slug, :string, comment: 'friendly_id slug'
    add_index :users, :slug, unique: true
  end
end
