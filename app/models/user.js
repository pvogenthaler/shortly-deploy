var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  username: {type: String, unique: true},
  password: String,
})

var User = mongoose.model('User', userSchema);

// this is a promise, won't write to db until promise is fulfilled



User.prototype.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
    if (err) {
      console.error('Error on comparePassword', err);
      callback(err);
    }
    callback(null, isMatch);
  });
};



// userSchema.pre('save', function() {}...)

// todo: refactor old fn below into above

// hashPassword: function() {
//   var cipher = Promise.promisify(bcrypt.hash);
//   return cipher(this.get('password'), null, null).bind(this)
//     .then(function(hash) {
//       this.set('password', hash);
//     });
// }

module.exports = User;
