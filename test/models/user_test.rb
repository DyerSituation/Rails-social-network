require 'test_helper'

class UserTest < ActiveSupport::TestCase
  
  def setup
    @user = User.new(name: "Example User", email: "user@example.com")
  end
  
  test "should be valid" do
    assert @user.valid?
  end
  
  test "name should be present" do
    @user.name = "     "
    assert_not @user.valid?
  end
  
  test "email should be present" do
    @user.name = " "
    assert_not @user.valid?
  end
  
  test "name should be under 50 chars" do 
    @user.name = "a" * 51
    assert_not @user.valid?
  end
  
  test "email should be under 255" do
    @user.email = "a" * 244 + "@example.com"
    assert_not @user.valid?
  end
end
