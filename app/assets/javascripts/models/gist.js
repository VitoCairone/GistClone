GistClone.Models.Gist = Backbone.Model.extend({
	parse: function (response, options) {
		var new_gist_files = [];
		_(response.gist_files).each(
			function (gistFileAttrs) {
				gist_file_model = new GistClone.Models.GistFile(gistFileAttrs);
				//console.log(GistClone.Collections.GistFiles)
				//GistClone.Collections.GistFiles.create(gitFileAttrs);
				new_gist_files.push(gist_file_model);
			}
		)
		response.gist_files = new_gist_files;

		if (GistClone.Verbose) {
			console.log("parse<<");
			console.log(response);
			console.log(options);
			console.log(">>");
		}
		return response;
	}
});