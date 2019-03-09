function component() {
  let element = document.createElement("div");

  var testLexicon = require("odtweg");

  var testFeature = new Array(3);
  var testItem = new Array(3);
  var testBackground = testLexicon.generateBackgrounds();
  var testStats = testLexicon.generateStats();

  var testSetting = testLexicon.generateSetting();

  var testWorld = testLexicon.generateWorld();

  var i = 0;
  do {
    testFeature[i] = testLexicon.generateFeatures();
    testItem[i] = testLexicon.generateItems();
    i++;
  } while (i <= 2);

  var characterHTML = `Your character is a ${testBackground}, with the following features: ${
    testFeature[0]
  }, ${testFeature[1]}, ${testFeature[2]} and the following items: ${
    testItem[0]
  }, ${testItem[1]}, ${testItem[2]} and the following stats: Brains ${
    testStats.Brains
  }, Braun ${testStats.Braun}, Charisma ${testStats.Charisma}`;

  element.innerHTML = "<p>" + characterHTML + "</p>";
  element.innerHTML += "<p>" + testSetting + "</p>";
  element.innerHTML += "<p>" + testWorld + "</p>";

  return element;
}

document.body.appendChild(component());
