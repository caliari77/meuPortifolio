var cool = require('cool-ascii-faces');
var express = require('express');
var getters = require('./getters');


module.exports = function(){

    var app = express();

    //Defines the pages folder.
    app.use(express.static('public'));
    

    app.set('view engine','ejs');

    //Start listening.
    app.listen(process.env.PORT || 3000,function(){
        console.log("Server up.");
    });




    getters(app);
    

    return app;
}
