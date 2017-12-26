var express = require("express");
var app = express();
var port = 9090;

app.get("/" , function(req , res) {
    res.send("Hi Three!!")
});

app.listen(port , "localhost" , function(){
    console.log("server startes at :" + port);
});
