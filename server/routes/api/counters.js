const _ = require('lodash');
const Policy = require('../../models/Policy');


function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return (entity) => {
    const updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(update => update);
  };
}

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
  app.get('/api/policy', (req, res) => {
    Policy.findAsync()
      .then(respondWithResult(res))
      .catch(handleError(res));
  });

  app.post('/api/policy', (req, res) => {
    Policy.createAsync(req.body)
      .then(respondWithResult(res))
      .catch(handleError(res));
  });

  app.delete('/api/policy/:id', (req, res) => {
    Policy.removeAsync({ _id: req.params.id })
      .then(handleEntityNotFound(res))
      .then(respondWithResult(res))
      .catch(handleError(res));
  });

  app.put('/api/policy/:id', (req, res) => {
    Policy.findByIdAsync(req.params.id)
      .then(handleEntityNotFound(res))
      .then(saveUpdates(req.body))
      .then(respondWithResult(res))
      .catch(handleError(res));
  });
};
