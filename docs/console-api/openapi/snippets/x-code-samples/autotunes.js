module.exports = {
  "/autotunes":{
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://api.statsig.com/console/v1/autotunes' \
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "a autotune",
    "description": "helpful summary of what this Aututune is",
    "variants": [{
        "name": "red",
        "json": {"foo": "boo"}
    }, {
        "name": "blue",
        "json": {}
    }],
    "successEvent": "purchase_item",
    "explorationWindow": "1hr",
    "attributionWindow": "2hr",
    "winnerThreshold": "99%"

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
  'path': '/console/v1/autotunes',
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
  "name": "a autotune",
  "description": "helpful summary of what this Aututune is",
  "variants": [
    {
      "name": "red",
      "json": {
        "foo": "boo"
      }
    },
    {
      "name": "blue",
      "json": {}
    }
  ],
  "successEvent": "purchase_item",
  "explorationWindow": "1hr",
  "attributionWindow": "2hr",
  "winnerThreshold": "99%"
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
curl --request GET 'https://api.statsig.com/console/v1/autotunes' 
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
  'path': '/console/v1/autotunes',
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
  "/autotunes/{autotune_id}": {
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://api.statsig.com/console/v1/autotunes/a_autotune' \
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "description": "helpful summary of what this Aututune is",
    "variants": [{
        "name": "red",
        "json": {"color": "red"}
    }, {
        "name": "blue",
        "json": {"color": "blue"}
    }],
    "successEvent": "purchase_item",
    "explorationWindow": "1hr",
    "attributionWindow": "2hr",
    "winnerThreshold": "99%"

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
  'path': '/console/v1/autotunes/a_autotune',
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
  "description": "helpful summary of what this Aututune is",
  "variants": [
    {
      "name": "red",
      "json": {
        "color": "red"
      }
    },
    {
      "name": "blue",
      "json": {
        "color": "blue"
      }
    }
  ],
  "successEvent": "purchase_item",
  "explorationWindow": "1hr",
  "attributionWindow": "2hr",
  "winnerThreshold": "99%"
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
curl --request GET 'https://api.statsig.com/console/v1/autotunes/a_autotune' 
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
  'method': 'GET',
  'hostname': 'api.statsig.com',
  'path': '/console/v1/autotunes/a_autotune',
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
    "delete": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request DELETE 'https://api.statsig.com/console/v1/autotunes/a_autotune' 
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
  'path': '/console/v1/autotunes/a_autotune',
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
