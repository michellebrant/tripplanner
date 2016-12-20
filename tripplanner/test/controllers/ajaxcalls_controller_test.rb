require 'test_helper'

class AjaxcallsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ajaxcall = ajaxcalls(:one)
  end

  test "should get index" do
    get ajaxcalls_url
    assert_response :success
  end

  test "should get new" do
    get new_ajaxcall_url
    assert_response :success
  end

  test "should create ajaxcall" do
    assert_difference('Ajaxcall.count') do
      post ajaxcalls_url, params: { ajaxcall: {  } }
    end

    assert_redirected_to ajaxcall_url(Ajaxcall.last)
  end

  test "should show ajaxcall" do
    get ajaxcall_url(@ajaxcall)
    assert_response :success
  end

  test "should get edit" do
    get edit_ajaxcall_url(@ajaxcall)
    assert_response :success
  end

  test "should update ajaxcall" do
    patch ajaxcall_url(@ajaxcall), params: { ajaxcall: {  } }
    assert_redirected_to ajaxcall_url(@ajaxcall)
  end

  test "should destroy ajaxcall" do
    assert_difference('Ajaxcall.count', -1) do
      delete ajaxcall_url(@ajaxcall)
    end

    assert_redirected_to ajaxcalls_url
  end
end
