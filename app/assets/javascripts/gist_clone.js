window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var $rootEl = $("#backbone-div");
		var gists = new GistClone.Collections.Gists();
		gists.fetch({
			success: function () {
				var favorites = new GistClone.Collections.Favorites();
				favorites.fetch({
					success: function () {
						var gistRouter = new GistClone.Routers.GistRouter($rootEl, gists, favorites);
						Backbone.history.start();
					}
				});
			}
		});
  }
};

$(document).ready(function(){
  GistClone.initialize();
});
