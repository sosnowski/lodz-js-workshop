App.EventEmitter = function () {
    this._events = {};
}

App.EventEmitter.prototype.on = function (event, fn, scope) {
    if (typeof this._events[event] === 'undefined') {
        this._events[event] = [];
    }
    this._events[event].push({fn: fn, scope: scope || window});
};

App.EventEmitter.prototype.off = function (event, fn, scope) {
    if (typeof this._events[event] !== 'undefined') {
        var n = _events[event].length;
        while (n--) {
            if (this._events[event][n].fn === fn && (typeof scope === 'undefined' || scope === this._events[event][n].scope)) {
                this._events[event].splice(n, 1);
            }
        }

    }
};

App.EventEmitter.prototype.emit = function (event, data) {
    if (typeof this._events[event] !== 'undefined') {
        var i = 0,
            n = this._events[event].length;
        for (i; i < n; ++i) {
            this._events[event][i].fn.call(this._events[event][i].scope, data);
        }
    }
};
