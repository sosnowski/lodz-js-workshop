window.APP.Application = (function () {
	window.document.addEventListener('DOMContentLoaded', function () {
		new APP.MainController();
		new APP.HeaderController(new APP.HeaderView());
		new APP.LoginController(new APP.LoginView());
		new APP.RegistrationController(new APP.RegistrationView());
		new APP.TweetsController(new TweetsView());
	});

	return new APP.Observer();
}())
