# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_15_095931) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_type", "sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_type_and_sluggable_id"
  end

  create_table "microposts", force: :cascade do |t|
    t.text "content", comment: "博客内容"
    t.bigint "user_id", null: false, comment: "user_id为外键"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "picture", comment: "micropost上传图片"
    t.string "slug", comment: "friendly_id slug"
    t.index ["slug"], name: "index_microposts_on_slug", unique: true
    t.index ["user_id", "created_at"], name: "index_microposts_on_user_id_and_created_at"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title", comment: "标题"
    t.string "excerpt", comment: "摘要"
    t.string "feature_image", comment: "图片"
    t.text "body", comment: "内容"
    t.integer "visibility_level", default: 0, comment: "可见性"
    t.string "reading_time", comment: "阅读时间"
    t.string "url", comment: "链接"
    t.datetime "published_at", default: "2022-07-12 06:40:46", comment: "发布时间"
    t.bigint "user_id", comment: "用户id"
    t.string "slug", comment: "friendly slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_posts_on_slug", unique: true
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "relationships", force: :cascade do |t|
    t.integer "follower_id"
    t.integer "followed_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followed_id"], name: "index_relationships_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_relationships_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", comment: "用户名"
    t.string "email", default: "", null: false, comment: "邮箱"
    t.string "encrypted_password", default: "", null: false, comment: "密码加密"
    t.string "reset_password_token", comment: "重设密码token"
    t.datetime "reset_password_sent_at", precision: nil, comment: "重设密码token发送时间"
    t.datetime "remember_created_at", precision: nil, comment: "记住我创建时间"
    t.integer "sign_in_count", default: 0, null: false, comment: "登录次数"
    t.datetime "current_sign_in_at", precision: nil, comment: "当前登录时间"
    t.datetime "last_sign_in_at", precision: nil, comment: "最后一次登录时间"
    t.string "current_sign_in_ip", comment: "当前登录IP"
    t.string "last_sign_in_ip", comment: "最后一次登录IP"
    t.string "confirmation_token", comment: "确认注册token"
    t.datetime "confirmed_at", precision: nil, comment: "确认注册时间"
    t.datetime "confirmation_sent_at", precision: nil, comment: "确认注册token发送时间"
    t.string "unconfirmed_email", comment: "未确认邮箱"
    t.integer "failed_attempts", default: 0, null: false, comment: "登录失败尝试次数"
    t.string "unlock_token", comment: "解锁token"
    t.datetime "locked_at", precision: nil, comment: "加锁时间"
    t.string "provider"
    t.string "uid"
    t.boolean "admin", default: false, comment: "管理员"
    t.string "language", default: "zh-CN", comment: "语言"
    t.string "location", comment: "位置"
    t.string "github_url", comment: "github 链接"
    t.text "description", comment: "自我介绍"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug", comment: "friendly_id slug"
    t.string "theme", default: "light", comment: "主题"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["slug"], name: "index_users_on_slug", unique: true
    t.index ["theme"], name: "index_users_on_theme"
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
