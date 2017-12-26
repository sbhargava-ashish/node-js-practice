var express = require("express");
var app = express();
var request = require("request");
app.set("view engine" , "ejs");

var apiKey = "thewdb";
var omdbApiUrl = "http://www.omdbapi.com";
var port = 9091;


app.get("/search?:movieName" , function(req , res) {
    if(req.query.movieName) {
        var url = omdbApiUrl + "/?s="+ req.query.movieName +"&apikey=" + apiKey;
        request( url , function(error , response , request ){
            var result =  JSON.parse(response.body);
            res.render(
                "result" , 
                {
                    result : result
                }
            )
        });
    } else {
        res.send("Please provide something to search");
    }
} );


app.get("/" , function(req , res) {
    res.render("search");
});

app.get("/result/:movieName" , function(req , res) {
    var movieName = req.params.movieName;
    var url = omdbApiUrl + "/?s=" + movieName + "&apikey=" + apiKey;
    request( url , function(error , response , request ){
        var result =  JSON.parse(response.body);
        res.render(
            "result" , 
            {
                result : result
            }
        )
    });
});

app.listen(port , "localhost" , function(){
    console.log("Movie Search service startes at :" + port);
});
