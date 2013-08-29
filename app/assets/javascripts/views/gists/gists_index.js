GistClone.Views.GistsIndex = Backbone.View.extend({

	template: JST["gists/index"],

	render: function() {
		//console.log("Render");
		//console.log(this.collection);
		this.$el.html(this.template({ gists: this.collection }));
		return this;
	}
});