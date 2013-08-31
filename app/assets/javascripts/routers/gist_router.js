GistClone.Routers.GistRouter = Backbone.Router.extend({
	routes: {
		"": "index",  //this route triggers on both localhost:3000
								 //												 and localhost:3000/
		"gists/new" : "newGist",
		"gists/:gist_id/edit" : "edit"
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
	},

	//the parameter here is the matched part of the url
	edit: function(gist_id) {
		//console.log(gist_id);
		//console.log(this.gists.findWhere({id: 58 }));
		var this_gist = this.gists.findWhere({id: parseInt(gist_id) });
		console.log(this_gist);
		var newGistView = new GistClone.Views.GistForm({
			gists: this.gists,
			favorites: this.favorites
		}, this_gist);
		this.$rootEl.html(newGistView.render().$el);
	}

});