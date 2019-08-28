# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_28_144459) do

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin", force: :cascade do |t|
    t.string "name", comment: "用户名"
    t.string "email", comment: "邮箱"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "password_digest", comment: "密码验证"
    t.string "remember_digest", comment: "记住我"
    t.boolean "admin", default: false, comment: "管理员"
    t.string "activation_digest", comment: "激活摘要"
    t.boolean "activated", default: false, comment: "激活状态"
    t.datetime "activated_at", comment: "激活时间"
    t.string "reset_digest", comment: "密码重设摘要"
    t.datetime "reset_sent_at", comment: "密码重设摘要发送时间"
  end

end
