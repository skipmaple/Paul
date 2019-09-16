# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name:                  "Drew Lee",
             email:                 "skipmaple@gmail.com",
             password:              "mypassword",
             password_confirmation: "mypassword",
             admin:                 true,
             activated:             true,
             activated_at:          Time.zone.now
            )

User.create!(name:                  "Example User",
             email:                 "example@gmail.com",
             password:              "foobar",
             password_confirmation: "foobar",
             admin:                 true,
             activated:             true,
             activated_at:          Time.zone.now
            )

email_list = []

99.times do
  name = Faker::Name.name
  prefix = name.split(' ').last
  # suffix = %w[gmail 163 126 qq hotmail yahoo]
  suffix = %w[gmail]
  email = "#{prefix}@#{suffix[rand(suffix.size)]}.com"
  # next if User.pluck(:email).include?(email)
  puts email
  next if email_list.include?(email) || prefix.include?('\'') || prefix.include?('.')
  email_list.push(email)
  password = "mypassword"
  User.create!(name:                  name,
               email:                 email,
               password:              password,
               password_confirmation: password,
               activated:             true,
               activated_at:          Time.zone.now
              )
end

users = User.order(:created_at).take(7)
50.times do
  content = Faker::Lorem.sentence
  puts content
  users.each { |user| user.microposts.create!(content: content)}
end