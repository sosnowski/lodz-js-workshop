App.TweetsController = function (tweetsView) {
	this.view = tweetsView;

	App.Application.on('login', this.onLogin, this);
	App.Application.socket.on('tweet', this.onTweet.bind(this));
	tweetsView.on('add', this.onAdd, this);
	tweetsView.on('joinclick', this.onJoinClick, this);

	App.Application.socket.emit('load');
}

App.Helpers.inherits(App.TweetsController, App.BaseController);

App.TweetsController.prototype.onLogin = function () {
}

App.TweetsController.prototype.onTweet = function (data) {
}

App.TweetsController.prototype.onAdd = function (data) {
}

App.TweetsController.prototype.onJoinClick = function () {
}

