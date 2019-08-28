require 'test_helper'

class StatisticPagesControllerTest < ActionDispatch::IntegrationTest
  def basic_title
    "Setaria"
  end

  test "should get root" do
    get root_url
    assert_response :success
  end

  test "should get home" do
    get home_url
    assert_response :success
    assert_select "title", "Home | #{basic_title}"
  end

  test "should get help" do
    get help_url
    assert_response :success
    assert_select "title", "Help | #{basic_title}"

  end

  test "should get about" do
    get about_url
    assert_response :success
    assert_select "title", "About | #{basic_title}"
  end

  test "should get contact" do
    get contact_url
    assert_response :success
    assert_select "title", "Contact | #{basic_title}"
  end
end
