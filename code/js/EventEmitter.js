App.EventEmitter = function () {
}

App.EventEmitter.prototype.on = function (event, fn, scope) {
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
};
