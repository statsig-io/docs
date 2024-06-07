module.exports = {
  "/tags":{
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/tags' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "name": "a tag"
    "description": "description of this tag"
    "isCore": "whether or not this tag is a core tag"
}'
        `
      },
      {
        "lang": "JavaScript",
        "label": "NodeJs - Native",
        "source": `
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'api.statsig.com',
  'path': '/console/v1/tags',
  'headers': {
    'STATSIG-API-KEY': 'console-xxxxXXXXxxxxXXXXxxxx',
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  "name": "a tag"
  "description": "description of this tag"
  "isCore": "whether or not this tag is a core tag"
});

req.write(postData);

req.end();
        `
      }
    ],
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request GET 'https://statsigapi.net/console/v1/gates' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
        `
      },{
        "lang": "JavaScript",
        "label": "NodeJs - Native",
        "source": `
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'api.statsig.com',
  'path': '/console/v1/gates',
  'headers': {
    'STATSIG-API-KEY': 'console-xxxxXXXXxxxxXXXXxxxx'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
        `
      }
    ]
  },
}
