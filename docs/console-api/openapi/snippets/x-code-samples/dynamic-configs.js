module.exports = {
  "/dynamic_configs":{
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/dynamic_configs' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "name": "a dynamic config",
    "description": "helpful summary of what this dynamic config does"
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
  'path': '/console/v1/dynamic_configs',
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
  "name": "a dynamic config",
  "description": "helpful summary of what this dynamic config does"
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
curl --request GET 'https://statsigapi.net/console/v1/dynamic_configs' 
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
  'path': '/console/v1/dynamic_configs',
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
  "/dynamic_configs/{dynamic_config_id}": {
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/dynamic_configs' 
--header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
  "id": "a_dynamic_config",
  "isEnabled": false,
  "description": "helpful summary of what this dynamic config does",
  "rules": [
      {
      "name": "All Conditions",
      "passPercentage": 10,
      "returnValue": {
          "key":true
      },
      "conditions": [
          {
          "type": "public"
          }
      ]
      } 
  ],
  "defaultValue": {
      "key":true
  }
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
  'path': '/console/v1/dynamic_configs/a_dynamic_config',
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
  "id": "a_dynamic_config",
  "isEnabled": false,
  "description": "helpful summary of what this dynamic config does",
  "rules": [
    {
      "name": "All Conditions",
      "passPercentage": 10,
      "returnValue": {
        "key": true
      },
      "conditions": [
        {
          "type": "public"
        }
      ]
    }
  ],
  "defaultValue": {
    "key": true
  }
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
curl --request GET 'https://statsigapi.net/console/v1/dynamic_configs/{dynamic_config_id}' 
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
  'path': '/console/v1/dynamic_configs/a_dynamic_config',
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
curl --request DELETE 'https://statsigapi.net/console/v1/dynamic_configs/{dynamic_config_id}' 
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
  'path': '/console/v1/dynamic_configs/{dynamic_config_id}',
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
