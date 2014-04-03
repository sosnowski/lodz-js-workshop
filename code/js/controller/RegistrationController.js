APP.RegistrationController = function (regView) {

	APP.Application.on('initLogin', this.onInitLogin, this);
	regView.on('submit', this.onSubmit, this);
}

APP.Helpers.inherit(APP.RegistrationController, APP.BaseController);

APP.RegistrationController.prototype.onInitLogin = function () {

}

APP.RegistrationController.prototype.onSubmit = function () {

}
