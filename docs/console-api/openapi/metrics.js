module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "gxm032r7wg95q"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0",
    "description": "Metrics Endpoint"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "paths": {
    "/metrics": {
      "parameters": [],
      "get": {
        "summary": "Read Single Metric",
        "operationId": "get-users-userId",
        "description": "Get metric data on a given date",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric read successfully.",
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
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "description": "Data corresponding each unit_type of the queried metric",
                      "items": {
                        "$ref": "#/components/schemas/MetricRead"
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "basic metric": {
                    "value": {
                      "message": "Metric read successfully.",
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
                  "imported ratio metric": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 105,
                          "unit_type": "user_id",
                          "input_rows": 5,
                          "numerator": 525,
                          "denominator": 5
                        }
                      ]
                    }
                  },
                  "ratio metric": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": [
                        {
                          "value": 1,
                          "unit_type": "user_id",
                          "numerator": 5,
                          "denominator": 5
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
                      "message": "No metric found for the given id, recieved: button_click::event_counta"
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
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "No metric found for the given id, recieved: not_a::real_metric"
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
              "type": "string"
            },
            "in": "query",
            "name": "date",
            "description": "date to query (YYYY-MM-DD)",
            "required": true
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "id",
            "description": "metric id to query (metric_name::metric_type) found in /metrics/list response",
            "required": true
          }
        ],
        "tags": [
          "Metrics"
        ]
      }
    },
    "/metrics/list": {
      "get": {
        "summary": "List All Metrics",
        "operationId": "get-user",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "User listed successfully.",
                      "data": [
                        {
                          "email": "jacob@statsig.com",
                          "firstName": "jacob",
                          "lastName": "O'Quinn",
                          "role": "admin"
                        },
                        {
                          "email": "joe@statsig.com",
                          "firstName": "Joe",
                          "lastName": "Zeng",
                          "role": "admin"
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "Array of metrics in the project",
                      "items": {
                        "$ref": "#/components/schemas/MetricList"
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "metric name",
                          "type": "composite",
                          "id": "metric name::composite"
                        }
                      ]
                    }
                  },
                  "example-2": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "metric_1",
                          "type": "composite",
                          "id": "metric_1::composite"
                        },
                        {
                          "name": "metric_2",
                          "type": "event_count",
                          "id": "metric_2::event_count"
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
        "description": "List all metrics in the project",
        "tags": [
          "Metrics"
        ]
      },
      "parameters": []
    }
  },
  "components": {
    "schemas": {
      "MetricList": {
        "title": "MetricList",
        "x-stoplight": {
          "id": "zjzdkz4s3hqqv"
        },
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "The formatted id used for queries"
          },
          "name": {
            "type": "string",
            "description": "Metric name"
          },
          "type": {
            "type": "string",
            "description": "Metric type"
          }
        },
        "required": [
          "id",
          "name",
          "type"
        ],
        "x-tags": [
          "Metrics"
        ],
        "description": ""
      },
      "MetricRead": {
        "title": "MetricRead",
        "x-stoplight": {
          "id": "y1cixhcqmax54"
        },
        "type": "object",
        "properties": {
          "value": {
            "type": "number",
            "description": "Metric value for the given unit_type"
          },
          "unit_type": {
            "type": "string",
            "description": "Which unit_type"
          },
          "input_rows": {
            "type": "integer",
            "description": "row count for imported metric"
          },
          "numerator": {
            "type": "number",
            "description": "Numerator of a ratio metric"
          },
          "denominator": {
            "type": "number",
            "description": "Denominator of a ratio metric"
          }
        },
        "required": [
          "value",
          "unit_type"
        ]
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