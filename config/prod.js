//prod.js - production keys here!!
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoConfig: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	recipieAppId:process.env.RECIPIE_APP_ID,
	recipieKey:process.env.RECIPIE_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN
};
