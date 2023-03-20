module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "lkjxksvkisn4a"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    },
    "schemas": {}
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/project/usage_billing/report": {
      "get": {
        "tags": [
          "Usage and Billing"
        ],
        "summary": "Get usage breakdown",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "text/csv": {
                "schema": {
                  "type": "string",
                  "description": "csv data with \",\" delimiter"
                },
                "examples": {
                  "CSV string response": {
                    "value": "Date,Event Type,Name,Sources,Daily Billable Events,Project\n2023-01-12,check_gate,my-tracked-event,\"react-client,js-client\",21,My-Project"
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "integer"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "x-examples": {
                    "Example 1": {
                      "status": 400,
                      "message": "start: 0, is before project creation: 1653327122393"
                    }
                  }
                },
                "examples": {
                  "Invalid start time": {
                    "value": {
                      "status": 400,
                      "message": "start: 0, is before project creation: 1653327122393"
                    }
                  },
                  "Invalid end time 1": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "end",
                          "errorMessage": "Value should be greater than 0"
                        }
                      ]
                    }
                  },
                  "Invalid end time 2": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "start.end",
                          "errorMessage": "start time must be before end time recieved: { start: 1673480254731, end: 0}"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                }
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string",
              "example": "1653327122393"
            },
            "in": "query",
            "name": "start",
            "description": "start of report window in UNIX ms",
            "required": true
          },
          {
            "schema": {
              "type": "string",
              "example": "1677529431000"
            },
            "in": "query",
            "name": "end",
            "description": "end of report window in UNIX ms",
            "required": true
          }
        ],
        "description": "This endpoint mirrors the report found at Statsig->Project Settings->Usage & Billing->Download Breakdown, with the added ability to customize start and end times. The response is raw csv data which uses the “,” delimiter. "
      }
    }
  }
}