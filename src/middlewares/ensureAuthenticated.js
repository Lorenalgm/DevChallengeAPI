const ensureAuthenticated = (request, response, next) => {
  if (!request.user) {
    response.redirect('auth/login');
  } else {
    next();
  }
};

module.exports = { ensureAuthenticated };
