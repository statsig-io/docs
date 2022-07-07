module.exports = {
  "/gates":{
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://api.statsig.com/console/v1/gates' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "name": "a gate",
    "description": "helpful summary of what this gate does"
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
  'path': '/console/v1/gates',
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
  "name": "a gate",
  "description": "helpful summary of what this gate does"
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
curl --request GET 'https://api.statsig.com/console/v1/gates' 
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
  "/gates/{gate_id}": {
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://api.statsig.com/console/v1/gates' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "name": "a gate",
    "description": "helpful summary of what this gate does"
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
  'path': '/console/v1/gates',
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
  "name": "a gate",
  "description": "helpful summary of what this gate does"
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
curl --request GET 'https://api.statsig.com/console/v1/gates/{gate_id}' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'
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
  'path': '/console/v1/gates',
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
  "name": "a gate",
  "description": "helpful summary of what this gate does"
});

req.write(postData);

req.end();
        `
      }
    ],
    "delete": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --location --request DELETE 'https://api.statsig.com/console/v1/gates/{gate_id}' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'
        `
      },
      {
        "lang": "JavaScript",
        "label": "NodeJs - Native",
        "source": `
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'DELETE',
  'hostname': 'api.statsig.com',
  'path': '/console/v1/gates/{gate_id}',
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
    ],
  }
}
