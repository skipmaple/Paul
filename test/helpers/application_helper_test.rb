require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "full title helper" do
    assert_equal full_title, "艾弗枫的小站"
    assert_equal full_title("Help"), "Help | 艾弗枫的小站"
  end
end