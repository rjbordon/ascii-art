var Constant = function(universe) {
    this._lowerBoundary = universe.getLowerBoundary();
    this._upperBoundary = universe.getUpperBoundary();
    this._constant = Math.floor(Math.random()*(this._upperBoundary - this._lowerBoundary + 1) + this._lowerBoundary);
};

Constant.prototype.visit = function() {
    return this._constant;
};

module.exports = Constant;