const promise = require('bluebird');
const mongoose = promise.promisifyAll(require('mongoose'));


const AadharSchema = new mongoose.Schema({
  name: String,
  img_src: String,
}, {
  collection: 'aadhar',
});

module.exports = mongoose.model('Aadhar', AadharSchema);
