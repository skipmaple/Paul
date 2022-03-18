# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create!(
    name: "Drew Lee",
    email: "skipmaple@gmail.com",
    password: "mypassword",
    password_confirmation: "mypassword",
    admin: true,
    activated: true,
    activated_at: Time.zone.now
)

User.create!(
    name: "Example User",
    email: "example@gmail.com",
    password: "foobar",
    password_confirmation: "foobar",
    admin: true,
    activated: true,
    activated_at: Time.zone.now
)

email_list = []

99.times do
  Faker::Config.locale = :en
  name = Faker::Name.name
  first_name = name.split(' ').last
  email = Faker::Internet.free_email(name: first_name)
  # next if User.pluck(:email).include?(email)
  puts email
  next if email_list.include?(email) || first_name.include?('\'') || first_name.include?('.')
  email_list.push(email)
  password = "mypassword"
  User.create!(
      name: name,
      email: email,
      password: password,
      password_confirmation: password,
      activated: true,
      activated_at: Time.zone.now
  )
end

# Microposts
users = User.order(:created_at).take(7)
50.times do
  content =  Faker::Quote.matz
  puts content
  users.each { |user| user.microposts.create!(content: content) }
end

# Following relationships
users = User.all
user = users.first
following = users[2..50]
followers = users[3..40]
following.each { |followed| user.follow(followed) }
followers.each { |follower| follower.follow(user) }
