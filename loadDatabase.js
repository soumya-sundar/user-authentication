var MongoClient = require('mongodb');
var assert = require('assert');
var config = require('./config');

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  var obj = {
    username: 'test',
    password: 'test',
    email: 'test'
  }
  db.collection('users').insert(obj).then(response => {
  });
  console.log("Finished creating Mongo Collection");
});