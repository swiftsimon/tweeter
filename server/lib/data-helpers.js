"use strict";

// this is the only package that actually deals with a database

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    // saveTweet: function(newTweet, callback) {
    //   simulateDelay(() => {
    //     dbInstance.tweets.push(newTweet);
    //     callback(null, true);
    //   });
    // },

      saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, function(err, tweet) {
          callback();
          // assert.equal(null, err);
          // assert.equal(1, res.insertedCount);

        })

    },

    // Get all tweets in `db`, sorted by newest first
    // getTweets: function(callback) {
    //   simulateDelay(() => {
    //     const sortNewestFirst = (a, b) => a.created_at - b.created_at;
    //     callback(null, dbInstance.tweets.sort(sortNewestFirst));
    //   });
    // },

    //use mongo to get tweets from the mongo db
    getTweets: function(callback) {
      db.collection("tweets").find({}).sort({create_at: 1}).toArray(callback);

    }

  };
}
