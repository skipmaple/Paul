class AddLocaleToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :locale, :string, default: 'zh-CN', comment: '语言'
  end
end
