module.exports = {
    randomString: function () {

        let tracery = require('tracery-grammar');

        // let people = require('./people.json');
        // let adjective = require('./adjective.json');
        // let outcome = require('./outcome');
        let dictionarySearch = require('./search.js');
        // TODO: Better to pass in one go?
        let verbs = dictionarySearch.typeSearch("Verb");
        let outcomes = dictionarySearch.typeSearch("Outcome");
        let persons = dictionarySearch.typeSearch("Person");
        let descriptions = dictionarySearch.typeSearch("Description");

        // console.log(verbs[Math.floor(Math.random() * verbs.length)]);
        // console.log(outcomes[Math.floor(Math.random() * outcomes.length)]);
        // console.log(persons[Math.floor(Math.random() * persons.length)]);
        // console.log(descriptions[Math.floor(Math.random() * descriptions.length)]);

        const grammar = tracery.createGrammar({
            "people": persons,
            "adjective": descriptions,
            "outcome": outcomes,
            "origin": ["One day the world ended because of #adjective.a# #people#."],
        });
        //  What came next? A world of #outcome#
        grammar.addModifiers(tracery.baseEngModifiers);
        return grammar.flatten('#origin#');
    }
};