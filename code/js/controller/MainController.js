APP.MainController = function () {
	this.connectToTheServer();
}

APP.MainController.prototype = {
	connectToTheServer: function () {
		APP.Application.socket = io.connect(APP.Config.serverUrl);
	}
};
