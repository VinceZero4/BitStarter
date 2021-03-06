var express = require('express');
var fs = require('fs');
var app = express();
var read = fs.readFileSync('index.html').toString('utf-8');

app.use(express.logger());

app.get('/', function(request, response) {
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
