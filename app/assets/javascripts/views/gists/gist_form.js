GistClone.Views.GistForm = Backbone.View.extend({
	events: {
		"submit .gist-form" : "submitForm",
	},

	template: JST["gists/form"],

	initialize: function(collections, gist) {
		this.gists = collections.gists;
		this.favorites = collections.favorites;
		this.gist = gist;
	},

	//rendering
	render: function() {
		//console.log(this.gists)
		//TODO: this.gist should be a single gist OR null
		this.$el.html(this.template({ gist: this.gist }));
		var that = this;
		return this;
	},

	submitForm: function (event) {
		event.preventDefault();
		var formData = {title: $("input[name=gist\\[title\\]]").val()};
		if (GistClone.Verbose) {
			console.log(formData);
		}
		var new_gist = this.gists.create(formData, {
			success: function () {
				if (GistClone.Verbose) {
					console.log("Saved model");
				}
				Backbone.history.navigate("#/");
			},
			error: function() {
				console.log("Failed to save model.");
			}
		});
		//this occurs before the redirect (?) and prevents the favorites attribute,
		//which is provided by RABL when fetching from the database,
		//from being undefined
		new_gist.set("favorites",[])
	}

});