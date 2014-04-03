APP.LoginController = function (loginView) {

	APP.Application.on('initLogin', this.onInitLogin, this);
	loginView.on('submit', this.onSubmit, this);
}

APP.Helpers.inherit(APP.LoginController, APP.BaseController);

APP.LoginController.prototype.onInitLogin = function () {

}

APP.LoginController.prototype.onSubmit = function () {

}
