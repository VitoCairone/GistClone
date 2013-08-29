class RootsController < ApplicationController
  def index
    @gists = Gist.all
    render :index
  end
end
