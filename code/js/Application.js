window.App.Application = (function () {

	var app = new App.EventEmitter();

	app.socket = io.connect(App.Config.serverUrl);
	
	app.socket.on('error', function (reason){
        alert('Server  connection error!');
    });

	window.document.addEventListener('DOMContentLoaded', function () {
		new App.HeaderController(new App.HeaderView());
		new App.LoginController(new App.LoginView());
		new App.RegistrationController(new App.RegistrationView());
		new App.TweetsController(new App.TweetsView());
	});

	return app;
}())
