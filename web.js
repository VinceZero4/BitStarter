var express = require('express');
var fs = require('fs');
var app = express();

var buffer = new Buffer(fs.readFileSync(index.html));

app.use(express.logger());

var read = string(buffer.toString());

app.get('/', function(request, response) {
 response.send(read);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
