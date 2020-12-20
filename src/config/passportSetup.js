require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env'
      : `.env.${process.env.NODE_ENV}`
});
const passport = require('passport');
const GitHubStrategy = require('passport-github2');
const devService = require('../services/devs.service');

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

      const dev = await devService.create({
        name,
        email,
        github,
        githubId,
        avatar
      });

      console.log(`User created: ${dev}`);
    }
  )
);
