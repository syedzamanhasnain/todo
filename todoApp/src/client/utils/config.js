require('dotenv').config();

const config = {
	API: {
		url: process.env.BASE_API,
		sentry: process.env.SENTRY
	}
};

module.exports = config;
