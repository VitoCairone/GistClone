window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //alert('Hello from Backbone!');
		var $rootEl = $("body");
		var gists = new GistClone.Collections.Gists();
		gists.fetch({
			success: function (collection) {
				var gistRouter = new GistClone.Routers.GistRouter($rootEl, gists);
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  GistClone.initialize();
});
