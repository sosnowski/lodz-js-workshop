APP.HeaderController = function (headerView) {

	APP.Application.on('login', this.onLogin, this);
	APP.Application.on('tweet', this.onTweet, this);
}

APP.Helpers.inherit(APP.HeaderController, APP.BaseController);

APP.HeaderController.prototype.onLogin = function () {

}

APP.HeaderController.prototype.onTweet = function () {

}
