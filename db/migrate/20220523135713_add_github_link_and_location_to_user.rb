class AddGithubLinkAndLocationToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :github_url, :string, comment: "github 链接"
    add_column :users, :location, :string, comment: "位置"
    add_column :users, :description, :text, comment: "自我介绍"
  end
end
