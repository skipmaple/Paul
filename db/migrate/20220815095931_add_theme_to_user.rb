class AddThemeToUser < ActiveRecord::Migration[7.0]
  def up
    add_column :users, :theme, :string, default: 'light', comment: '主题'
    add_index :users, :theme
  end

  def down
    remove_column :users, :theme, :string, default: 'light', comment: '主题'
    remove_index :users, :theme
  end
end
