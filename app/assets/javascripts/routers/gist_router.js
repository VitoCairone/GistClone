GistClone.Routers.GistRouter = Backbone.Router.extend({
	routes: {
		"": "index",  //this route triggers on both localhost:3000
								 //												 and localhost:3000/
		"gists/new" : "newGist"
	},

	initialize: function ($rootEl, gists, favorites) {
		this.$rootEl = $rootEl;
		this.gists = gists;
		this.favorites = favorites;
	},

	index: function() {
		var indexView = new GistClone.Views.GistsIndex({
			gists: this.gists,
			favorites: this.favorites
		});
		this.$rootEl.html(indexView.render().$el);
	},

	newGist: function () {
		var newGistView = new GistClone.Views.GistForm({
			gists: this.gists,
			favorites: this.favorites
		}, null);
		this.$rootEl.html(newGistView.render().$el);
	}

});