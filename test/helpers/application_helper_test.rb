require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "full title helper" do
    assert_equal full_title, "Iverfeng's little website"
    assert_equal full_title("Help"), "Help | Iverfeng's little website"
  end
end