console.log('Running code-separator');

var handler = function(compileStep) {
	console.log('compile step');
	console.log(compileStep);
}

Plugin.registerSourceHandler("js", handler);