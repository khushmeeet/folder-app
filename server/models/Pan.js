const promise = require('bluebird');
const mongoose = promise.promisifyAll(require('mongoose'));


const PanSchema = new mongoose.Schema({
  name: String,
  img_src: String,
}, {
  collection: 'pan',
});

module.exports = mongoose.model('Pan', PanSchema);
