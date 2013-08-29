GistClone.Views.GistsIndex = Backbone.View.extend({
	events: {
		"click .favorite-btn" : "toggleFavorite",
	},

	template: JST["gists/index"],

	render: function() {
		this.$el.html(this.template({ gists: this.collection }));
		var that = this;
		console.log(this.collection)
		this.collection.each(function (gist) {
			//console.log(gist);
			var $button = (that.$el).find("#gist-" + gist.id);
 			if (gist.get("favorites").length > 0) {
 				$button.text("Unfavorite");
 			} else {
 				$button.text("Favorite");
 			}
		});
		return this;
	},

	toggleavorite: function(event) {
		// console.log(this);
		// console.log(event.currentTarget);
	}
});