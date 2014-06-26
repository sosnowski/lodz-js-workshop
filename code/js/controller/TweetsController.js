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
	this.view.setUserLogged(true, App.Application.currentUser);
}

App.TweetsController.prototype.onTweet = function (data) {
	data.forEach(function (oneTweet) {
		this.view.addTweet(oneTweet);
	}, this);
}

App.TweetsController.prototype.onAdd = function (data) {
	App.Application.socket.emit('tweet', data);
}

App.TweetsController.prototype.onJoinClick = function () {
	var userData = window.localStorage.getItem('userData');
	if (userData) {
		App.Application.currentUser = res;
		App.Application.emit('login');
	} else {
		App.Application.emit('logininit');
	}
	
}

