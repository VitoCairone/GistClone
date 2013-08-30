class FavoritesController < ApplicationController
  def index
    @favorites = Favorite.all
    render :json => @favorites
  end

  def create
    puts params
    @favorite = Favorite.new(params[:favorite])
    if @favorite.save
      render :json => @favorite
    else
      render :json => @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find_by_gist_id_and_user_id(
      params[:gist_id],
      current_user.id
    )
    @favorite.destroy
    render :json => @favorite, status: 200
  end
end
