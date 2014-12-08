var AsciiRow = function(decimal, char) {
    this._decimal = decimal;
    this._char = char;
};

AsciiRow.prototype.getDecimal = function() {
    return this._decimal;
};

AsciiRow.prototype.getChar = function() {
    return this._char;
};

var Ascii = function(){
    this._table = [];
    this._map = {};
};

Ascii.prototype.add = function(asciiRow) {
    this._table.push(asciiRow);
    this._map[asciiRow.getDecimal()] = asciiRow;
};

Ascii.prototype.get = function(index) {
    var ret = this._map[index];
    if (!ret) {
        ret = new AsciiRow(-1, '-1');
    }

    return ret;
};

Ascii.prototype.getLowerBoundary = function() {
    return this._table[0].getDecimal();
};

Ascii.prototype.getUpperBoundary = function() {
    return this._table[this._table.length - 1].getDecimal();
};

Ascii.prototype.toString = function() {
    var ret = '',
        i = 0,
        l = this._table.length;

    for (; i < l; i++) {
        ret = ret + this._table[i].getDecimal() + '\t\t' + this._table[i].getChar() + '\n';
    }

    return ret;
};

module.exports = {
    Ascii: Ascii,
    AsciiRow: AsciiRow
};