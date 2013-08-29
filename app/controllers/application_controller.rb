class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  def redirect_logged_in_user
    if logged_in?
      flash[:errors] ||= []
      flash[:errors] << "You are already logged in"
      redirect_to current_user
    end
  end

  def require_logged_in
    unless logged_in?
      redirect_to new_session_path
    end
  end
end
