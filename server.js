// buildstrap demo server.

var express = require('express'),
    request = require('request'),

    app = express(),
    port = process.env.PORT || 1337;


app.use(express.bodyParser());

app.get('/gif', function (req, res) {
  request('http://gifs.com/r.json', function (error, response, body) {
      res.write(JSON.stringify({
        gif : JSON.parse(body).gif_url
      }));
      res.end();
    });
});

app.listen(port);

console.log('Running buildstrap server on port ' + port);