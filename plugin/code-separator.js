var handler = function(compileStep) {
	error({ message: "Parsing file", sourcePath: compileStep.inputPath });
	compileStep.addJavaScript({
		path: "program.js",
		data: "var HARR = 'ding'; alert('BLUB');",
    	sourcePath: "program.js",
    	bare: true
	});
}

Plugin.registerSourceHandler("ext", handler);