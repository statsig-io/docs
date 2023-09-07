module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "iyu7er1n6xhuz"
  },
  "info": {
    "title": "https://statsigapi.net/console/v1",
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
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    },
    "requestBodies": {},
    "schemas": {
      "TargetAppListItem": {
        "title": "TargetAppListItem",
        "x-stoplight": {
          "id": "rs118igbtzxng"
        },
        "type": "object",
        "x-examples": {
          "Example 2": {
            "name": "My target app"
          }
        },
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "tm0d08vsepf34"
            },
            "description": "Name of the target app"
          }
        },
        "required": [
          "name"
        ]
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "tags": [
    {
      "name": "gates"
    },
    {
      "name": "experiments"
    },
    {
      "name": "holdouts"
    },
    {
      "name": "dynamic config"
    },
    {
      "name": "segments"
    },
    {
      "name": "autotunes"
    },
    {
      "name": "events"
    }
  ],
  "paths": {
    "/ingestion/status": {
      "get": {
        "tags": [
          "Holdouts"
        ],
        "summary": "List Target Apps",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Your job for events ingestion completed successfully",
                      "timestamp": "2023-09-07T00:50:07.941Z",
                      "ingestion_dataset": "events",
                      "ingestion_source": null,
                      "status": "BACKFILL_STARTED"
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "timestamp": {
                      "type": "string",
                      "description": "ISO 8601 Timestamp"
                    },
                    "ingestion_dataset": {
                      "type": "string",
                      "nullable": true
                    },
                    "ingestion_source": {
                      "type": "string",
                      "nullable": true
                    },
                    "status": {
                      "type": "string"
                    },
                    "rowCount": {
                      "type": "number",
                      "x-stoplight": {
                        "id": "pikd8895jlenw"
                      },
                      "description": "number of rows imported"
                    }
                  }
                },
                "example": {
                  "message": "Gates listed successfully.",
                  "data": [
                    {
                      "id": "my_gate_a",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_3",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_2",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "b_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "examples": {
                  "Backfill started": {
                    "value": [
                      {
                        "message": "Your job for events ingestion completed successfully",
                        "timestamp": "2023-09-07T00:50:07.941Z",
                        "ingestion_dataset": "events",
                        "ingestion_source": null,
                        "status": "BACKFILL_STARTED"
                      }
                    ]
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
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
        "x-stoplight": {
          "id": "gu8nzt1mgrwrw"
        },
        "parameters": [
          {
            "schema": {
              "type": "string",
              "example": "2023-08-08"
            },
            "in": "query",
            "name": "startDate",
            "description": "Start date for your query"
          },
          {
            "schema": {
              "type": "string",
              "example": "2023-09-08"
            },
            "in": "query",
            "name": "endDate",
            "description": "End date for your query"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "ingestion_source",
            "description": "Filter for selected ingestion sources"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "ingestion_dataset",
            "description": "Filter for selected datasets"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "status",
            "description": "Filter for selected status"
          }
        ],
        "requestBody": {
          "content": {}
        }
      },
      "parameters": []
    }
  }
}