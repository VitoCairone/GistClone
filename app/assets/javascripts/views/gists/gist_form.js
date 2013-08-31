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
		this.$el.html(this.template({ gist: this.gist }));
		var that = this;
		return this;
	},

	submitForm: function (event) {
		event.preventDefault();
		var formData = {
			title: $("input[name=gist\\[title\\]]").val(),
			gist_file_name: $("input[name=gist\\[gist_file\\[name\\]\\]]").val(),
			gist_file_body: $("textarea[name=gist\\[gist_file\\[body\\]\\]]").val(),
		};
		var new_gist_file = new GistClone.Models.GistFile({
				name: formData.gist_file_name,
				body: formData.gist_file_body
		});
		var new_gist = new GistClone.Models.Gist({
			title: formData.title,
		});
		//new_gist_files attribute should actually be an array
		//but toJSON can't handle arrays
		//in other words, Backbone doesn't allow anything to work at any time
		new_gist.set("gist_files",new_gist_file)
		var new_gist = this.gists.create(new_gist, {
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