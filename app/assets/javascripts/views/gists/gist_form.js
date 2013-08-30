GistClone.Views.GistForm = Backbone.View.extend({
	events: {
		"submit .gist-form" : "submitForm",
	},

	template: JST["gists/form"],

	initialize: function(collections) {
		this.gists = collections.gists;
		this.favorites = collections.favorites;
	},

	//rendering
	render: function() {
		//console.log(this.gists)
		this.$el.html(this.template({ gists: this.gists }));
		var that = this;
		return this;
	},

	submitForm: function (formData) {
		console.log("submitForm");
		console.log(formData);
	}

});