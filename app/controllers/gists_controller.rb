class GistsController < ApplicationController
  before_filter :require_logged_in

  def index
    @gists = current_user.gists
    #render :json => @gists
    render "index.rabl"
  end
end
