require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env'
      : `.env.${process.env.NODE_ENV}`
});
const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const devsService = require('../services/devs.service');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await devsService.fetchById(id);
  if (user) {
    done(null, user);
  }
});

passport.use(
  new GitHubStrategy(
    {
      // options for the strategy
      callbackURL: `${process.env.APP_URL}/auth/github/callback`,
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      // passport callback function

      const {
        username: github,
        id: githubId,
        displayName: name,
        emails: [{ value: email }],
        photos: [{ value: avatar }]
      } = profile;

      const existingDev = await devsService.fetchByGitHubId(githubId);

      if (existingDev) {
        done(null, existingDev);
      } else {
        const newDev = await devsService.create({
          name,
          email,
          github,
          githubId,
          avatar
        });

        done(null, newDev);
      }
    }
  )
);
