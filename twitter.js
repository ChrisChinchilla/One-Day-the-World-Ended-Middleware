let Twit = require("twit");
require("dotenv").config();

var tweetLexicon = require("./node_modules/odtweg/index.js");

var tweetText = tweetLexicon.generateLexicon();
console.log(tweetText);

const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

T.post("statuses/update", { status: tweetText }, (err, data, response) => {
  console.log(data);
});
