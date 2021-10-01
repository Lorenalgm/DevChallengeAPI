const passport = require('passport');

const devsService = require('../../services/devs.service');

passport.deserializeUser(async (id, done) => {
  const user = await devsService.fetchById(id);
  if (user) {
    done(null, user);
  }
});
