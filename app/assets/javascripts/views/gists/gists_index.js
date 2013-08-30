GistClone.Views.GistsIndex = Backbone.View.extend({
	events: {
		"click .favorite-btn" : "toggleFavorite",
	},

	template: JST["gists/index"],

	initialize: function(collections) {
		this.gists = collections.gists;
		this.favorites = collections.favorites;
	},

	//rendering
	render: function() {
		if (GistClone.Verbose) {
			console.log(this.gists)
			console.log(this.favorites)
		}
		this.$el.html(this.template({ gists: this.gists }));
		var that = this;
		this.gists.each(function (gist) {
			if (GistClone.Verbose) {
				console.log("gist.toJSON");
				console.log(gist.toJSON());
			}

			var $button = (that.$el).find("#gist-" + gist.id);
			$button.data("id",gist.id);
 			if (gist.get("favorites").length > 0) {
 				$button.text("Unfavorite");
				$button.data("favorite-model",
										 that.favorites.findWhere(gist.get("favorites")[0]));
				//$button.addClass("action-unfavorite");
 			} else {
 				$button.text("Favorite");
				$button.addClass("action-favorite")
 			}
		});
		return this;
	},

	//toggling
	toggleFavorite: function(event) {
		var $target = $(event.currentTarget);
		var gist_id = $target.data("id");
		var user_id = 1; // TODO: set correct user id
		if ($target.hasClass("action-favorite")) {
			//favorite
			var new_favorite = this.favorites.create({
					user_id: user_id,
					gist_id: gist_id
			},
			{
				success: function () {
					$target.text("Unfavorite");
					$target.removeClass("action-favorite");
				}
			});
			$target.data("favorite-model", new_favorite);
		 } else {
		 	//unfavorite
			var favorite = $target.data("favorite-model");
			//console.log(favorite);
			favorite.destroy({
				success: function () {
					$target.text("Favorite");
					$target.addClass("action-favorite");
				},
				error: function () {
					alert("Error in Destroy");
				}
			});

		 } //close action if-else
	}

});