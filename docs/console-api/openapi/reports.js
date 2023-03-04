module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "tbgqir4m41g7b"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0",
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "paths": {
    "/reports": {
      "parameters": [],
      "get": {
        "summary": "Get Report URL",
        "operationId": "get-users-userId",
        "description": "Get report data on a given date",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Report read successfully.",
                      "data": [
                        {
                          "value": 20995,
                          "unit_type": "companyID"
                        },
                        {
                          "value": 3048,
                          "unit_type": "orgID"
                        },
                        {
                          "value": 23502,
                          "unit_type": "overall"
                        },
                        {
                          "value": 23502,
                          "unit_type": "stable_id"
                        },
                        {
                          "value": 21094,
                          "unit_type": "user_id"
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "#/components/schemas/message"
                    },
                    "data": {
                      "type": "array",
                      "description": "Data corresponding each unit_type of the queried report",
                      "items": {
                        "$ref": "#/components/schemas/ReportRead"
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "Generated Report": {
                    "value": {
                      "message": "Report URL generated successfully",
                      "data": [
                        {
                          "url": "www.download_report_data_here.com"
                        }
                      ]
                    }
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
                  "x-examples": {
                    "Example 1": {
                      "status": 400,
                      "message": "No report found for the given id, recieved: button_click::event_counta"
                    }
                  },
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "No data found": {
                    "value": {
                      "status": 400,
                      "message": "Data is not available"
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
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
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
              "example": "2022-10-31"
            },
            "in": "query",
            "name": "date",
            "description": "date to query (YYYY-MM-DD)",
            "required": true
          },
          {
            "schema": {
              "type": "string",
              "enum": [
                "pulse_daily",
                "first_exposures"
              ],
              "default": "first_exposures",
              "example": "first_exposures"
            },
            "in": "query",
            "name": "type",
            "description": "The type of report",
            "required": true
          }
        ],
        "tags": [
          "Reports"
        ]
      }
    }
  },
  "components": {
    "schemas": {
      "ReportRead": {
        "title": "ReportDownload",
        "x-stoplight": {
          "id": "y1cixhcqmax54"
        },
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "example": "www.download_report_data_here.com",
            "description": "URL to download selected report"
          }
        }
      },
      "message": {
        "title": "message",
        "x-stoplight": {
          "id": "hgfip49e6obbf"
        },
        "type": "string",
        "example": "Report URL generated successfully"
      }
    },
    "responses": {},
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ]
}