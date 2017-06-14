const debug = require('debug')('auth');

const users = {};

module.exports = {
	register(req, res) {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.send('Must enter email & password');
		}

		if (users.email) {
			return res.send('Email in use!');
		}

		users.email = password;
		res.send('Registration success!');
	},

	login(req, res) {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.send('Must enter email & password');
		}

		if (users.email !== password) {
			return res.send('Invalid login!');
		}

		res.send('Logged in!');
	},
};
