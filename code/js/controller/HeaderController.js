App.HeaderController = function (headerView) {

	App.Application.on('login', this.onLogin, this);
	App.Application.on('tweet', this.onTweet, this);
}

App.Helpers.inherits(App.HeaderController, App.BaseController);

App.HeaderController.prototype.onLogin = function () {

}

App.HeaderController.prototype.onTweet = function () {

}
