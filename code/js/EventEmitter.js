App.EventEmitter = function () {
    this._events = {};
}

App.EventEmitter.prototype.on = function (event, fn, ctx) {
    if (typeof this._events[event] === 'undefined') {
        this._events[event] = [];
    }
    this._events[event].push({fn: fn, ctx: ctx || window});
};

App.EventEmitter.prototype.emit = function (event, data) {
    if (typeof this._events[event] !== 'undefined') {
        var i = 0,
            n = this._events[event].length;
        for (i; i < n; ++i) {
            this._events[event][i].fn.call(this._events[event][i].ctx, data);
        }
    }
};
