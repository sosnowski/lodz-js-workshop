App.Helpers = {
	inherits: function (Child, Parent) {
		var F = function () {};
		F.prototype = Parent.prototype;
		Child.prototype  = new F();
		Child.prototype.constructor = Child;
	}
};
