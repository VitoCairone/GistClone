GistClone.Models.Gist = Backbone.Model.extend({
	parse: function (response, options) {
		var new_gist_files = [];
		_(response.gist_files).each(
			function (gistFileAttrs) {
				gist_file_model = new GistClone.Models.GistFile(gistFileAttrs);
				new_gist_files.push(gist_file_model);
			}
		)
		response.gist_files = new_gist_files;
		return response;
	},

	toJSON: function () {
		return {
			gist: {
				title: this.get("title"),
				gist_files_attributes: {
					0: {
						name: this.get("gist_files").get("name"),
						body: this.get("gist_files").get("body")
					}
				}
			}
		}
 	}
});