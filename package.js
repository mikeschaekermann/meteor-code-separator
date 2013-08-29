Package.describe({
	summary: "Remove inline server code from client code and vice versa."
});

Package._transitional_registerBuildPlugin({
	name: "codeSeparator",
	use: [],
	sources: [
		'plugin/code-separator.js'
	]
});