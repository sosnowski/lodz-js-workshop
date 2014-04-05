App.LoginController = function (loginView) {
	this.view = loginView;
	App.Application.on('logininit', this.onLoginInit, this);
	App.Application.socket.on('login', this.onServerLogin.bind(this));

	loginView.on('login', this.onLogin, this);
	loginView.on('registerclick', this.onRegisterClick, this);
}

App.Helpers.inherits(App.LoginController, App.BaseController);

App.LoginController.prototype.onLoginInit = function () {
}

App.LoginController.prototype.onLogin = function (data) {
}

App.LoginController.prototype.onRegisterClick = function () {
}

App.LoginController.prototype.onServerLogin = function (res) {
}
