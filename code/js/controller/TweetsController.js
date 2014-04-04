App.TweetsController = function (tweetsView) {

	App.Application.on('login', this.onLogin, this);
	App.Application.socket.on('tweet', this.onTweet, this);
	tweetsView.on('add', this.onAdd, this);
}

App.Helpers.inherits(App.TweetsController, App.BaseController);

App.TweetsController.prototype.onLogin = function () {

}

App.TweetsController.prototype.onTweet = function () {

}

App.TweetsController.prototype.onAdd = function () {

}

