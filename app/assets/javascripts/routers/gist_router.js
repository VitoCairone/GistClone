GistClone.Routers.GistRouter = Backbone.Router.extend({
	routes: {
		"": "index"  //this route triggers on both localhost:3000
								 //												 and localhost:3000/
	},

	initialize: function ($rootEl, gists) {
		//console.log("Initialize Router");
		//console.log($rootEl.text());
		this.$rootEl = $rootEl
		this.gists = gists
	},

	index: function() {
		//console.log("called index in router")
		var indexView = new GistClone.Views.GistsIndex({
			collection: this.gists
		});
		this.$rootEl.html(indexView.render().$el);
	}

});