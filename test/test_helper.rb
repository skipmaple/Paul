ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'rails/test_help'
require 'minitest/reporters'
MiniTest::Reporters.use!

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all
  include ApplicationHelper

  # 如果用户已登录，返回true
  def is_logged_in?
    session[:user_id].present?
  end

  # Add more helper methods to be used by all tests here...
end
