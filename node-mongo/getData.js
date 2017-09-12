//  mongodb://127.0.0.1:27017

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://127.0.0.1:27017/haha';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  // console.log(db.collection());
  // var col = db.collection('csdn');
  // console.log(col.find({}));
  var col = db.collection('csdn');
  col.find({}).limit(22).toArray(function(err, docs) {
	  console.log(docs);
	  db.close();
 });
  // db.close();
});
