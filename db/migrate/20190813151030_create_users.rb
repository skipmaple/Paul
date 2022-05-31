# frozen_string_literal: true

class CreateUsers < ActiveRecord::Migration[6.0]

  def self.up
    create_table :users do |t|
      t.string :name, comment: "用户名"

      ## Database authenticatable
      t.string :email, null: false, default: "", comment: "邮箱"
      t.string :encrypted_password, null: false, default: "", comment: "密码加密"

      ## Recoverable
      t.string :reset_password_token, comment: "重设密码token"
      t.datetime :reset_password_sent_at, comment: "重设密码token发送时间"

      ## Rememberable
      t.datetime :remember_created_at, comment: "记住我创建时间"

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false, comment: "登录次数"
      t.datetime :current_sign_in_at, comment: "当前登录时间"
      t.datetime :last_sign_in_at, comment: "最后一次登录时间"
      t.string   :current_sign_in_ip, comment: "当前登录IP"
      t.string   :last_sign_in_ip, comment: "最后一次登录IP"

      ## Confirmable
      t.string   :confirmation_token, comment: "确认注册token"
      t.datetime :confirmed_at, comment: "确认注册时间"
      t.datetime :confirmation_sent_at, comment: "确认注册token发送时间"
      t.string   :unconfirmed_email, comment: "未确认邮箱"

      # Lockable
      t.integer  :failed_attempts, default: 0, null: false, comment: "登录失败尝试次数" # Only if lock strategy is :failed_attempts
      t.string   :unlock_token, comment: "解锁token" # Only if unlock strategy is :email or :both
      t.datetime :locked_at, comment: "加锁时间"

      # OmniAuth
      t.string "provider"
      t.string "uid"

      # Custom
      t.boolean :admin, default: false, comment: "管理员"
      t.string :language, default: "zh-CN", comment: "语言"
      t.string :location, comment: "位置"
      t.string :github_url, comment: "github 链接"
      t.text :description, comment: "自我介绍"



      # Uncomment below if timestamps were not included in your original model.
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
    add_index :users, :unlock_token,         unique: true
  end

  def self.down
    drop_table :users
  end

  # create_table "users", force: :cascade do |t|
  #   t.string "name", comment: "用户名"
  #   t.string "email", comment: "邮箱"
  #   t.datetime "created_at", null: false
  #   t.datetime "updated_at", null: false
  #   t.string "password_digest", comment: "密码验证"
  #   t.string "remember_digest", comment: "记住我"
  #   t.boolean "admin", default: false, comment: "管理员"
  #   t.string "activation_digest", comment: "激活摘要"
  #   t.boolean "activated", default: false, comment: "激活状态"
  #   t.datetime "activated_at", precision: nil, comment: "激活时间"
  #   t.string "reset_digest", comment: "密码重设摘要"
  #   t.datetime "reset_sent_at", precision: nil, comment: "密码重设摘要发送时间"
  #   t.string "locale", default: "zh-CN", comment: "语言"
  # end
end
