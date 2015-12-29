var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',

  initialize: function(){
    this.on('creating', this.hashPassword);
  },

  hashPassword: function(){
    var promiseHash = Promise.promisify(bcrypt.hash);
    var context = this;
    return promiseHash(this.get('password'), null, null)
      // .bind(this)
      .then(function(hash){
        context.set('password', hash);
    });
  }
});

module.exports = User;