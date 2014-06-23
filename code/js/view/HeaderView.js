App.HeaderView = function () {
	App.BaseView.call(this);
	this._el = this.render(this.getTemplate('headerTpl'));
	this._counter = this._el.querySelector('.app-slogan strong');
	this._userInfo = this._el.querySelector('.logged-user-info');

	document.body.appendChild(this._el);
}

App.Helpers.inherits(App.HeaderView, App.BaseView);

App.HeaderView.prototype.setUserInfo = function (user) {
	this._userInfo.classList.remove('no-user');

	this._userInfo.querySelector('span').innerHTML = user.login;
	this._userInfo.querySelector('img').src = App.Helpers.gravatar(user.login, 20);
}
