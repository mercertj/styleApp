const db = require("../models");
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt')

module.exports = function(passport){

  const isValidPassword = (user, password) => {
      return bCrypt.compareSync(password, user.password);
  }

  passport.use('login', new LocalStrategy(
    function(username, password, done) {
      console.log(username, password);
      db.User.findOne({
        where: { username: username }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        // if (!isValidPassword(user, password)) {
        //   return done(null, false, { message: 'Incorrect password.' });
        // }
        return done(null, user);
      }).catch(err => {
        return done(err)
      })
    })
  )
}