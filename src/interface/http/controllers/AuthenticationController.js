const passport = require('passport');

function login(request, response) {
  if (!request.user) {
    response.send('login');
  } else {
    response.redirect('/profile');
  }
}

function logout(request, response) {
  request.logout();
  response.redirect('/');
}

function oAuthGitHubAuthorization() {
  return passport.authenticate('github', {
    scope: ['read:user']
  });
}

function oAuthGitHubRequestUserData() {
  return passport.authenticate('github');
}

function oAuthCallbackRedirect(request, response) {
  response.redirect('/profile');
}

module.exports = {
  login,
  logout,
  oAuthGitHubAuthorization,
  oAuthGitHubRequestUserData,
  oAuthCallbackRedirect
};
