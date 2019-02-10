"use strict";

const express = require("express"),
  bodyParser = require("body-parser"),
  request = require("request"),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 5000, () => console.log("webhook is listening"));

// Creates the endpoint for our webhook
app.post("/webhook", (req, res) => {
  console.log(req);
  let payload = req.body;

  if (payload.challenge) {
    res.status(200).send(req.body.challenge);
  } else if (payload.event && payload.event.type === "app_mention") {
    // if (payload.event.text.includes("tell me a joke")) {
    //     // Make call to chat.postMessage using bot's token
    // }
    handleMessage();
  } else {
    handleMessage();
  }
});

function handleMessage() {
  let response;

  // Check if the message contains text
  // let triggerWords = ["jerk me", "give me a game", "gimme a game", "make a game for me", "make a game", "generate a game", "generate a game for me"];

  // if ((received_message.text) && (triggerWords.includes(received_message.text.toLocaleLowerCase()))) {
  //
  //     // Create the payload for a basic text message
  //     var messageLexicon = require('./createlexicon.js');
  //     var messageText = messageLexicon.randomString();
  //
  //     response = {
  //         "text": messageText
  //     }
  // }

  // Sends the response message
  var messageLexicon = require("odtweg");
  var messageText = messageLexicon.generateLexicon();

  callSendAPI(messageText);
}

function callSendAPI(response) {
  // Construct the message body
  let request_body = {
    text: response
  };

  // curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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

  request(
    {
      // TODO: How to remove these values and what are they?
      uri:
        "https://hooks.slack.com/services/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",
      // "qs": {"access_token": PAGE_ACCESS_TOKEN},
      method: "POST",
      json: request_body
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
}
