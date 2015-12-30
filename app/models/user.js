var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    this.on('creating', this.hashPassword);
  },

  comparePassword: function(password, callback){
    bcrypt.compare(password, this.get('password'), function(err, result){
      callback(result);
    });
  },

  hashPassword: function(){
    var promiseHash = Promise.promisify(bcrypt.hash);
    // var salt = bcrypt.genSaltSync(10);
    var context = this;
    return promiseHash(this.get('password'), null, null)
      // .bind(this)
      .then(function(hash){
        context.set('password', hash);
        // context.set('salt', salt);
    });
  }

});

module.exports = User;