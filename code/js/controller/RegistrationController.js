App.RegistrationController = function (regView) {
	this.view = regView;

	App.Application.on('registerinit', this.onRegisterInit, this);
	regView.on('register', this.onRegister, this);
}

App.Helpers.inherits(App.RegistrationController, App.BaseController);

App.RegistrationController.prototype.onRegister = function (data) {
	//TODO
}

App.RegistrationController.prototype.onRegisterInit = function () {
	//TODO
}
