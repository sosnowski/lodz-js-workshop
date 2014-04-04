var io = require('socket.io').listen(8080),
	_tweets = [],
	_users = {};

io.sockets.on('connection', function (socket) {
	socket.on('register', function (data) {
  		if (data.login && data.password && !_users[data.login]) {
  			_users[data.login] = data;
  			socket.emit('register', true);
	  	} else {
  			socket.emit('register', false);
  		}
	});

	socket.on('login', function (data) {
		if (_users[data.login] && _users[data.login].password === data.password) {
			socket.user = data.login;
			socket.emit('login', _users[data.login]);
		} else {
			socket.emit('login', false);
		}
	});

	socket.on('tweet', function (data) {
		if (socket.user) {
			data.user = _users[socket.user];
			socket.broadcast.emit('tweet', data);
			_tweets.push(data);
		}
	});

	socket.on('load', function () {
		socket.emit('load', _tweets);
	});
});