var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var imageUrl;
const fetch = require('node-fetch');
const url = "https://api.giphy.com/v1/gifs/random?api_key=kTbvJKFeUYfzVYxpPTOI1ZjwsQq6afPZ&tag=meteor&rating=PG-13";
fetch(url
).then((res) => 
  res.json()
).then(function(data){
  let gif = data;
  imageUrl = gif.data.image_url;
}); 

app.use(express.static('public'));
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/getImageUrl',(req, res) => {
  res.json(imageUrl);
});
app.get("/", function(req, res) {
  res.sendfile('index.html');
});

app.listen(5000, function() {
   console.log("Listening on 5000");
});
