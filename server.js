var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();


var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json());


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(port, function () {
    console.log("App listening on PORT " + port);
});


module.exports = app;