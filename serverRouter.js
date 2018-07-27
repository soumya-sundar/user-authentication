import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from './config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/users', (req, res) => {
  mdb.collection("users").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send({ data: result });
  })
});


router.post('/users', (req, res) => {
  mdb.collection("users").insertOne(req, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  res.send('Got a POST request')
})


export default router;