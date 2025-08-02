const auth = require('basic-auth');

const basicAuth = (req, res, next) => {
  const user = auth(req);
  if (user?.name === 'admin' && user?.pass === 'admin123') return next();
  res.set('WWW-Authenticate', 'Basic realm="401"');
  res.status(401).send('Authentication required.');
};

module.exports = basicAuth;
