var genJs = __dirname + "/TableGen.js"
require(genJs)
var fs = require('fs')


var filename = process.argv[2]
var file = fs.readFileSync(filename)

var generator = new TableGen()
var model = JSON.parse(file)
var code = generator.generate(model)

var name = generator.buildClassName(model.name)

var outputFilename = name + ".js"

fs.writeFileSync(outputFilename, code)





