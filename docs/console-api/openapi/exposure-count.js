module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "tbgqir4m41g7b"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0",
    "description": "Reports Endpoint"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "paths": {
    "/exposure_count": {
      "parameters": [],
      "get": {
        "summary": "Read Exposure Count Data",
        "operationId": "get-users-userId",
        "description": "Get exposure counts for selected configs over the selected date range",
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
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/ExposureCountResponse"
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "Example": {
                    "value": {
                      "message": "Exposure count fetched successfully.",
                      "data": {
                        "gates": [
                          {
                            "id": "a_gate",
                            "pastDay": 0,
                            "past7Days": 98
                          }
                        ],
                        "experiments": [
                          {
                            "id": "my_experiment",
                            "pastDay": 102,
                            "past7Days": 558
                          },
                          {
                            "id": "another_experiment",
                            "pastDay": 5904,
                            "past7Days": 2078
                          }
                        ]
                      }
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
              "type": "array",
              "maxLength": 25,
              "maxItems": 25,
              "example": "'a_gate'"
            },
            "in": "query",
            "name": "gates",
            "description": "ids of gates to query (max 25)"
          },
          {
            "schema": {
              "type": "array",
              "maxLength": 25,
              "maxItems": 25,
              "example": "['a_experiment']"
            },
            "in": "query",
            "name": "experiments",
            "description": "ids of experiments to query (max 25)"
          }
        ],
        "tags": [
          "Reports"
        ],
        "x-stoplight": {
          "id": "z5j5zuxq4n5yq"
        },
        "requestBody": {
          "content": {}
        }
      }
    }
  },
  "components": {
    "schemas": {
      "ExposureCountResponse": {
        "title": "ExposureCountResponse",
        "x-stoplight": {
          "id": "uzky09s31ehw2"
        },
        "type": "object",
        "properties": {
          "gates": {
            "x-stoplight": {
              "id": "3xnqn90fzl0am"
            },
            "type": "array",
            "description": "Exposure counts for each gate queried",
            "items": {
              "$ref": "#/components/schemas/ExposureCountSingleton"
            }
          },
          "experiments": {
            "type": "array",
            "x-stoplight": {
              "id": "wtx6dy4so4aqf"
            },
            "description": "Exposure counts for each experiment queried",
            "items": {
              "$ref": "#/components/schemas/ExposureCountSingleton"
            }
          }
        },
        "required": [
          "gates",
          "experiments"
        ],
        "x-examples": {
          "Example 1": {
            "gates": [
              {
                "id": "a_gate",
                "pastDay": 125,
                "past7Days": 567
              }
            ],
            "experiments": [
              {
                "id": "a_experiment",
                "pastDay": 90,
                "past7Days": 125
              }
            ]
          }
        },
        "description": ""
      },
      "ExposureCountSingleton": {
        "title": "ExposureCountSingletonResponse",
        "x-stoplight": {
          "id": "22dibrkjv33ji"
        },
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "x-stoplight": {
              "id": "cp4g3yp1jpqk5"
            },
            "description": "ID of the config"
          },
          "pastDay": {
            "type": "number",
            "x-stoplight": {
              "id": "3jy43boexgktu"
            },
            "description": "number of exposures in the past day"
          },
          "past7Days": {
            "type": "number",
            "x-stoplight": {
              "id": "vh2ynqt2ceo9s"
            },
            "description": "Number of exposures in the last week"
          }
        },
        "required": [
          "pastDay",
          "past7Days"
        ],
        "x-examples": {
          "Example 1": {
            "id": "a_gate",
            "pastDay": 125,
            "past7Days": 567
          }
        }
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