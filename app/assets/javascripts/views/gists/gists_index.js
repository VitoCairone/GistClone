GistClone.Views.GistsIndex = Backbone.View.extend({

	template: JST["gists/index"],

	render: function() {
		this.$el.html(this.template({ gists: this.collection }));
		return this;
	}
});