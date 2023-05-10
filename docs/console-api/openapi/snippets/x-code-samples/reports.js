const today = new Date().toISOString().split('T')[0]
module.exports = {
  "/reports":{
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --location --request GET 'https://statsigapi.net/console/v1/reports?type=first_exposures&date=${today}'
--header 'STATSIG-API-KEY: console-xxxXXXxxxXXXxxx'
        `
      }
    ]
  },
}
