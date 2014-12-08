var ArgumentsHelper = function(arguments) {
    if (!arguments || arguments.length == 0) {
        throw new Error('No arguments have been provided.');
    }

    this._data = {};

    var i = 0,
        l = arguments.length,
        indexOf;

    for (; i < l; i++) {
        indexOf = arguments[i].indexOf(':');
        if (indexOf < 0) {
            throw new Error('Invalid arguments.');
        }

        this._data[arguments[i].substring(0, indexOf)] = arguments[i].substring(indexOf + 1);
    }
};

ArgumentsHelper.prototype.getData = function() {
    return this._data;
};

module.exports = ArgumentsHelper;