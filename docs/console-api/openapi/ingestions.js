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
      "ingestion-run": {
        "type": "object",
        "x-examples": {
          "download_error": {
            "runID": "5a09550b-75a1-4f98-908a-cd79ca729689",
            "latestStatus": "download_error",
            "lastUpdatedAt": "2023-12-14T02:47:00.321Z",
            "createdAt": "2023-12-14T02:31:46.896Z",
            "trigger": "scheduled",
            "sources": [
              "Events 1",
              "Events 2"
            ],
            "dateStamps": [
              "2023-12-12"
            ],
            "runHistory": [
              {
                "statusTimestamp": "2023-12-14T02:47:01.422Z",
                "status": "download_error"
              },
              {
                "statusTimestamp": "2023-12-14T02:46:46.800Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:44:32.597Z",
                "status": "download_error"
              },
              {
                "statusTimestamp": "2023-12-14T02:43:34.056Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:34:27.056Z",
                "status": "started"
              },
              {
                "statusTimestamp": "2023-12-14T02:31:46.896Z",
                "status": "enqueued"
              }
            ],
            "granularHistory": [
              {
                "source": "Events 1",
                "latestSourceStatus": "download_error",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T02:44:30.666Z",
                        "status": "download_error"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:22.724Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:34:25.325Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:31:46.896Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              },
              {
                "source": "Events 2",
                "latestSourceStatus": "download_error",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T02:44:30.666Z",
                        "status": "download_error"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:22.724Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:34:25.325Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:31:46.896Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "pulse_complete": {
            "runID": "21b97020-e61a-49bf-a9f3-ce46cec50489",
            "latestStatus": "pulse_complete",
            "lastUpdatedAt": "2023-12-14T04:18:54.603Z",
            "createdAt": "2023-12-14T02:30:27.217Z",
            "trigger": "scheduled",
            "sources": [
              "Metrics 1"
            ],
            "dateStamps": [
              "2023-12-12"
            ],
            "runHistory": [
              {
                "statusTimestamp": "2023-12-14T04:18:55.556Z",
                "status": "pulse_complete"
              },
              {
                "statusTimestamp": "2023-12-14T03:32:49.429Z",
                "status": "metrics_complete"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:40.015Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:33.322Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:27.046Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T03:21:15.449Z",
                "status": "metrics_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:45:17.161Z",
                "status": "download_complete"
              },
              {
                "statusTimestamp": "2023-12-14T02:43:33.661Z",
                "status": "download_started"
              },
              {
                "statusTimestamp": "2023-12-14T02:35:09.734Z",
                "status": "started"
              },
              {
                "statusTimestamp": "2023-12-14T02:30:27.217Z",
                "status": "enqueued"
              }
            ],
            "granularHistory": [
              {
                "source": "Metrics 1",
                "latestSourceStatus": "pulse_complete",
                "statusByDate": [
                  {
                    "dateStamp": "2023-12-12",
                    "statuses": [
                      {
                        "statusTimestamp": "2023-12-14T04:18:53.975Z",
                        "status": "pulse_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T04:04:48.761Z",
                        "status": "pulse_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:32:48.019Z",
                        "status": "metrics_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:38.667Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:32.039Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:25.385Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T03:21:14.383Z",
                        "status": "metrics_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:45:05.125Z",
                        "status": "download_complete"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:43:27.013Z",
                        "status": "download_started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:35:07.577Z",
                        "status": "started"
                      },
                      {
                        "statusTimestamp": "2023-12-14T02:30:27.217Z",
                        "status": "enqueued"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        "properties": {
          "runID": {
            "type": "string"
          },
          "latestStatus": {
            "type": "string"
          },
          "lastUpdatedAt": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          },
          "trigger": {
            "type": "string"
          },
          "sources": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "dateStamps": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "runHistory": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "statusTimestamp": {
                  "type": "string"
                },
                "status": {
                  "type": "string"
                }
              }
            }
          },
          "granularHistory": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "source": {
                  "type": "string"
                },
                "latestSourceStatus": {
                  "type": "string"
                },
                "statusByDate": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "dateStamp": {
                        "type": "string"
                      },
                      "statuses": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "statusTimestamp": {
                              "type": "string"
                            },
                            "status": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "required": [
          "runID",
          "latestStatus"
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
      "name": "ingestion"
    }
  ],
  "paths": {
    "/ingestion/status": {
      "get": {
        "summary": "List Ingestions Status",
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
        },
        "description": "",
        "tags": [
          "Ingestions"
        ]
      },
      "parameters": []
    },
    "/ingestion/runs": {
      "get": {
        "summary": "List Ingestion Runs",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "rjekv7bkqh9sx"
                      },
                      "type": "array",
                      "items": {
                        "$ref": "#/components/schemas/ingestion-run"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Ingestion Runs Listed Successfully.",
                      "data": [
                        {
                          "runID": "5a09550b-75a1-4f98-908a-cd79ca729689",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-14T02:47:00.321Z",
                          "createdAt": "2023-12-14T02:31:46.896Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-12"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-14T02:47:01.422Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:46:46.800Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:44:32.597Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:43:34.056Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:34:27.056Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:31:46.896Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T02:44:30.666Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:22.724Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:34:25.325Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:31:46.896Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T02:44:30.666Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:22.724Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:34:25.325Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:31:46.896Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "21b97020-e61a-49bf-a9f3-ce46cec50489",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-14T04:18:54.603Z",
                          "createdAt": "2023-12-14T02:30:27.217Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-12"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-14T04:18:55.556Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:32:49.429Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:40.015Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:33.322Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:27.046Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T03:21:15.449Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:45:17.161Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:43:33.661Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:35:09.734Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-14T02:30:27.217Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-12",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-14T04:18:53.975Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T04:04:48.761Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:32:48.019Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:38.667Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:32.039Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:25.385Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T03:21:14.383Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:45:05.125Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:43:27.013Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:35:07.577Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-14T02:30:27.217Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "de941fa2-3e0f-44ec-a44c-5c51eed07e0d",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-13T02:44:23.790Z",
                          "createdAt": "2023-12-13T02:30:55.992Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-11"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-13T02:44:24.865Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:44:12.421Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:41:48.458Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:40:56.694Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:32:35.607Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:30:55.992Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "93b0150f-d53a-416e-876f-bac00634a872",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-13T03:47:23.504Z",
                          "createdAt": "2023-12-13T02:29:32.793Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-11"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-13T03:47:24.548Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:41:19.158Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:35:05.780Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:28:52.123Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:22:38.140Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:20:48.982Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:40.079Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:31.359Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:23.553Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T03:16:08.026Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:42:52.210Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:41:01.394Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:33:26.492Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-13T02:29:32.793Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-11",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-13T03:47:22.812Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:41:17.582Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:20:47.294Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:38.421Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:29.827Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:21.847Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T03:16:05.864Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:42:36.220Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:40:47.890Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:33:24.219Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-13T02:29:32.793Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "a4df397e-c816-4e39-9b1a-ab6b2e5f3811",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-12T02:43:29.739Z",
                          "createdAt": "2023-12-12T02:30:41.989Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-10"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-12T02:43:30.735Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:43:16.318Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:40:56.030Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:39:58.147Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:32:18.156Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:30:41.989Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:54.406Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:39:51.150Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:16.419Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:30:41.989Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_error",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:54.406Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:39:51.150Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:16.419Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:30:41.989Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "eedeb4c0-07dd-43d0-8014-5ac41ef7dab8",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-12T03:50:41.473Z",
                          "createdAt": "2023-12-12T02:29:22.966Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-10"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-12T03:50:42.631Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:43:37.286Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:36:24.884Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:29:10.652Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:21:58.355Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:20:04.085Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:24.760Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:18.051Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:15:10.427Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T03:14:55.187Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:42:29.345Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:40:52.701Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:32:50.650Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-12T02:29:22.966Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-07",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:29:02.000Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:21:56.433Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-08",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:36:14.414Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:29:09.220Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:43:28.767Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:36:23.369Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-10",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T03:50:40.851Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:43:35.832Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:20:02.276Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:23.367Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:16.599Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:15:09.146Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T03:14:52.858Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:42:12.290Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:40:45.773Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:32:48.580Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-12T02:29:22.966Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "93b8b43c-8d52-4c77-bf8b-26426031a937",
                          "latestStatus": "download_error",
                          "lastUpdatedAt": "2023-12-12T05:23:34.419Z",
                          "createdAt": "2023-12-11T02:30:09.748Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Events 1",
                            "Events 2"
                          ],
                          "dateStamps": [
                            "2023-12-09"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-11T02:43:14.831Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:42:59.726Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:40:35.456Z",
                              "status": "download_error"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:39:41.755Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:31:30.223Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:30:09.748Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Events 1",
                              "latestSourceStatus": "download_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T05:23:36.192Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:40:33.565Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:39:34.990Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:31:28.492Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:30:09.748Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "source": "Events 2",
                              "latestSourceStatus": "download_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-12T05:23:36.193Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:40:33.565Z",
                                      "status": "download_error"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:39:34.990Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:31:28.492Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:30:09.748Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "runID": "97bbdee6-d77b-42c9-b4f0-d970eee9f983",
                          "latestStatus": "pulse_complete",
                          "lastUpdatedAt": "2023-12-11T10:00:43.391Z",
                          "createdAt": "2023-12-11T02:29:04.866Z",
                          "trigger": "scheduled",
                          "sources": [
                            "Metrics 1"
                          ],
                          "dateStamps": [
                            "2023-12-09"
                          ],
                          "runHistory": [
                            {
                              "statusTimestamp": "2023-12-11T10:00:44.621Z",
                              "status": "pulse_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:54:39.521Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:47:27.810Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:40:15.586Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:33:02.761Z",
                              "status": "pulse_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:31:14.238Z",
                              "status": "metrics_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:37.129Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:30.339Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:23.246Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T09:26:13.395Z",
                              "status": "metrics_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:51:38.296Z",
                              "status": "download_complete"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:49:59.185Z",
                              "status": "download_started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:42:14.545Z",
                              "status": "started"
                            },
                            {
                              "statusTimestamp": "2023-12-11T02:29:04.866Z",
                              "status": "enqueued"
                            }
                          ],
                          "granularHistory": [
                            {
                              "source": "Metrics 1",
                              "latestSourceStatus": "pulse_complete",
                              "statusByDate": [
                                {
                                  "dateStamp": "2023-12-06",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:40:06.488Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:33:00.819Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.624Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-07",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:47:19.007Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:40:14.371Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-08",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T09:54:31.386Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:47:26.424Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    }
                                  ]
                                },
                                {
                                  "dateStamp": "2023-12-09",
                                  "statuses": [
                                    {
                                      "statusTimestamp": "2023-12-11T10:00:42.867Z",
                                      "status": "pulse_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:54:38.280Z",
                                      "status": "pulse_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:31:12.660Z",
                                      "status": "metrics_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:35.749Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:28.818Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:22.625Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T09:26:11.934Z",
                                      "status": "metrics_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:51:26.328Z",
                                      "status": "download_complete"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:49:52.797Z",
                                      "status": "download_started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:42:12.424Z",
                                      "status": "started"
                                    },
                                    {
                                      "statusTimestamp": "2023-12-11T02:29:04.866Z",
                                      "status": "enqueued"
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 10,
                        "pageNumber": 1,
                        "nextPage": "/console/v1/ingestion/runs?page=2",
                        "previousPage": null
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-ingestion-runs",
        "x-stoplight": {
          "id": "qmhe6i49s5mr9"
        },
        "parameters": [
          {
            "schema": {
              "type": "number",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "description": "Which page to query"
          }
        ],
        "description": "List ingestion runs sorted by the timestamp they were triggered",
        "tags": [
          "Ingestions"
        ]
      }
    },
    "/ingestion/runs/{run_id}": {
      "get": {
        "summary": "Read Ingestion Run",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/ingestion-run"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Ingestion Run Read Successfully",
                      "data": {
                        "runID": "de941fa2-3e0f-44ec-a44c-5c51eed07e0d",
                        "latestStatus": "download_error",
                        "lastUpdatedAt": "2023-12-13T02:44:23.790Z",
                        "createdAt": "2023-12-13T02:30:55.992Z",
                        "trigger": "scheduled",
                        "sources": [
                          "Events 1",
                          "Events 2"
                        ],
                        "dateStamps": [
                          "2023-12-11"
                        ],
                        "runHistory": [
                          {
                            "statusTimestamp": "2023-12-13T02:44:24.865Z",
                            "status": "download_error"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:44:12.421Z",
                            "status": "download_started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:41:48.458Z",
                            "status": "download_error"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:40:56.694Z",
                            "status": "download_started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:32:35.607Z",
                            "status": "started"
                          },
                          {
                            "statusTimestamp": "2023-12-13T02:30:55.992Z",
                            "status": "enqueued"
                          }
                        ],
                        "granularHistory": [
                          {
                            "source": "Events 1",
                            "latestSourceStatus": "download_error",
                            "statusByDate": [
                              {
                                "dateStamp": "2023-12-11",
                                "statuses": [
                                  {
                                    "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                    "status": "download_error"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                    "status": "download_started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                    "status": "started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                    "status": "enqueued"
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "source": "Events 2",
                            "latestSourceStatus": "download_error",
                            "statusByDate": [
                              {
                                "dateStamp": "2023-12-11",
                                "statuses": [
                                  {
                                    "statusTimestamp": "2023-12-13T02:41:47.374Z",
                                    "status": "download_error"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:40:50.210Z",
                                    "status": "download_started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:32:33.118Z",
                                    "status": "started"
                                  },
                                  {
                                    "statusTimestamp": "2023-12-13T02:30:55.992Z",
                                    "status": "enqueued"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
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
                  "Example 1": {
                    "value": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "statusCode": 404,
                      "message": "runID de941fa2-3e0f-44ec-a44c-5c51eed07e0da not found",
                      "error": "Not Found"
                    }
                  },
                  "properties": {
                    "statusCode": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "error": {
                      "type": "string"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "statusCode": 404,
                      "message": "runID de941fa2-3e0f-44ec-a44c-5c51eed07e0z not found",
                      "error": "Not Found"
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-ingestion-runs",
        "x-stoplight": {
          "id": "ib0bn9rwm841d"
        },
        "parameters": [
          {
            "schema": {
              "type": "number",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "description": "Which page to query"
          }
        ],
        "description": "Get a selected run_id",
        "tags": [
          "Ingestions"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "run_id",
          "in": "path",
          "required": true,
          "description": "The Run ID to query"
        }
      ]
    }
  }
}