source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 7.0.4.2'
# Use sqlite3 as the database for Active Record
# gem 'mysql2', '~> 0.5.3'
gem 'pg', '~> 1.3'
# Use Puma as the app server
gem 'puma', '~> 6.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.11', '>= 2.11.5'
# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 5.0'
# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1', '>= 3.1.17'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Haml is a templating engine for HTML. It's designed to make it both easier and more pleasant to write HTML documents
gem 'haml', '~> 5.2', '>= 5.2.2'

gem 'sassc-rails', '~> 2.1', '>= 2.1.2'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]

  # Reduces boot times through caching; required in config/boot.rb
  gem "bootsnap", require: false
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '~> 4.2'

  gem "rails_real_favicon", "~> 0.1.1"
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 3.36'
  gem 'selenium-webdriver', '~> 4.8'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers', '~> 5.2.0'
  gem 'rails-controller-testing', '~> 1.0.5'
  gem 'minitest-reporters', '~> 1.5.0'
  gem 'guard', '~> 2.18.0'
  gem 'guard-minitest', '~> 2.4.6'
end

group :production do
  # gem 'pg', '0.20.0'
  # The Ruby cloud services library. Supports all major cloud providers including AWS, Rackspace, Linode, Blue Box, StormOnDemand, and many others. Full support for most AWS services including EC2, S3, CloudWatch, SimpleDB, ELB, and RDS.
  # gem 'fog', '~> 2.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Nokogiri (鋸) is an HTML, XML, SAX, and Reader parser. Among Nokogiri's many features is the ability to search documents via XPath or CSS3 selectors.
gem 'nokogiri', '~> 1.13'

# Faker, a port of Data::Faker from Perl, is used to easily generate fake data: names, addresses, phone numbers, etc.
gem 'faker', '~> 2.20'

# Hooks into will_paginate to format the html to match Twitter Bootstrap styling. Extension code was originally written by Isaac Bowen (https://gist.github.com/1182136).
gem 'bootstrap-will_paginate', '~> 1.0'

# Upload files in your Ruby applications, map them to a range of ORMs, store them on different backends.
gem 'carrierwave', '~> 2.2', '>= 2.2.2'

# Manipulate images with minimal use of memory via ImageMagick / GraphicsMagick
gem 'mini_magick', '~> 4.11'

# Centralization of locale data collection for Ruby on Rails.
gem 'rails-i18n', '~> 7.0', '>= 7.0.3'

gem 'psych', '~> 3.3.2'

# Pagination
gem 'kaminari', '~> 1.2'

gem 'html2haml', '~> 2.2'

gem 'sprockets-rails', '~> 3.4'

gem 'haml-rails', '~> 2.0'

gem 'turbo-rails', '~> 1.0'

gem 'stimulus-rails', '~> 1.0'

gem 'cssbundling-rails', '~> 1.1'

gem 'letter_avatar', '~> 0.3.9'

gem 'chinese_pinyin', '~> 1.1'

gem 'tailwindcss-rails', '~> 2.0'

gem "sassc", "~> 2.4"

gem "devise", "~> 4.8"

gem "omniauth", "~> 2.1"

# Execute jobs in the background [https://github.com/mperham/sidekiq]
gem "sidekiq", "~> 7.0"

gem "omniauth-github", "~> 2.0"

gem "redcarpet", "~> 3.5"

gem "evil_icons", "~> 1.10"

gem "friendly_id", "~> 5.4"

gem "jsbundling-rails", "~> 1.0"

gem "foreman", "~> 0.87.2"

gem "omniauth-rails_csrf_protection", "~> 1.0"

# gem provides Rack CORS Middleware to our Rails app, allowing it to support cross-origin resource sharing.
gem "rack-cors", :require => "rack/cors"
