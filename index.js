var ascii = require('./ascii').ascii,
    asciiTable = new ascii.Ascii(),
    ArgumentsHelper = require('./utils').ArgumentsHelper,
    arguments = new ArgumentsHelper(process.argv.slice(2)).getData(),
    Canvas = require('./canvas').Canvas;

for (var i = 32; i < 127; i++) {
    asciiTable.add(new ascii.AsciiRow(i, String.fromCharCode(i)));
}

console.log(asciiTable.toString());

var algo = require('./algorithms')(asciiTable),
    visitor = algo.get(arguments.algo);

var canvas = new Canvas({
    height: parseInt(arguments.canvasHeight),
    width: parseInt(arguments.canvasWidth),
    universe: asciiTable,
    visitor: visitor
});
canvas.draw(console.log);