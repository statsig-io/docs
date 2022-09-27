module.exports = {
  "/audit_logs":{
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request GET 'https://statsigapi.net/console/v1/audit_logs' 
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
  'path': '/console/v1/audit_logs',
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
