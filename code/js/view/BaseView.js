APP.BaseView = function () {

};

APP.BaseView.prototype = {
	getTemplate: function (templateId) {
		var templ = document.getElementById(templateId);
		if (!templ) {
			throw new Error();
		}
		return templ.innerHTML;
	},
	render: function (html, callback) {
		var el = document.createElement('div');
		el.innerHTML = html;
		return el.firstChild;
	}
};
