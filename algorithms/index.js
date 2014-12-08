module.exports = function(univ) {
    var _algorithms = {
            random: require('./random'),
            constant: require('./constant')
        },
        _instances = null,
        _init = function(universe) {
            if (_instances == null) {
                _instances = {};
                for (var p in _algorithms) {
                    if (_algorithms.hasOwnProperty(p)) {
                        _instances[p] = new _algorithms[p](universe);
                    }
                }
            }
        };

    _init(univ);

    return {
        get: function(key) {
            return _instances[key];
        }
    };
};