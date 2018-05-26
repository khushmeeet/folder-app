const promise = require('bluebird');
const mongoose = promise.promisifyAll(require('mongoose'));


const PassportSchema = new mongoose.Schema({
  name: String,
  img_src: String,
}, {
  collection: 'passport',
});

module.exports = mongoose.model('Passport', PassportSchema);
