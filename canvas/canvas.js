var Canvas = function(options) {
    this._height = options.height;
    this._width = options.width;
    this._universe = options.universe;
    this._visitor = options.visitor;
};

Canvas.prototype.draw = function(destination) {
    var log = '';
    for (var i = 0; i < this._height; i++) {
        for (var j = 0; j < this._width; j++) {
            log = log + this._universe.get(this._visitor.visit()).getChar();
        }
        log = log + '\n';
    }

    destination(log);
};

module.exports = Canvas;