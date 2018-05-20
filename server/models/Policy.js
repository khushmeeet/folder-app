const promise = require('bluebird');
const mongoose = promise.promisifyAll(require('mongoose'));


const PolicySchema = new mongoose.Schema({
  policy_name: String,
  person_name: String,
  policy_no: Number,
  date_of_commencement: Date,
  date_of_maturity: Date,
  date_of_last_payment: Date,
  premium_payable: Number,
});

module.exports = mongoose.model('Policy', PolicySchema);
