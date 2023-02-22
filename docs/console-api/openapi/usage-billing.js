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
    "/project/usage_billing": {
      "get": {
        "tags": [
          "Audit Logs"
        ],
        "summary": "Read Audit Logs",
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
          "401": {
            "description": "Unauthorized",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "headers": {
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 404,
                      "message": "Audit log not found"
                    }
                  }
                }
              }
            }
          }
        },
        "parameters": [
          {
            "schema": {
              "type": "string",
              "example": "1674155572"
            },
            "in": "query",
            "name": "start",
            "description": "start of report window in UNIX",
            "required": true
          },
          {
            "schema": {
              "type": "string",
              "example": "1676574663"
            },
            "in": "query",
            "name": "end",
            "description": "end of report window in UNIX",
            "required": true
          }
        ],
        "description": "This endpoint mirrors the report found at Statsig->Project Settings->Usage & Billing->Download Breakdown, with the added ability to customize start and end times. The response is raw csv data which uses the “,” delimiter. "
      }
    }
  }
}