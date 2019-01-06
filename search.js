module.exports = {
    typeSearch: function (textType) {

        var data = require('./game-content.json');

        const result = data
            .filter(word => word.Icons.includes(textType, 0))
            .map(word => word.Text)

        // console.log(result);
        return result;
    }
};