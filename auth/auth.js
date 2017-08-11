const login = require("./login");

function isAuthenticated(req, res, next) {
    if (req.user.authenticated)
        return next();

    res.redirect('/');
}

module.exports = passport => {

	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});

  //   passport.serializeUser((user, done) => {
  //       done(null, user.id);
  //   });

  //   passport.deserializeUser((id, done) => {
  //       User.findOne({
  //       	where: {id: id}
		// }).then(user => {
		// 	done(null, user.id)
		// }).catch(err => done(err, user));
  //   });

	login(passport)
}
