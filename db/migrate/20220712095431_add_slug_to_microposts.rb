class AddSlugToMicroposts < ActiveRecord::Migration[7.0]
  def change
    add_column :microposts, :slug, :string, comment: 'friendly_id slug'
    add_index :microposts, :slug, unique: true
  end
end
