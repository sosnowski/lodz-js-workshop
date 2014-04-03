APP.TweetsController = function (tweetsView) {

	APP.Application.on('login', this.onLogin, this);
	APP.Application.socket.on('tweet', this.onTweet, this);
	tweetsView.on('add', this.onAdd, this);
}

APP.Helpers.inherit(APP.TweetsController, APP.BaseController);

APP.TweetsController.prototype.onLogin = function () {

}

APP.TweetsController.prototype.onTweet = function () {

}

APP.TweetsController.prototype.onAdd = function () {

}

