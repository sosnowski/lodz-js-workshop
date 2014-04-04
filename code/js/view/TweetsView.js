App.TweetsView = function () {
	App.BaseView.call(this);
	this._el = this.render(this.getTemplate('tweetsTpl'));

	this._tweetsList = this._el.querySelector('.tweets ul');
	this._tweetElement = this._tweetsList.querySelector('li');
	this._addSection = this._el.querySelector('.add-tweet');

	this._tweetsList.removeChild(this._tweetElement);

	this._addSection.querySelector('button[type=button]').addEventListener('click', this.onJoinButtonClick.bind(this));
	this._addSection.querySelector('form').addEventListener('submit', this.onSubmit.bind(this));

	document.body.appendChild(this._el);
}

App.Helpers.inherits(App.TweetsView, App.BaseView);

App.TweetsView.prototype.onJoinButtonClick = function () {
	this.emit('joinclick');
};

App.TweetsView.prototype.setUserLogged = function (logged, user) {
	if (logged) {
		this._addSection.classList.add('logged');
		this._addSection.querySelector('img').src = App.Helpers.gravatar(user.login, 40);
	} else {
		this._addSection.classList.remove('logged');
	}
}

App.TweetsView.prototype.onSubmit = function (event) {
	var form, data;
	event.preventDefault();

	form = event.target;
	data = {
        msg: form.elements['tweet-msg'].value,
        time: Date.now()
	};
	this.emit('add', data);
	form.reset();
}

App.TweetsView.prototype.addTweet = function (data) {
	var newEl = this._tweetElement.cloneNode(true);
	newEl.querySelector('span strong').innerText = data.user.login;
	newEl.querySelector('img').src = App.Helpers.gravatar(data.user.login, 40);
	newEl.querySelector('time').innerText = new Date(data.time);
	newEl.querySelector('p').innerText = data.msg;

	this._tweetsList.appendChild(newEl);
	this._el.querySelector('.tweets').scrollTop = this._el.querySelector('.tweets').scrollHeight;
}
