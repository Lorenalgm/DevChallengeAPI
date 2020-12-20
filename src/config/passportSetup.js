const passport = require('passport');
const GitHubStrategy = require('passport-github2');

passport.use(
  new GitHubStrategy(
    {
      // options for the strategy
    },
    () => {}
  )
);
