App.HeaderController = function (headerView) {
	this.view = headerView;
	App.Application.on('login', this.onLogin, this);
	
	this.view.on('logoutclick', this.logout, this);
}

App.Helpers.inherits(App.HeaderController, App.BaseController);

App.HeaderController.prototype.onLogin = function () {
	this.view.setUserInfo(App.Application.currentUser);
}

App.HeaderController.prototype.logout = function () {
	//TODO
}