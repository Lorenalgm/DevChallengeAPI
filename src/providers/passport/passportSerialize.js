const passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user.id);
});
