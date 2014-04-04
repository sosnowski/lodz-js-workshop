App.RegistrationController = function (regView) {

	App.Application.on('initLogin', this.onInitLogin, this);
	regView.on('submit', this.onSubmit, this);
}

App.Helpers.inherits(App.RegistrationController, App.BaseController);

App.RegistrationController.prototype.onInitLogin = function () {

}

App.RegistrationController.prototype.onSubmit = function () {

}
