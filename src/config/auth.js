module.exports = {
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '7d'
  },
  oauth2: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      secretId: process.env.GITHUB_CLIENT_SECRET
    }
  }
};
