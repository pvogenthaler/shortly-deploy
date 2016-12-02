var crypto = require('crypto');

var mongoose = requre('mongoose');
var Schema = mongoose.Schema;


var linkSchema = new Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number
});

var Link = mongoose.model('Link', linkSchema);

// linkSchema.pre('save', function() {}...)

// todo: refactor old fn below into above

//    function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }

module.exports = Link;
