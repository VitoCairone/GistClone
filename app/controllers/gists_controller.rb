class GistsController < ApplicationController
  before_filter :require_logged_in

  def create
    params[:gist][:user_id] = current_user.id
    @gist = Gist.new(params[:gist]);
    if @gist.save
      render :json => @gist, status: 200
    else
      render :json, @gist.errors.full_messages, status: 422
    end
  end

  def index
    @gists = current_user.gists
    #render :json => @gists
    render "index.rabl"
  end
end
