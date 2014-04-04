App.LoginController = function (loginView) {

	App.Application.on('initLogin', this.onInitLogin, this);
	loginView.on('submit', this.onSubmit, this);
}

App.Helpers.inherits(App.LoginController, App.BaseController);

App.LoginController.prototype.onInitLogin = function () {

}

App.LoginController.prototype.onSubmit = function () {

}
