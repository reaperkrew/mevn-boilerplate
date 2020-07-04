const clearCookie = (req, res, next) => {
  if (req.cookies
    && req.cookies[process.env.COOKIE_NAME]
    && (!req.session || !req.session.user)) res.clearCookie(process.env.COOKIE_NAME);
  next();
};

const isAuthorized = (req, res, next) => {
  if (!req.session || !req.session.user || !req.session.user._id) return res.redirect('login');
  return next();
};

module.exports = {
  clearCookie,
  isAuthorized,
};
