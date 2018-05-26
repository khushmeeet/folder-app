const Passport = require('../../models/Passport');


function handleError(res, statusCode) {
  const code = statusCode || 500;
  return (err) => {
    res.status(code).send(err);
  };
}

function respondWithResult(res, statusCode) {
  const code = statusCode || 200;
  return (entity) => {
    if (entity) {
      res.status(code).json(entity);
    }
  };
}


module.exports = (app) => {
  app.get('/api/passport', (req, res) => {
    Passport.findAsync()
      .then(respondWithResult(res))
      .catch(handleError(res));
  });
};
