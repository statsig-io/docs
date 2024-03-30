module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "58dv4xcbssdsx"
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
      "post": {
        "summary": "Create Metric",
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
                        "id": "nt9mvo6zsocwe"
                      }
                    },
                    "data": {
                      "type": "object",
                      "x-stoplight": {
                        "id": "x6rfmo4dez9m3"
                      },
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "zm8utmuhqtq56"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "eaja07cjg48mm"
                          }
                        },
                        "description": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "kb4o39kd6039l"
                          }
                        },
                        "isHidden": {
                          "type": "boolean",
                          "x-stoplight": {
                            "id": "qv6l6d4hxw2h7"
                          }
                        },
                        "isReadOnly": {
                          "type": "boolean",
                          "x-stoplight": {
                            "id": "ojs7jctcm5mj0"
                          }
                        },
                        "team": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "ya0pw98iohx0o"
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
          "id": "bquwiudidnjzt"
        },
        "description": "Create Cloud Metrics or Warehouse Native Metrics\n\nFor creating Warehouse Native Metrics: See [documentation](https://docs.statsig.com/statsig-warehouse-native/guides/metrics). Configuration of warehouse native metric goes to warehouseNative field. Fields NOT under warehouseNative, only name, tags, isPermanent, and description ",
        "tags": [
          "Metrics"
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "type"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "5lk3k3ij4ghgk"
                    },
                    "description": "The name of the new metric"
                  },
                  "isReadOnly": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "tdjorevh6e8ig"
                    },
                    "description": "Set the metric definition as editable only from Console API"
                  },
                  "type": {
                    "x-stoplight": {
                      "id": "3b3bexxparxwx"
                    },
                    "type": "string",
                    "enum": [
                      "sum",
                      "ratio",
                      "mean",
                      "event_count_sum",
                      "composite",
                      "composite_sum",
                      "undefined",
                      "funnel",
                      "user_warehouse"
                    ],
                    "description": "Type of the metric"
                  },
                  "unitTypes": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "srp9o6nljf77a"
                    },
                    "description": "Unit of the metirc: stableID, userID, and other custom ids",
                    "items": {
                      "x-stoplight": {
                        "id": "cf8eadcs3gjed"
                      },
                      "type": "string"
                    }
                  },
                  "directionality": {
                    "x-stoplight": {
                      "id": "tjotg0uuic9uu"
                    },
                    "type": "string",
                    "enum": [
                      "increase",
                      "decrease"
                    ],
                    "description": "Allowed increase | decrease. Metric directionality will be used in pulse to signify desired or undesired changes."
                  },
                  "metricEvents": {
                    "x-stoplight": {
                      "id": "stbs4g0ubvk7v"
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
                      "id": "9sqdcd2tovcdb"
                    },
                    "description": "Description of the new metric"
                  },
                  "tags": {
                    "type": [
                      "string",
                      "array"
                    ],
                    "x-stoplight": {
                      "id": "6ww15lbvugyuu"
                    },
                    "items": {
                      "x-stoplight": {
                        "id": "6j16fep3br950"
                      },
                      "type": "string"
                    }
                  },
                  "isPermanent": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "jbb68e8fqhtbm"
                    }
                  },
                  "metricComponentMetrics": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "1ue627hpqomwk"
                    },
                    "description": "List of input metrics used to calculate the new metric\nFor composite_sum and composite type of metric. ",
                    "items": {
                      "x-stoplight": {
                        "id": "uqx8creh3ysjc"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "s5zky6hxqt226"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "ivwzs0coxr3fq"
                          }
                        }
                      }
                    }
                  },
                  "rollup": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "h9gq5r4ya2qyp"
                    },
                    "description": "Time window for metric.\nSpecify \"custom\", if you want to provide customized time window. Default to be same as experiment time window"
                  },
                  "customRollUpStart": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "vlzayz6tji7b6"
                    },
                    "description": "Custom time window start date (Days since exposure)\n"
                  },
                  "customRollUpEnd": {
                    "type": "number",
                    "x-stoplight": {
                      "id": "hhzx5l8zabze5"
                    },
                    "description": "Custom time window end date(Days since exposure)"
                  },
                  "funnelEventList": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "lpqd085pkgfl3"
                    },
                    "description": "For funnel metric type. \nNames of events used to create metric",
                    "items": {
                      "x-stoplight": {
                        "id": "749wxpgjd6th3"
                      },
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "oveaskm0kj8xz"
                          }
                        },
                        "type": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "6w8bexku0yeie"
                          }
                        }
                      }
                    }
                  },
                  "funnelCountDistinct": {
                    "x-stoplight": {
                      "id": "z6rr3raudpf9o"
                    },
                    "description": "For funnel metric type. \nIf you care about counting each time a user goes through a given sequence of events, choose 'Events'. If you care about counting the number of distinct users that go through a given sequence of events, choose 'Users'.",
                    "type": "string",
                    "enum": [
                      "events",
                      "users"
                    ]
                  },
                  "warehouseNative": {
                    "type": "object",
                    "x-stoplight": {
                      "id": "rnfmv5n7ob1du"
                    },
                    "description": "Warehouse native metric configuration.  [Documentation](https://docs.statsig.com/statsig-warehouse-native/guides/metrics)\n\nFor creating user warehouse metric, all configuration is within this object. \nFor other fields, only name, description, tags, and metric type will be used. ",
                    "required": [
                      "aggregation",
                      "criteria"
                    ],
                    "properties": {
                      "aggregation": {
                        "x-stoplight": {
                          "id": "8kc7d76p58qrw"
                        },
                        "type": "string",
                        "enum": [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio",
                          "funnel"
                        ]
                      },
                      "metricSourceName": {
                        "type": "string",
                        "x-stoplight": {
                          "id": "tgx85c0uch6r8"
                        },
                        "description": "For Count, Sum, Mean, User Count aggregation types: the name of metric source\n\nFor Ratio aggregation type: the name of numerator metric source\n\nFor funnel aggregation type: you can ignore. Metric sources information are defined with funnelEvents"
                      },
                      "valueColumn": {
                        "type": "string",
                        "x-stoplight": {
                          "id": "gjdlhdb4wlwx6"
                        },
                        "description": "Name of value column used by Ratio and Sum aggregation type metric."
                      },
                      "criteria": {
                        "type": "array",
                        "x-stoplight": {
                          "id": "lixnvhr7jgil9"
                        },
                        "items": {
                          "$ref": "#/components/schemas/MetricEventCriteria"
                        }
                      },
                      "customRollupWaitUntilEndToInclude": {
                        "type": "boolean",
                        "x-stoplight": {
                          "id": "vbonjqv7av9lh"
                        }
                      },
                      "denominatorMetricSourceName": {
                        "type": "string",
                        "x-stoplight": {
                          "id": "pvw8hkxwt24ug"
                        }
                      },
                      "denominatorAggregation": {
                        "x-stoplight": {
                          "id": "pguy6gxdwql45"
                        },
                        "type": "string",
                        "enum": [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio",
                          "funnel"
                        ]
                      },
                      "denominatorCustomRollupStart": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "ngtf5z625kh1n"
                        }
                      },
                      "denominatorCustomRollupEnd": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "jz0e3876nz9yw"
                        }
                      },
                      "denominatorCriteria": {
                        "type": "array",
                        "x-stoplight": {
                          "id": "in796fk4qkrd8"
                        },
                        "items": {
                          "$ref": "#/components/schemas/MetricEventCriteria"
                        }
                      },
                      "denominatorRollup": {
                        "type": "string",
                        "x-stoplight": {
                          "id": "01iwfr8eybalf"
                        },
                        "description": "Time window for metric. Specify \"custom\", if you want to provide customized time window. Default to be same as experiment time window"
                      },
                      "denominatorValueColumn": {
                        "type": "string",
                        "x-stoplight": {
                          "id": "crriv5afi2g4r"
                        }
                      },
                      "funnelEvents": {
                        "type": "array",
                        "x-stoplight": {
                          "id": "fwjs21zmwzjxj"
                        },
                        "items": {
                          "$ref": "#/components/schemas/WarehuseNativeFunnelEvent"
                        }
                      },
                      "funnelCalculationWindow": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "5u3ppk3ykxpfi"
                        },
                        "description": "How long to count funnel events"
                      },
                      "funnelStartCriteria": {
                        "x-stoplight": {
                          "id": "nd4uewopkm7e6"
                        },
                        "type": "string",
                        "enum": [
                          "start_event",
                          "exposure"
                        ]
                      },
                      "funnelCountDistinct": {
                        "x-stoplight": {
                          "id": "h3vwo3p6ygz5v"
                        },
                        "type": "string",
                        "enum": [
                          "users",
                          "sessions"
                        ]
                      },
                      "metricBakeDays": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "6gv9b6ta5ck33"
                        },
                        "description": "[Documentation](https://docs.statsig.com/statsig-warehouse-native/features/cohort-metrics)"
                      },
                      "numeratorAggregation": {
                        "x-stoplight": {
                          "id": "1m6x7raoo5o5m"
                        },
                        "type": "string",
                        "enum": [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio"
                        ],
                        "description": "For ratio aggregation type. \nAggregation type for numerator"
                      },
                      "winsorizationHigh": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "d4rbf854gpgyv"
                        },
                        "description": "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
                        "minimum": 0,
                        "maximum": 1
                      },
                      "winsorizationLow": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "85kd5yxm6fdfk"
                        },
                        "description": "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
                        "minimum": 0,
                        "maximum": 1
                      },
                      "metadataColumns": {
                        "type": "array",
                        "x-stoplight": {
                          "id": "gjlvy15z5zvnf"
                        },
                        "description": "Specify metadata that you wish to breakdown in experiment analysis.",
                        "items": {
                          "x-stoplight": {
                            "id": "pmr2ewbzz1n00"
                          },
                          "type": "string"
                        }
                      },
                      "rollupTimeWindow": {
                        "x-stoplight": {
                          "id": "fz2iz506q6xwe"
                        },
                        "type": "string",
                        "enum": [
                          "max",
                          "latest",
                          "custom"
                        ]
                      },
                      "customRollUpStart": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "srt3704kn3bcu"
                        },
                        "description": "Custom time window start date (Days since exposure)\n"
                      },
                      "customRollUpEnd": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "u5wmokccozzj2"
                        },
                        "description": "Custom time window end date(Days since exposure)"
                      },
                      "cupedAttributionWindow": {
                        "type": "number",
                        "x-stoplight": {
                          "id": "n70u34uxm26ff"
                        }
                      }
                    }
                  },
                  "team": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "kxcxt65yhn3gj"
                    },
                    "description": "Enterprise only"
                  }
                }
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
                        "criteria": {}
                      }
                    ],
                    "description": "Sum user count",
                    "rollup": "custom",
                    "rollupStartDate": 3,
                    "rollupEndDate": 10
                  }
                },
                "Funnel Metric": {
                  "value": {
                    "name": "test_funnel_metric",
                    "type": "funnel",
                    "unitTypes": [
                      "useID"
                    ],
                    "description": "For testing funnel metric",
                    "funnelCountDistinct": "events"
                  }
                },
                "Warehouse Native Count": {
                  "value": {
                    "name": "whn_count_metric_v1",
                    "description": "Creating warehouse native metric and aggregation type of this metric is count",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "aggregation": "count",
                      "metricSourceName": "Log Events"
                    }
                  }
                },
                "Warehouse Native Funnel": {
                  "value": {
                    "name": "whn_funnel_metric",
                    "description": "Creating warehouse native metric and aggregation type of this metric is count",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "aggregation": "funnel",
                      "funnelEvents": [
                        {
                          "metricSourceName": "Log Events",
                          "name": "page_view",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "product_page"
                              ]
                            }
                          ]
                        },
                        {
                          "metricSourceName": "Log Events",
                          "name": "add_to_cart",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "product_page"
                              ]
                            }
                          ]
                        },
                        {
                          "metricSourceName": "Log Events",
                          "name": "cart_view",
                          "criteria": [
                            {
                              "type": "metadata",
                              "key": "page",
                              "condition": "in",
                              "values": [
                                "cart"
                              ]
                            }
                          ]
                        }
                      ],
                      "funnelCalculationWindow": 7,
                      "funnelCountDistinct": "users",
                      "funnelStartCriteria": "start_event"
                    }
                  }
                },
                "Warehouse Native Sum": {
                  "value": {
                    "name": "whn_sum_metric",
                    "description": "Creating warehouse native metric and aggregation type of this metric is sum",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "metricSourceName": "Checkout Events",
                      "aggregation": "sum",
                      "valueColumn": "price_usd",
                      "criteria": [
                        {
                          "type": "metadata",
                          "key": "event",
                          "condition": "in",
                          "values": [
                            "purchase"
                          ]
                        }
                      ]
                    }
                  }
                },
                "Warehouse Native Ratio": {
                  "value": {
                    "name": "whn_ratio_metric_v1",
                    "description": "Creating warehouse native metric and aggregation type of this metric is ratio",
                    "tags": [
                      "non_production"
                    ],
                    "type": "user_warehouse",
                    "warehouseNative": {
                      "metricSourceName": "Support Events",
                      "aggregation": "ratio",
                      "denominatorMetricSourceName": "Support Events",
                      "denominatorMetricAggregation": "count"
                    }
                  }
                }
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
          },
          "description": ""
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
                          "unit_type": "stableID"
                        },
                        {
                          "value": 21094,
                          "unit_type": "userID"
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
                        "$ref": "#/components/schemas/MetricValue"
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
                          "unit_type": "stableID"
                        },
                        {
                          "value": 21094,
                          "unit_type": "userID"
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
                          "unit_type": "userID",
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
                          "unit_type": "userID",
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
        ],
        "x-stoplight": {
          "id": "yvpvgqm80hmdj"
        }
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
        "summary": "Update a Metric",
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
                        },
                        "team": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "4j8schleepivd"
                          },
                          "description": "Enterprise only"
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
                  },
                  "tags": {
                    "type": "array",
                    "description": "Updated list of tags. Tags must exist first",
                    "items": {
                      "type": "string"
                    }
                  },
                  "isVerified": {
                    "type": "boolean",
                    "description": "This is used to display a \"verified\" icon next to this metric throughout the Statsig Console."
                  },
                  "unitTypes": {
                    "type": "array",
                    "description": "Update unit types for the metric",
                    "items": {
                      "type": "string"
                    }
                  },
                  "team": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "kjzptbr2j50gf"
                    }
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
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "prdmdmkomx4hh"
                      }
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "x-stoplight": {
          "id": "jz14xizbq9paj"
        },
        "description": "Delete Metric",
        "tags": [
          "Metrics"
        ]
      },
      "get": {
        "summary": "Get definition of a metric",
        "tags": [
          "Metrics"
        ],
        "responses": {
          "2XX": {
            "description": "Metric read successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric read successfully.",
                      "data": {
                        "name": "Purchase Revenue",
                        "directionality": "increase",
                        "type": "user_warehouse",
                        "description": "",
                        "isPermanent": false,
                        "warehouseNative": {
                          "aggregation": "sum",
                          "metricSourceName": "Checkout Events",
                          "criteria": [
                            {
                              "type": "metadata",
                              "column": "event",
                              "condition": "in",
                              "values": [
                                "purchase"
                              ]
                            }
                          ],
                          "denominatorCriteria": [],
                          "metricDimensionColumns": [
                            "product_category",
                            "page"
                          ],
                          "valueColumn": "price_usd"
                        }
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ],
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "xva1metpzd8ni"
                      },
                      "default": "Metric read successfully."
                    },
                    "data": {
                      "$ref": "#/components/schemas/MetricListItem"
                    }
                  }
                },
                "examples": {
                  "Read Success": {
                    "value": {
                      "message": "Metric read successfully.",
                      "data": {
                        "name": "Purchase Revenue",
                        "directionality": "increase",
                        "type": "user_warehouse",
                        "description": "",
                        "isPermanent": false,
                        "tags": [
                          "★ Core"
                        ],
                        "warehouseNative": {
                          "aggregation": "sum",
                          "metricSourceName": "Checkout Events",
                          "criteria": [
                            {
                              "type": "metadata",
                              "column": "event",
                              "condition": "in",
                              "values": [
                                "purchase"
                              ]
                            }
                          ],
                          "denominatorCriteria": [],
                          "metricDimensionColumns": [
                            "product_category",
                            "page"
                          ],
                          "valueColumn": "price_usd",
                          "cupedAttributionWindow": 7
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-metrics-metric_id",
        "x-stoplight": {
          "id": "96hn53zqbw7de"
        },
        "description": "Get Metric Definition: Returned schema should be consistent with schema required for metric creation. (Tags is still WIP)"
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
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
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
                          "id": "metric_name::composite",
                          "tags": [
                            "★ Core"
                          ],
                          "creatorName": "John Doe",
                          "creatorEmail": "john@email.com",
                          "createdTime": 1709866818123,
                          "owner": {
                            "name": "Mary Jane"
                          }
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
                  },
                  "Pagination Example": {
                    "value": {
                      "message": "Metrics listed successfully.",
                      "data": [
                        {
                          "name": "my_metric",
                          "type": "ratio",
                          "id": "my_metric::ratio",
                          "description": "",
                          "isHidden": false,
                          "creatorName": "jacob O'Quinn",
                          "creatorEmail": "jacob@statsig.com",
                          "tags": [],
                          "lineage": {
                            "events": [
                              "gql_query",
                              "custom_event"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "gql_query",
                          "type": "event_count",
                          "id": "gql_query::event_count",
                          "lineage": {
                            "events": [
                              "gql_query"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "gql_query",
                          "type": "event_dau",
                          "id": "gql_query::event_dau",
                          "lineage": {
                            "events": [
                              "gql_query"
                            ],
                            "metrics": []
                          }
                        },
                        {
                          "name": "hello",
                          "type": "setup_incomplete",
                          "id": "hello::setup_incomplete",
                          "description": "",
                          "isHidden": false,
                          "creatorName": "jacob O'Quinn",
                          "creatorEmail": "jacob@statsig.com",
                          "tags": [
                            "★ Core"
                          ],
                          "lineage": {
                            "events": [],
                            "metrics": []
                          }
                        },
                        {
                          "name": "joe loves event names",
                          "type": "event_count",
                          "id": "joe loves event names::event_count",
                          "lineage": {
                            "events": [
                              "joe loves event names"
                            ],
                            "metrics": []
                          }
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 5,
                        "pageNumber": 2,
                        "totalItems": 38,
                        "nextPage": "/console/v1/metrics/list?page=3&limit=5",
                        "previousPage": "/console/v1/metrics/list?page=1&limit=5",
                        "all": "/console/v1/metrics/list"
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
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page",
            "description": "Page to query"
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit",
            "description": "Elements per page"
          }
        ],
        "x-stoplight": {
          "id": "3ot3vi6ok1kwn"
        }
      },
      "parameters": []
    },
    "/metrics/values": {
      "get": {
        "summary": "List All Metric Values",
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
                  "required": [
                    "message",
                    "data",
                    "pagination"
                  ],
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "Array of metrics in the project",
                      "items": {
                        "$ref": "#/components/schemas/MetricValue"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Metric values listed successfully.",
                      "data": [
                        {
                          "value": 21377,
                          "unitType": "overall",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 21377,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 21355,
                          "unitType": "userID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Loads",
                          "metricType": "event_count_custom"
                        },
                        {
                          "value": 646524,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Average Time Spent on Page",
                          "metricType": "event_user"
                        },
                        {
                          "value": 5676,
                          "unitType": "stableID",
                          "numerator": null,
                          "denominator": null,
                          "metricName": "Page Latency",
                          "metricType": "mean"
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 5,
                        "pageNumber": 1,
                        "totalItems": 5767,
                        "nextPage": "/console/v1/metrics/values?date=2024-02-04&page=2&limit=5",
                        "previousPage": null
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
        "description": "List all metric values in the project",
        "tags": [
          "Metrics"
        ],
        "parameters": [
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "page",
            "description": "Page to query",
            "required": true
          },
          {
            "schema": {
              "type": "number"
            },
            "in": "query",
            "name": "limit",
            "description": "Elements per page",
            "required": true
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "date",
            "description": "Get values on select date (YYYY-MM-DD)",
            "required": true
          }
        ],
        "x-stoplight": {
          "id": "p329ri779y7jn"
        }
      },
      "parameters": []
    },
    "/metrics/metric_source": {
      "post": {
        "summary": "Create Metric Source (Warehouse Native)",
        "operationId": "post-metrics-metric_source",
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        },
        "x-stoplight": {
          "id": "2b2k2tyw7t295"
        },
        "description": "Create Warehouse Native Metric Source.\n \nSee [guidance](https://docs.statsig.com/statsig-warehouse-native/guides/metric-sources)",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "name",
                  "description",
                  "timestampColumn",
                  "sql",
                  "idTypeMapping"
                ],
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "zpvxctlzeop2x"
                    }
                  },
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "ga0a4qrk4acg5"
                    }
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "ysuk8ow5u1iqo"
                    },
                    "description": "List of tags. Tag must already exists in your project",
                    "items": {
                      "x-stoplight": {
                        "id": "8da1xehsesgrg"
                      },
                      "type": "string"
                    }
                  },
                  "timestampColumn": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "aqdllfjgqh6uo"
                    },
                    "description": "Timestamp "
                  },
                  "sql": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "h5hzo9ljar2lr"
                    },
                    "description": "SQL query you want to "
                  },
                  "idTypeMapping": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "6suc1egfufslz"
                    },
                    "items": {
                      "x-stoplight": {
                        "id": "84g694s49el9f"
                      },
                      "type": "object",
                      "properties": {
                        "statsigUnitID": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "9oov8u658qhq4"
                          },
                          "description": "Type of Unit ID this column represents. Configure a custom ID in project settings. [View Documentation](https://docs.statsig.com/guides/experiment-on-custom-id-types)"
                        },
                        "column": {
                          "type": "string",
                          "x-stoplight": {
                            "id": "jj2syczjxis7l"
                          },
                          "description": "Column name containing this unit type's values"
                        }
                      }
                    }
                  },
                  "timestampAsDay": {
                    "type": "boolean",
                    "x-stoplight": {
                      "id": "uzhp11qf08tyc"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "name": "test_metric_source",
                    "description": "Test description for metric source",
                    "tags": [
                      "non_production"
                    ],
                    "sql": "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                    "idTypeMapping": [
                      {
                        "statsigUnitID": "userID",
                        "column": "userID"
                      }
                    ],
                    "timestampColumn": "ts",
                    "timestampAsDay": true
                  }
                }
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
            },
            "text/html": {
              "schema": {
                "type": "object",
                "properties": {
                  "": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "f6951e1g4slfi"
                    }
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "Metric Source (Warehouse Native)"
        ]
      }
    },
    "/metrics/metric_source/{name}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "name",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Update Metric Source",
        "operationId": "post-metrics-metric_source-name",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "x-stoplight": {
          "id": "44eg0rpnev10i"
        },
        "description": "Update description and tags of the given metric source",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "r9ggqb32mmfoo"
                    }
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "csomgej1xjtie"
                    },
                    "description": "Updated list of tags. Tag must be created first",
                    "items": {
                      "x-stoplight": {
                        "id": "8csihc5aefrxd"
                      },
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Update description only": {
                  "value": {
                    "description": "Updated description"
                  }
                },
                "Update tags only": {
                  "value": {
                    "tags": [
                      "non_production"
                    ]
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "Metric Source (Warehouse Native)"
        ]
      }
    },
    "/metrics/metric_source/list": {
      "get": {
        "summary": "List Metric Sources",
        "tags": [
          "Metric Source (Warehouse Native)"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Metric sources listed successfully.",
                      "data": [
                        {
                          "name": "Log Events",
                          "description": "events",
                          "tags": [
                            "helo"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events\n",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            },
                            {
                              "statsigUnitID": "companyID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Visits",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  *, 1 as abc, 2 as abc2\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Navigation Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  userID,\n  device_id,\n  page,\n  PRODUCT_CATEGORY\nFROM shoppy-sales.logging.events\nWHERE event = 'page_view'",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            },
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Checkout Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  event,\n  userID,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "Support Events",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT \n  event, \n  ts, \n  userID, \n  device_id\nFROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "123213",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  ts,\n  event,\n  userID,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events ",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "Visits DeviceID",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT\n  *, 1 as thing\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'\n  AND farm_fingerprint(device_id) > 0",
                          "timestampColumn": "ts",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "deviceID",
                              "column": "device_id"
                            }
                          ]
                        },
                        {
                          "name": "Users who generated event X",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "12345",
                          "description": "",
                          "tags": [],
                          "sql": "SELECT * except(group_id) FROM `shoppy-sales.statsig.statsig_forwarded_exposures`",
                          "timestampColumn": "timestamp",
                          "timestampAsDay": false,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
                        },
                        {
                          "name": "123456",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "555",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "Search Event",
                          "description": "",
                          "tags": [],
                          "sql": "",
                          "timestampColumn": "",
                          "timestampAsDay": false,
                          "idTypeMapping": []
                        },
                        {
                          "name": "test_metric_source",
                          "description": "Test description for metric source",
                          "tags": [
                            "helo"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "userID",
                              "column": "userID"
                            }
                          ]
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
                      "items": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "description": {
                            "type": "string"
                          },
                          "tags": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          "sql": {
                            "type": "string"
                          },
                          "timestampColumn": {
                            "type": "string"
                          },
                          "timestampAsDay": {
                            "type": "boolean"
                          },
                          "idTypeMapping": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "statsigUnitID": {
                                  "type": "string"
                                },
                                "column": {
                                  "type": "string"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Metric sources listed successfully.",
                      "data": [
                        {
                          "name": "Log Events",
                          "description": "events",
                          "tags": [
                            "Core"
                          ],
                          "sql": "SELECT * FROM shoppy-sales.logging.events",
                          "timestampColumn": "ts",
                          "timestampAsDay": true,
                          "idTypeMapping": [
                            {
                              "statsigUnitID": "user",
                              "column": "string"
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
        "operationId": "get-metrics-metric_source-list",
        "x-stoplight": {
          "id": "9kkgsqjv4ib17"
        },
        "description": "List all Metric Sources in the project"
      }
    }
  },
  "components": {
    "schemas": {
      "MetricListItem": {
        "title": "MetricListItem",
        "x-stoplight": {
          "id": "fkyqxw5dg7v0c"
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
            },
            "creatorName": "John Doe",
            "creatorEmail": "john@email.com",
            "createdTime": 1709866818123,
            "owner": {
              "name": "Mary Jane"
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
        "required": [
          "id",
          "name",
          "type",
          "description",
          "isHidden",
          "lineage"
        ],
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
              "id": "hn1c0mgzfpcwf"
            },
            "required": [
              "events",
              "metrics"
            ],
            "properties": {
              "events": {
                "type": "array",
                "x-stoplight": {
                  "id": "knjo7ftmghltd"
                },
                "description": "Events used in the calculation of this metric",
                "items": {
                  "x-stoplight": {
                    "id": "0yymzi9l3gp1f"
                  },
                  "type": "string"
                }
              },
              "metrics": {
                "type": "array",
                "x-stoplight": {
                  "id": "7uxaw35rtzvsq"
                },
                "description": "Other metrics used in the calculation this metric",
                "items": {
                  "x-stoplight": {
                    "id": "zaceeu04fcmae"
                  },
                  "type": "string"
                }
              }
            }
          },
          "team": {
            "type": "string",
            "x-stoplight": {
              "id": "u0vji9pit3pxa"
            },
            "description": "Enterprise only"
          },
          "creatorName": {
            "type": "string",
            "x-stoplight": {
              "id": "imgjy6qzyg9z4"
            },
            "description": "Creator name",
            "example": "John Doe"
          },
          "creatorEmail": {
            "type": "string",
            "x-stoplight": {
              "id": "qqewedsqnrlgs"
            },
            "description": "Creator email",
            "example": "john@email.com"
          },
          "createdTime": {
            "type": "number",
            "x-stoplight": {
              "id": "r2i8p9ijv8cut"
            },
            "example": 1709866818123,
            "description": "Created timestamp in epoch ms"
          },
          "owner": {
            "type": "object",
            "x-stoplight": {
              "id": "6k8rscudykhhu"
            },
            "description": "Metric owner",
            "properties": {
              "name": {
                "type": "string",
                "x-stoplight": {
                  "id": "9c5x2yc1tojj7"
                },
                "description": "Owner name",
                "example": "Mary Jane"
              }
            }
          }
        }
      },
      "MetricValue": {
        "title": "MetricValue",
        "x-stoplight": {
          "id": "saqprrktzjx6h"
        },
        "type": "object",
        "properties": {
          "value": {
            "type": "number",
            "description": "Metric value for the given unit_type"
          },
          "unit_type": {
            "type": "string",
            "description": "Which unitType"
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
          "id": "0zznle8jc0d8e"
        },
        "type": "object",
        "properties": {
          "type": {
            "x-stoplight": {
              "id": "qsrwqcp5wjz62"
            },
            "type": "string",
            "enum": [
              "value",
              "meta_data"
            ]
          },
          "key": {
            "type": "string",
            "x-stoplight": {
              "id": "njy4bvp20pir5"
            }
          },
          "condition": {
            "x-stoplight": {
              "id": "a9mg4pbfiojg6"
            },
            "type": "string",
            "enum": [
              "in",
              "not_in",
              "=",
              ">",
              "<",
              "is_null",
              "non_null",
              "contains",
              "not_contains",
              "sql_filter",
              "starts_with",
              "ends_with",
              "after_exposure"
            ],
            "description": "sql_filter, start_withs, ends_with, and after_exposure are only applicable in Warehouse Native"
          },
          "values": {
            "type": "array",
            "x-stoplight": {
              "id": "fabmmj2osxfp6"
            },
            "items": {
              "x-stoplight": {
                "id": "793v8zel3n8jk"
              },
              "type": "string"
            }
          },
          "nullVacuousOverride": {
            "type": "boolean",
            "x-stoplight": {
              "id": "59j4yk52b3wxs"
            }
          }
        }
      },
      "MetricEvent": {
        "type": "object",
        "x-stoplight": {
          "id": "yc1fmvvv2giu1"
        },
        "properties": {
          "name": {
            "type": "string",
            "x-stoplight": {
              "id": "426b0xlaruq57"
            }
          },
          "type": {
            "type": "string",
            "x-stoplight": {
              "id": "x1chigyfijfzs"
            }
          },
          "metadataKey": {
            "type": "string",
            "x-stoplight": {
              "id": "wwka211t0o3ij"
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
              "id": "ww9gtpkqixlfs"
            }
          },
          "type": {
            "x-stoplight": {
              "id": "diylfl7fh8ke1"
            },
            "type": "string",
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
              "id": "dqkc34xodnjwo"
            }
          },
          "criteria": {
            "$ref": "#/components/schemas/MetricEventCriteria"
          }
        },
        "x-stoplight": {
          "id": "y4s2igonwubsq"
        }
      },
      "WarehuseNativeFunnelEvent": {
        "title": "WarehuseNativeFunnelEvent",
        "x-stoplight": {
          "id": "8d04ybenj2mlz"
        },
        "type": "object",
        "properties": {
          "criteria": {
            "x-stoplight": {
              "id": "5yloi5lml1jbx"
            },
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MetricEventCriteria"
            }
          },
          "metricSourceName": {
            "type": "string",
            "x-stoplight": {
              "id": "695mv5csnnpe2"
            }
          },
          "name": {
            "x-stoplight": {
              "id": "ejke3wqkzltk5"
            },
            "type": "string",
            "description": "Step name",
            "nullable": true
          },
          "sessionIdentifierField": {
            "type": "string",
            "x-stoplight": {
              "id": "oacjc9x1gwr9r"
            },
            "description": "Name of column which being used as session identifier. Funnel event with the same metric source have to have the same identifier column"
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