var Designer = function(options) {
    this._height = options.height;
    this._width = options.width;
    this._universe = options.universe;
    this._visitor = options.visitor;
};

Designer.prototype.draw = function(canvas) {
    for (var i = 0; i < this._height; i++) {
        for (var j = 0; j < this._width; j++) {
            canvas.draw(this._universe.get(this._visitor.visit()).getChar());
        }
        canvas.newRow();
    }
};

module.exports = Designer;