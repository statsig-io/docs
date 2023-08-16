module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "1evg09eajy9t7"
  },
  "info": {
    "title": "https://statsigapi.net/console/v1",
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
      "post": {
        "summary": "",
        "operationId": "post-metrics",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "i8elj7e1sb3c1"
                      }
                    },
                    "data": {
                      "type": "object",
                      "x-stoplight": {
                        "id": "b179epemkmk01"
                      },
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "ghb8q12qtbw1i"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "ebuvr7cjeew18"
                          }
                        },
                        "description": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "d4k1mf6tjflw7"
                          }
                        },
                        "isHidden": {
                          "type": "boolean",
                          "x-stoplight": {
                            "id": "j3a7yfprkqvll"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric created successfully.",
                      "data": {
                        "name": "test_sum_metric",
                        "type": "sum",
                        "description": "Sum user count",
                        "isHidden": false
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad Request"
          },
          "401": {
            "description": "Unauthorized"
          }
        },
        "x-stoplight": {
          "id": "hvf03dwk20xj9"
        },
        "description": "Create Metric",
        "tags": [
          "Metrics"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "3vsxrr0evbwp6"
                    },
                    "description": "The name of the new metric"
                  },
                  "type": {
                    "x-stoplight": {
                      "id": "xnxur6e4en7k7"
                    },
                    "enum": [
                      "sum",
                      "ratio",
                      "mean",
                      "event_count_sum",
                      "composite",
                      "composite_sum",
                      "undefined",
                      "funnel"
                    ],
                    "description": "Type of the metric"
                  },
                  "unitTypes": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "ehpnnxfz6c0yz"
                    },
                    "description": "Unit of the metirc: stable_id, user_id, and other custom ids",
                    "items": {
                      "x-stoplight": {
                        "id": "71ea5453k4i5a"
                      },
                      "type": "string"
                    }
                  },
                  "metricEvents": {
                    "x-stoplight": {
                      "id": "53994xk4ya08u"
                    },
                    "type": "array",
                    "description": "Event(s) used to compute the metric",
                    "items": {
                      "$ref": "#/components/schemas/MetricEvent"
                    }
                  },
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "jqy1nta5slpw1"
                    },
                    "description": "Description of the new metric"
                  },
                  "tags": {
                    "type": [
                      "string",
                      "array"
                    ],
                    "x-stoplight": {
                      "id": "mb2gw8txpqr7p"
                    },
                    "items": {
                      "x-stoplight": {
                        "id": "v0uogfi23ye79"
                      },
                      "type": "string"
                    }
                  },
                  "isPermanent": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "d1fc16g6cvkvb"
                    }
                  },
                  "metricComponentMetrics": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "2qi9z75cevhfx"
                    },
                    "description": "List of input metrics used to calculate the new metric\nFor composite_sum and composite type of metric. ",
                    "items": {
                      "x-stoplight": {
                        "id": "rowku5mu3liqi"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "7h35fhmtlr30o"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "k4g6grxa1mt30"
                          }
                        }
                      }
                    }
                  },
                  "rollup": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "0ayuwzbkrpodr"
                    },
                    "description": "Time window for metric.\nSpecify \"custom\", if you want to provide customized time window. Default to be same as experiment time window"
                  },
                  "customRollUpStart": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "33gt6znmgom6g"
                    },
                    "description": "Custom time window start date (Days since exposure)\n"
                  },
                  "customRollUpEnd": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "e8s8uf11bc3mh"
                    },
                    "description": "Custom time window end date(Days since exposure)"
                  },
                  "funnelEventList": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "n2i9j79vv91nu"
                    },
                    "description": "For funnel metric type. \nNames of events used to create metric",
                    "items": {
                      "x-stoplight": {
                        "id": "qjd3e63vtoxf7"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "fcua7juddgsrc"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "29pvd8mmfcffn"
                          }
                        }
                      }
                    }
                  },
                  "funnelCountDistinct": {
                    "x-stoplight": {
                      "id": "9rqjftisfb4hf"
                    },
                    "description": "For funnel metric type. \nIf you care about counting each time a user goes through a given sequence of events, choose 'Events'. If you care about counting the number of distinct users that go through a given sequence of events, choose 'Users'.",
                    "enum": [
                      "events",
                      "users"
                    ]
                  }
                },
                "required": [
                  "name",
                  "type"
                ]
              },
              "examples": {
                "Incomplete metric creation": {
                  "value": {
                    "name": "test_metrics",
                    "type": "undefined",
                    "description": "Metrics with minimum information, more details can be setup later"
                  }
                },
                "Sum Event Metric": {
                  "value": {
                    "name": "test_sum_metric",
                    "type": "sum",
                    "unitTypes": [
                      "userID"
                    ],
                    "metricEvents": [
                      {
                        "name": "test_event",
                        "type": "value",
                        "criteria": []
                      }
                    ],
                    "description": "Sum user count",
                    "rollup": "custom",
                    "rollupStartDate": 3,
                    "rollupEndDate": 10
                  }
                },
              }
            },
            "application/xml": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            },
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        }
      },
      "get": {
        "summary": "Read Single Metric Value",
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
                  },
                  "Lineage": {
                    "value": {
                      "name": "Experiment interactions funnel metric",
                      "type": "funnel",
                      "id": "Experiment interactions metric::funnel",
                      "description": "",
                      "isHidden": false,
                      "tags": [],
                      "lineage": {
                        "events": [],
                        "metrics": [
                          "create_experiment::event_count",
                          "start_experiment::event_count",
                          "make_experiment_decision::event_count",
                          "abandon_experiment::event_count",
                          "delete_experiment::event_count"
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
                  "No metric found": {
                    "value": {
                      "status": 400,
                      "message": "No metric found for the given id, recieved: not_a::real_metric"
                    }
                  },
                  "No data found": {
                    "value": {
                      "status": 400,
                      "message": "No metric data found for the given date, recieved: 2022-11-25"
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
              "example": "d1_retention_rate::user"
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
    "/metrics/{metric_id}": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "d1_retention_rate::user"
          },
          "name": "metric_id",
          "in": "path",
          "required": true,
          "description": "metric id to query (metric_name::metric_type) found in /metrics/list response"
        }
      ],
      "post": {
        "summary": "",
        "operationId": "post-metrics",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        },
                        "description": {
                          "type": "string"
                        },
                        "isHidden": {
                          "type": "boolean"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric updated successfully.",
                      "data": {
                        "name": "daily_stickiness",
                        "type": "user",
                        "description": "new description",
                        "isHidden": false
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
                      "status": 404,
                      "message": "Metric not found"
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
                  "Not found": {
                    "value": {
                      "status": 404,
                      "message": "Metric not found"
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string",
                    "description": "Update metric's description"
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "description": "Updated description"
                  }
                }
              }
            }
          }
        },
        "description": "Update Metric",
        "tags": [
          "Metrics"
        ]
      },
      "delete": {
        "summary": "",
        "operationId": "delete-metrics-metric_id",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "x-stoplight": {
          "id": "eatiypmphl0ob"
        },
        "description": "Delete Metric",
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
                        "$ref": "#/components/schemas/MetricListItem"
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
                          "name": "metric_name",
                          "type": "composite",
                          "id": "metric_name::composite"
                        },
                        {
                          "name": "d1_retention_rate",
                          "type": "user",
                          "id": "d1_retention_rate::user",
                          "description": "this metric has a description and isHidden field",
                          "isHidden": false,
                          "tags": []
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
                  },
                  "Filtered by tag ": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "d1_retention_rate",
                          "type": "user",
                          "id": "d1_retention_rate::user",
                          "description": "description",
                          "isHidden": false,
                          "tags": [
                            "queried_tag"
                          ]
                        },
                        {
                          "name": "l14",
                          "type": "user",
                          "id": "l14::user",
                          "description": "a description",
                          "isHidden": false,
                          "tags": [
                            "queried_tag",
                            "other_tag"
                          ]
                        },
                        {
                          "name": "mau@d56_retention_rate",
                          "type": "user",
                          "id": "mau@d56_retention_rate::user",
                          "description": "",
                          "isHidden": false,
                          "tags": [
                            "queried_tag",
                            "another_tag"
                          ]
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
        "description": "List all metrics in the project",
        "tags": [
          "Metrics"
        ],
        "parameters": [
          {
            "schema": {
              "type": "string",
              "enum": [
                "true",
                "false"
              ]
            },
            "in": "query",
            "name": "showHiddenMetrics",
            "description": "Should hidden metrics be returned"
          },
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "tags",
            "description": "Filter metrics based on a given tagID, found on /tags endpoint"
          }
        ]
      },
      "parameters": []
    }
  },
  "components": {
    "schemas": {
      "MetricListItem": {
        "title": "MetricListItem",
        "x-stoplight": {
          "id": "vwqy1rj4332g5"
        },
        "type": "object",
        "x-tags": [
          "Metrics"
        ],
        "x-examples": {
          "d1_retention_rate": {
            "name": "d1_retention_rate",
            "type": "user",
            "id": "d1_retention_rate::user",
            "description": "ab",
            "isHidden": false,
            "lineage": {
              "events": [],
              "metrics": []
            }
          },
          "daily_stickiness": {
            "name": "daily_stickiness",
            "type": "user",
            "id": "daily_stickiness::user",
            "description": "new description",
            "isHidden": false
          },
          "Lineage": {
            "name": "Example Experiment funnel metric",
            "type": "funnel",
            "id": "Alison funnel metric::funnel",
            "description": "",
            "isHidden": false,
            "tags": [],
            "lineage": {
              "events": [],
              "metrics": [
                "create_experiment::event_count",
                "start_experiment::event_count",
                "make_experiment_decision::event_count",
                "abandon_experiment::event_count",
                "delete_experiment::event_count"
              ]
            }
          }
        },
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
          },
          "description": {
            "type": "string"
          },
          "isHidden": {
            "type": "boolean"
          },
          "lineage": {
            "type": "object",
            "x-stoplight": {
              "id": "gjeoc9wvk5oqf"
            },
            "required": [
              "events",
              "metrics"
            ],
            "properties": {
              "events": {
                "type": "array",
                "x-stoplight": {
                  "id": "v9yrwxfg7vo8h"
                },
                "description": "Events used in the calculation of this metric",
                "items": {
                  "x-stoplight": {
                    "id": "aqij9pethyohr"
                  },
                  "type": "string"
                }
              },
              "metrics": {
                "type": "array",
                "x-stoplight": {
                  "id": "b9xuqqow2zbik"
                },
                "description": "Other metrics used in the calculation this metric",
                "items": {
                  "x-stoplight": {
                    "id": "0s6pfi5idq6qm"
                  },
                  "type": "string"
                }
              }
            }
          }
        },
        "required": [
          "id",
          "name",
          "type",
          "description",
          "isHidden",
          "lineage"
        ]
      },
      "MetricRead": {
        "title": "MetricRead",
        "x-stoplight": {
          "id": "sjiyq40dd03sc"
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
      },
      "MetricEventCriteria": {
        "title": "MetricEventCriteria",
        "x-stoplight": {
          "id": "67hbl3oy9tb9u"
        },
        "type": "object",
        "properties": {
          "type": {
            "x-stoplight": {
              "id": "dkr711t57brtg"
            },
            "enum": [
              "value",
              "meta_data"
            ]
          },
          "key": {
            "type": "string",
            "x-stoplight": {
              "id": "23mcaed8cniuy"
            }
          },
          "condition": {
            "x-stoplight": {
              "id": "cxuwe1km9l0me"
            },
            "enum": [
              "in",
              "not_in",
              "=",
              ">",
              "<",
              "is_null",
              "non_null",
              "contains",
              "not_contains"
            ]
          },
          "values": {
            "type": "array",
            "x-stoplight": {
              "id": "t3dtdwyak3ac2"
            },
            "items": {
              "x-stoplight": {
                "id": "uu6ghu9kvja0c"
              },
              "type": "string"
            }
          },
          "nullVacuousOverride": {
            "type": "boolean",
            "x-stoplight": {
              "id": "jihy7v48qfdt8"
            }
          }
        },
        "description": ""
      },
      "MetricEvent": {
        "type": "object",
        "x-stoplight": {
          "id": "nl2xrqgt10xps"
        },
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "ecwn1i3x658yu"
            }
          },
          "type": {
            "type": "string",
            "x-stoplight": {
              "id": "m1bmdcn4mgmra"
            }
          },
          "metadataKey": {
            "type": "string",
            "x-stoplight": {
              "id": "jpz7tmktfkeht"
            }
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          }
        },
        "title": "MetricEvent",
        "description": ""
      },
      "MetricEvents": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "vnirpue3d0k4t"
            }
          },
          "type": {
            "x-stoplight": {
              "id": "wpvl99wqssx2d"
            },
            "enum": [
              "count",
              "count_distinct",
              "value",
              "metadata"
            ]
          },
          "metadataKey": {
            "type": "string",
            "x-stoplight": {
              "id": "n0hyuxjjw261m"
            }
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
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