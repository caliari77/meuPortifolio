var cool = require('cool-ascii-faces');

module.exports = function (app) {


    app.get('/cool', function (request, response) {
        response.send(cool());
    });

    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/coliseu', function (req, res) {
        res.render('coliseu');
    });

    app.get('/iniciacao', function (req, res) {
        res.render('iniciacao');
    });
}