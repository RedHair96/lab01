var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("bower_components"));

app.get("/", function(req, res){
  res.send("Hello express js!!");
});

app.listen(2707);
