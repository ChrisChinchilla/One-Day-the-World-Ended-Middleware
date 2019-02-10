var testLexicon = require("odtweg");

// TODO: How to get 3?
var testFeature = testLexicon.generateFeatures();
var testBackground = testLexicon.generateBackgrounds();
var testItem = testLexicon.generateItems();

console.log(testFeature + testBackground + testItem);
