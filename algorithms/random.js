var Random = function(universe) {
    this._lowerBoundary = universe.getLowerBoundary();
    this._upperBoundary = universe.getUpperBoundary();
};

Random.prototype.visit = function() {
    return Math.floor(Math.random()*(this._upperBoundary - this._lowerBoundary + 1) + this._lowerBoundary);
};

module.exports = Random;