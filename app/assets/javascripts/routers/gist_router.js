GistClone.Routers.GistRouter = Backbone.Router.extend({
	routes: {
		"/": "index"
	},

	initialize: function ($rootEl, gists) {
		this.$rootEl = $rootEl
		this.gists = gists
	}

	index: function() {
		var indexView = new GistClone.Views.GistsIndex({
			collection: this.gists
		});
		this.$rootEl.html(indexView.render().$el);
	}

});