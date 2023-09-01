const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // midle were to check if user is log in. 
  // if is not log in redirecte them
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
