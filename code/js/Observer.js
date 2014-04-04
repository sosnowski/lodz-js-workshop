var APP = APP || {};

App.Observer = (function () {
    var _events = {};
    var Observer = function() {};

    Observer.prototype.on = function (event, fn, scope) {
        if (typeof _events[event] === 'undefined') {
            _events[event] = [];
        }
        _events[event].push({fn: fn, scope: scope || window);
    };

    Observer.prototype.off = function (event, fn, scope) {
        if (typeof _events[event] !== 'undefined') {
            var n = _events[event].length;
            while (n--) {
                if (_events[event][n].fn === fn && (typeof scope === 'undefined' || scope === _events[event][n].scope)) {
                    _events[event].splice(n, 1);
                }
            }

        }
    };

    Observer.prototype.emit = function (event, data) {
        if (typeof _events[event] !== 'undefined') {
            var i = 0,
                n = _events[event].length;
            for (i; i < n; ++i) {
                _events[event][i].fn.call(_events[event][i].scope, data);
            }
        }
    };

    return Observer;
})();
