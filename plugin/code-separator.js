console.log('Running code-separator');

var handler = function(compileStep) {
	error({ message: "Parsing file", sourcePath: compileStep.inputPath })
}

Plugin.registerSourceHandler("js", handler);