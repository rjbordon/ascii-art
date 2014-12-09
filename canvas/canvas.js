var Canvas = function() {
    this._table = [];
    this._table.push([]);
};

Canvas.prototype.draw = function(char) {
    this._table[this._table.length - 1].push(char);
};

Canvas.prototype.newRow = function() {
    this._table.push([]);
};

Canvas.prototype.toString = function() {
    var ret = '';
    for (var i = 0; i < this._table.length; i++) {
        for (var j = 0; j < this._table[i].length; j++) {
            ret = ret + this._table[i][j];
        }
        ret = ret + '\n';
    }

    return ret;
};

module.exports = Canvas;