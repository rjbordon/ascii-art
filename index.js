var ascii = require('./ascii').ascii,
    asciiTable = new ascii.Ascii(),
    utils = require('./utils'),
    ArgumentsHelper = utils.ArgumentsHelper,
    arguments = new ArgumentsHelper(process.argv.slice(2)).getData(),
    Canvas = require('./canvas').Canvas,
    canvas = new Canvas(),
    Designer = require('./canvas').Designer;

for (var i = 32; i < 127; i++) {
    asciiTable.add(new ascii.AsciiRow(i, String.fromCharCode(i)));
}

console.log(asciiTable.toString());

var algo = require('./algorithms')(asciiTable),
    visitor = algo.get(arguments.algo);

var designer = new Designer({
    height: parseInt(arguments.canvasHeight),
    width: parseInt(arguments.canvasWidth),
    universe: asciiTable,
    visitor: visitor
});
designer.draw(canvas);

console.log(canvas.toString());