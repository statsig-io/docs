module.exports = {
  "/holdouts":{
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/holdouts' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "name": "a holdout",
    "description": "helpful summary of what this holdout does",
    "idType": "userID"
}'
        `
      }
    ],
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request GET 'https://statsigapi.net/console/v1/holdouts' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx'
        `
      }
    ]
  },
  "/holdouts/{holdout_id}": {
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/holdouts/a_holdout' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
    "id": "a_holdout",
    "isEnabled": true,
    "description": "UPDATED summary of what this holdout does",
    "idType": "a_customid",
    "isGlobal": true,
    "lastModifierName": "CONSOLE API",
    "lastModifierID": "ahKwUoaNauHu9AmJPc2",
    "passPercentage": 10,
    "gateIDs": [ 
    ],
    "experimentIDs": [
    ],
    "layerIDs": [
        "mynewlayer"
    ]
}'
        `
      }
    ],
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request GET 'https://statsigapi.net/console/v1/holdouts/a_holdout' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx'
        `
      }
    ],
    "delete": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request DELETE 'https://statsigapi.net/console/v1/holdouts/a_holdout' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx'
        `
      }
    ],
  },
  "/holdouts/{holdout_id}/overrides": {
    "post": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request POST 'https://statsigapi.net/console/v1/holdouts/a_holdout/overrides' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx' 
--header 'Content-Type: application/json' 
--data-raw '{
  "passingUserIDs": [
    "passing_id"
  ],
  "failingUserIDs": [
    "failing_id"
  ]
}'
        `
      }
    ],
    "get": [
      {
        "lang": "cURL",
        "label": "cURL",
        "source": `
curl --request GET 'https://statsigapi.net/console/v1/holdouts/a_holdout/overrides' 
--header 'STATSIG-API-KEY: console-xxxxxXXXXXXXXXxxxxxxxxxXXXXXXXxxxxxxxx'
        `
      }
    ],
  }
}
