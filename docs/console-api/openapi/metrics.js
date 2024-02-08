module.exports = {
  openapi: "3.0.0",
  "x-stoplight": {
    id: "z4r4frc83xaoi",
  },
  info: {
    title: "console/v1",
    version: "1.0",
    description: "Metrics Endpoint",
  },
  servers: [
    {
      url: "https://statsigapi.net/console/v1",
    },
  ],
  paths: {
    "/metrics": {
      post: {
        summary: "Create Metric",
        operationId: "post-metrics",
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      "x-stoplight": {
                        id: "4wrsimwekispt",
                      },
                    },
                    data: {
                      type: "object",
                      "x-stoplight": {
                        id: "jp8tn0h0mfo84",
                      },
                      properties: {
                        name: {
                          type: "string",
                          "x-stoplight": {
                            id: "2cof9awd4cjrg",
                          },
                        },
                        type: {
                          type: "string",
                          "x-stoplight": {
                            id: "pvn5k6uw74x1y",
                          },
                        },
                        description: {
                          type: "string",
                          "x-stoplight": {
                            id: "5o88j7p22uouz",
                          },
                        },
                        isHidden: {
                          type: "boolean",
                          "x-stoplight": {
                            id: "gftsa9yrt391j",
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "Example 1": {
                    value: {
                      message: "Metric created successfully.",
                      data: {
                        name: "test_sum_metric",
                        type: "sum",
                        description: "Sum user count",
                        isHidden: false,
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
        },
        "x-stoplight": {
          id: "oq67er1vq5lgo",
        },
        description:
          "Create Cloud Metrics or Warehouse Native Metrics\n\nFor creating Warehouse Native Metrics: See [documentation](https://docs.statsig.com/statsig-warehouse-native/guides/metrics). Configuration of warehouse native metric goes to warehouseNative field. Fields NOT under warehouseNative, only name, tags, isPermanent, and description ",
        tags: ["Metrics"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["name", "type"],
                properties: {
                  name: {
                    type: "string",
                    "x-stoplight": {
                      id: "ppd970kq42147",
                    },
                    description: "The name of the new metric",
                  },
                  type: {
                    "x-stoplight": {
                      id: "8w4e30u8ntzyj",
                    },
                    type: "string",
                    enum: [
                      "sum",
                      "ratio",
                      "mean",
                      "event_count_sum",
                      "composite",
                      "composite_sum",
                      "undefined",
                      "funnel",
                      "user_warehouse",
                    ],
                    description: "Type of the metric",
                  },
                  unitTypes: {
                    type: "array",
                    "x-stoplight": {
                      id: "s66oghnnhrg2w",
                    },
                    description:
                      "Unit of the metirc: stable_id, user_id, and other custom ids",
                    items: {
                      "x-stoplight": {
                        id: "pnnrvaged3fd8",
                      },
                      type: "string",
                    },
                  },
                  directionality: {
                    "x-stoplight": {
                      id: "9fal37duwsv60",
                    },
                    type: "string",
                    enum: ["increase", "decrease"],
                    description:
                      "Allowed increase | decrease. Metric directionality will be used in pulse to signify desired or undesired changes.",
                  },
                  metricEvents: {
                    "x-stoplight": {
                      id: "rr95ay90741jo",
                    },
                    type: "array",
                    description: "Event(s) used to compute the metric",
                    items: {
                      $ref: "#/components/schemas/MetricEvent",
                    },
                  },
                  description: {
                    type: "string",
                    "x-stoplight": {
                      id: "hi8d3xvjngz2i",
                    },
                    description: "Description of the new metric",
                  },
                  tags: {
                    type: ["string", "array"],
                    "x-stoplight": {
                      id: "y0ph1a0vruf25",
                    },
                    items: {
                      "x-stoplight": {
                        id: "z8ibs5ztabx4v",
                      },
                      type: "string",
                    },
                  },
                  isPermanent: {
                    type: "boolean",
                    "x-stoplight": {
                      id: "mdokl2nq26n8i",
                    },
                  },
                  metricComponentMetrics: {
                    type: "array",
                    "x-stoplight": {
                      id: "ay3syqdtfbvi6",
                    },
                    description:
                      "List of input metrics used to calculate the new metric\nFor composite_sum and composite type of metric. ",
                    items: {
                      "x-stoplight": {
                        id: "8q136e74lgme0",
                      },
                      type: "object",
                      properties: {
                        name: {
                          type: "string",
                          "x-stoplight": {
                            id: "npoaq7nd09fx3",
                          },
                        },
                        type: {
                          type: "string",
                          "x-stoplight": {
                            id: "u5kzrgqskszve",
                          },
                        },
                      },
                    },
                  },
                  rollup: {
                    type: "string",
                    "x-stoplight": {
                      id: "oponh2m391oue",
                    },
                    description:
                      'Time window for metric.\nSpecify "custom", if you want to provide customized time window. Default to be same as experiment time window',
                  },
                  customRollUpStart: {
                    type: "number",
                    "x-stoplight": {
                      id: "36xwnuj34j3ws",
                    },
                    description:
                      "Custom time window start date (Days since exposure)\n",
                  },
                  customRollUpEnd: {
                    type: "number",
                    "x-stoplight": {
                      id: "0kvadt8zsgs5n",
                    },
                    description:
                      "Custom time window end date(Days since exposure)",
                  },
                  funnelEventList: {
                    type: "array",
                    "x-stoplight": {
                      id: "ag1qwtbpejlof",
                    },
                    description:
                      "For funnel metric type. \nNames of events used to create metric",
                    items: {
                      "x-stoplight": {
                        id: "22ar7ts82qjt9",
                      },
                      type: "object",
                      properties: {
                        name: {
                          type: "string",
                          "x-stoplight": {
                            id: "hc7cmbckn9zlh",
                          },
                        },
                        type: {
                          type: "string",
                          "x-stoplight": {
                            id: "tzw18ucxv2i7u",
                          },
                        },
                      },
                    },
                  },
                  funnelCountDistinct: {
                    "x-stoplight": {
                      id: "4dfeed66234hz",
                    },
                    description:
                      "For funnel metric type. \nIf you care about counting each time a user goes through a given sequence of events, choose 'Events'. If you care about counting the number of distinct users that go through a given sequence of events, choose 'Users'.",
                    type: "string",
                    enum: ["events", "users"],
                  },
                  warehouseNative: {
                    type: "object",
                    "x-stoplight": {
                      id: "6zpsok874p6mx",
                    },
                    description:
                      "Warehouse native metric configuration.  [Documentation](https://docs.statsig.com/statsig-warehouse-native/guides/metrics)\n\nFor creating user warehouse metric, all configuration is within this object. \nFor other fields, only name, description, tags, and metric type will be used. ",
                    required: ["aggregation", "criteria"],
                    properties: {
                      aggregation: {
                        "x-stoplight": {
                          id: "c1tt9bybpu3fa",
                        },
                        enum: [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio",
                          "funnel",
                        ],
                      },
                      metricSourceName: {
                        type: "string",
                        "x-stoplight": {
                          id: "59x6cuagnyz2v",
                        },
                        description:
                          "For Count, Sum, Mean, User Count aggregation types: the name of metric source\n\nFor Ratio aggregation type: the name of numerator metric source\n\nFor funnel aggregation type: you can ignore. Metric sources information are defined with funnelEvents",
                      },
                      valueColumn: {
                        type: "string",
                        "x-stoplight": {
                          id: "9i0hga30ini7y",
                        },
                        description:
                          "Name of value column used by Ratio and Sum aggregation type metric.",
                      },
                      criteria: {
                        type: "array",
                        "x-stoplight": {
                          id: "u5h8i2dp3vron",
                        },
                        items: {
                          $ref: "#/components/schemas/MetricEventCriteria",
                        },
                      },
                      customRollupWaitUntilEndToInclude: {
                        type: "boolean",
                        "x-stoplight": {
                          id: "6vbqkhea2btm1",
                        },
                      },
                      denominatorMetricSourceName: {
                        type: "string",
                        "x-stoplight": {
                          id: "c6c0gdzy9c6wl",
                        },
                      },
                      denominatorAggregation: {
                        "x-stoplight": {
                          id: "wjtpp64805spk",
                        },
                        type: "string",
                        enum: [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio",
                          "funnel",
                        ],
                      },
                      denominatorCustomRollupStart: {
                        type: "number",
                        "x-stoplight": {
                          id: "v1d93bofcx0zr",
                        },
                      },
                      denominatorCustomRollupEnd: {
                        type: "number",
                        "x-stoplight": {
                          id: "21jquda5kd429",
                        },
                      },
                      denominatorCriteria: {
                        type: "array",
                        "x-stoplight": {
                          id: "i6whuclxr6z2x",
                        },
                        items: {
                          $ref: "#/components/schemas/MetricEventCriteria",
                        },
                      },
                      denominatorRollup: {
                        type: "string",
                        "x-stoplight": {
                          id: "qcd1qrba0dvxt",
                        },
                        description:
                          'Time window for metric. Specify "custom", if you want to provide customized time window. Default to be same as experiment time window',
                      },
                      denominatorValueColumn: {
                        type: "string",
                        "x-stoplight": {
                          id: "glyml61ndmqh2",
                        },
                      },
                      funnelEvents: {
                        type: "array",
                        "x-stoplight": {
                          id: "h1g3cwycgoa22",
                        },
                        items: {
                          $ref: "#/components/schemas/WarehuseNativeFunnelEvent",
                        },
                      },
                      funnelCalculationWindow: {
                        type: "number",
                        "x-stoplight": {
                          id: "jj1mhb4zazf21",
                        },
                        description: "How long to count funnel events",
                      },
                      funnelStartCriteria: {
                        "x-stoplight": {
                          id: "9ql4m2tci6y3g",
                        },
                        type: "string",
                        enum: ["start_event", "exposure"],
                      },
                      funnelCountDistinct: {
                        "x-stoplight": {
                          id: "9wz857wouhb40",
                        },
                        type: "string",
                        enum: ["users", "sessions"],
                      },
                      metricBakeDays: {
                        type: "number",
                        "x-stoplight": {
                          id: "vlrvax2yj3dtg",
                        },
                        description:
                          "[Documentation](https://docs.statsig.com/statsig-warehouse-native/features/cohort-metrics)",
                      },
                      numeratorAggregation: {
                        "x-stoplight": {
                          id: "1bu0jvyc8l51g",
                        },
                        type: "string",
                        enum: [
                          "count",
                          "sum",
                          "mean",
                          "daily_participation",
                          "ratio",
                        ],
                        description:
                          "For ratio aggregation type. \nAggregation type for numerator",
                      },
                      winsorizationHigh: {
                        type: "number",
                        "x-stoplight": {
                          id: "dvdes9cfe8f20",
                        },
                        description:
                          "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
                        minimum: 0,
                        maximum: 1,
                      },
                      winsorizationLow: {
                        type: "number",
                        "x-stoplight": {
                          id: "fzzo7wkv1zuf8",
                        },
                        description:
                          "See [document](https://docs.statsig.com/stats-engine/methodologies/winsorization)",
                        minimum: 0,
                        maximum: 1,
                      },
                      metadataColumns: {
                        type: "array",
                        "x-stoplight": {
                          id: "xxzwls43s6gax",
                        },
                        description:
                          "Specify metadata that you wish to breakdown in experiment analysis.",
                        items: {
                          "x-stoplight": {
                            id: "6y58tiofkv4od",
                          },
                          type: "string",
                        },
                      },
                      rollupTimeWindow: {
                        "x-stoplight": {
                          id: "gooi968t4r27p",
                        },
                        enum: ["max", "latest", "custom"],
                      },
                      cupedAttributionWindow: {
                        type: "number",
                        "x-stoplight": {
                          id: "wdku0hnsizit8",
                        },
                      },
                    },
                  },
                },
              },
              examples: {
                "Incomplete metric creation": {
                  value: {
                    name: "test_metrics",
                    type: "undefined",
                    description:
                      "Metrics with minimum information, more details can be setup later",
                  },
                },
                "Sum Event Metric": {
                  value: {
                    name: "test_sum_metric",
                    type: "sum",
                    unitTypes: ["userID"],
                    metricEvents: [
                      {
                        name: "test_event",
                        type: "value",
                        criteria: {},
                      },
                    ],
                    description: "Sum user count",
                    rollup: "custom",
                    rollupStartDate: 3,
                    rollupEndDate: 10,
                  },
                },
                "Funnel Metric": {
                  value: {
                    name: "test_funnel_metric",
                    type: "funnel",
                    unitTypes: ["useID"],
                    description: "For testing funnel metric",
                    funnelCountDistinct: "events",
                  },
                },
                "Warehouse Native Count": {
                  value: {
                    name: "whn_count_metric_v1",
                    description:
                      "Creating warehouse native metric and aggregation type of this metric is count",
                    tags: ["non_production"],
                    type: "user_warehouse",
                    warehouseNative: {
                      aggregation: "count",
                      metricSourceName: "Log Events",
                    },
                  },
                },
                "Warehouse Native Funnel": {
                  value: {
                    name: "whn_funnel_metric",
                    description:
                      "Creating warehouse native metric and aggregation type of this metric is count",
                    tags: ["non_production"],
                    type: "user_warehouse",
                    warehouseNative: {
                      aggregation: "funnel",
                      funnelEvents: [
                        {
                          metricSourceName: "Log Events",
                          name: "page_view",
                          criteria: [
                            {
                              type: "metadata",
                              key: "page",
                              condition: "in",
                              values: ["product_page"],
                            },
                          ],
                        },
                        {
                          metricSourceName: "Log Events",
                          name: "add_to_cart",
                          criteria: [
                            {
                              type: "metadata",
                              key: "page",
                              condition: "in",
                              values: ["product_page"],
                            },
                          ],
                        },
                        {
                          metricSourceName: "Log Events",
                          name: "cart_view",
                          criteria: [
                            {
                              type: "metadata",
                              key: "page",
                              condition: "in",
                              values: ["cart"],
                            },
                          ],
                        },
                      ],
                      funnelCalculationWindow: 7,
                      funnelCountDistinct: "users",
                      funnelStartCriteria: "start_event",
                    },
                  },
                },
                "Warehouse Native Sum": {
                  value: {
                    name: "whn_sum_metric",
                    description:
                      "Creating warehouse native metric and aggregation type of this metric is sum",
                    tags: ["non_production"],
                    type: "user_warehouse",
                    warehouseNative: {
                      metricSourceName: "Checkout Events",
                      aggregation: "sum",
                      valueColumn: "price_usd",
                      criteria: [
                        {
                          type: "metadata",
                          key: "event",
                          condition: "in",
                          values: ["purchase"],
                        },
                      ],
                    },
                  },
                },
                "Warehouse Native Ratio": {
                  value: {
                    name: "whn_ratio_metric_v1",
                    description:
                      "Creating warehouse native metric and aggregation type of this metric is ratio",
                    tags: ["non_production"],
                    type: "user_warehouse",
                    warehouseNative: {
                      metricSourceName: "Support Events",
                      aggregation: "ratio",
                      denominatorMetricSourceName: "Support Events",
                      denominatorMetricAggregation: "count",
                    },
                  },
                },
              },
            },
            "application/xml": {
              schema: {
                type: "object",
                properties: {},
              },
            },
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {},
              },
            },
          },
          description: "",
        },
      },
      get: {
        summary: "Read Single Metric Value",
        operationId: "get-users-userId",
        description: "Get metric data on a given date",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      message: "Metric read successfully.",
                      data: [
                        {
                          value: 20995,
                          unit_type: "companyID",
                        },
                        {
                          value: 3048,
                          unit_type: "orgID",
                        },
                        {
                          value: 23502,
                          unit_type: "overall",
                        },
                        {
                          value: 23502,
                          unit_type: "stable_id",
                        },
                        {
                          value: 21094,
                          unit_type: "user_id",
                        },
                      ],
                    },
                  },
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "array",
                      description:
                        "Data corresponding each unit_type of the queried metric",
                      items: {
                        $ref: "#/components/schemas/MetricRead",
                      },
                    },
                  },
                  required: ["message", "data"],
                },
                examples: {
                  "basic metric": {
                    value: {
                      message: "Metric read successfully.",
                      data: [
                        {
                          value: 20995,
                          unit_type: "companyID",
                        },
                        {
                          value: 3048,
                          unit_type: "orgID",
                        },
                        {
                          value: 23502,
                          unit_type: "overall",
                        },
                        {
                          value: 23502,
                          unit_type: "stable_id",
                        },
                        {
                          value: 21094,
                          unit_type: "user_id",
                        },
                      ],
                    },
                  },
                  "imported ratio metric": {
                    value: {
                      message: "Metric read successfully.",
                      data: [
                        {
                          value: 105,
                          unit_type: "user_id",
                          input_rows: 5,
                          numerator: 525,
                          denominator: 5,
                        },
                      ],
                    },
                  },
                  "ratio metric": {
                    value: {
                      message: "Metric read successfully.",
                      data: [
                        {
                          value: 1,
                          unit_type: "user_id",
                          numerator: 5,
                          denominator: 5,
                        },
                      ],
                    },
                  },
                  Lineage: {
                    value: {
                      name: "Experiment interactions funnel metric",
                      type: "funnel",
                      id: "Experiment interactions metric::funnel",
                      description: "",
                      isHidden: false,
                      tags: [],
                      lineage: {
                        events: [],
                        metrics: [
                          "create_experiment::event_count",
                          "start_experiment::event_count",
                          "make_experiment_decision::event_count",
                          "abandon_experiment::event_count",
                          "delete_experiment::event_count",
                        ],
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      status: 400,
                      message:
                        "No metric found for the given id, recieved: button_click::event_counta",
                    },
                  },
                  properties: {
                    status: {
                      $ref: "../models/status.json",
                    },
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  "No metric found": {
                    value: {
                      status: 400,
                      message:
                        "No metric found for the given id, recieved: not_a::real_metric",
                    },
                  },
                  "No data found": {
                    value: {
                      status: 400,
                      message:
                        "No metric data found for the given date, recieved: 2022-11-25",
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
        },
        parameters: [
          {
            schema: {
              type: "string",
              example: "2022-10-31",
            },
            in: "query",
            name: "date",
            description: "date to query (YYYY-MM-DD)",
            required: true,
          },
          {
            schema: {
              type: "string",
              example: "d1_retention_rate::user",
            },
            in: "query",
            name: "id",
            description:
              "metric id to query (metric_name::metric_type) found in /metrics/list response",
            required: true,
          },
        ],
        tags: ["Metrics"],
        "x-stoplight": {
          id: "agexjgbpovrnk",
        },
      },
    },
    "/metrics/{metric_id}": {
      parameters: [
        {
          schema: {
            type: "string",
            example: "d1_retention_rate::user",
          },
          name: "metric_id",
          in: "path",
          required: true,
          description:
            "metric id to query (metric_name::metric_type) found in /metrics/list response",
        },
      ],
      post: {
        summary: "",
        operationId: "post-metrics",
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      type: "object",
                      properties: {
                        name: {
                          type: "string",
                        },
                        type: {
                          type: "string",
                        },
                        description: {
                          type: "string",
                        },
                        isHidden: {
                          type: "boolean",
                        },
                      },
                    },
                  },
                },
                examples: {
                  "Example 1": {
                    value: {
                      message: "Metric updated successfully.",
                      data: {
                        name: "daily_stickiness",
                        type: "user",
                        description: "new description",
                        isHidden: false,
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "Example 1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      status: 404,
                      message: "Metric not found",
                    },
                  },
                  properties: {
                    status: {
                      $ref: "../models/status.json",
                    },
                    message: {
                      $ref: "../models/message.json",
                    },
                  },
                },
                examples: {
                  "Not found": {
                    value: {
                      status: 404,
                      message: "Metric not found",
                    },
                  },
                },
              },
            },
          },
        },
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    type: "string",
                    description: "Update metric's description",
                  },
                  tags: {
                    type: "array",
                    description: "Updated list of tags. Tags must exist first",
                    items: {
                      type: "string",
                    },
                  },
                  isVerified: {
                    type: "boolean",
                    description: "This is used to display a \"verified\" icon next to this metric throughout the Statsig Console."
                  },
                },
              },
              examples: {
                "Example 1": {
                  value: {
                    description: "Updated description",
                  },
                },
              },
            },
          },
        },
        description: "Update Metric",
        tags: ["Metrics"],
      },
      delete: {
        summary: "",
        operationId: "delete-metrics-metric_id",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      "x-stoplight": {
                        id: "xt32erk7maxls",
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
        "x-stoplight": {
          id: "4skzeybn0o9h5",
        },
        description: "Delete Metric",
        tags: ["Metrics"],
      },
      get: {
        summary: "Get definition of a metric",
        tags: ["Metrics"],
        responses: {
          "2XX": {
            description: "Metric read successfully.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      message: "Metric read successfully.",
                      data: {
                        name: "Purchase Revenue",
                        directionality: "increase",
                        type: "user_warehouse",
                        description: "",
                        isPermanent: false,
                        warehouseNative: {
                          aggregation: "sum",
                          metricSourceName: "Checkout Events",
                          criteria: [
                            {
                              type: "metadata",
                              column: "event",
                              condition: "in",
                              values: ["purchase"],
                            },
                          ],
                          denominatorCriteria: [],
                          metricDimensionColumns: ["product_category", "page"],
                          valueColumn: "price_usd",
                        },
                      },
                    },
                  },
                },
                examples: {
                  "Read Success": {
                    value: {
                      message: "Metric read successfully.",
                      data: {
                        name: "Purchase Revenue",
                        directionality: "increase",
                        type: "user_warehouse",
                        description: "",
                        isPermanent: false,
                        tags: ["★ Core"],
                        warehouseNative: {
                          aggregation: "sum",
                          metricSourceName: "Checkout Events",
                          criteria: [
                            {
                              type: "metadata",
                              column: "event",
                              condition: "in",
                              values: ["purchase"],
                            },
                          ],
                          denominatorCriteria: [],
                          metricDimensionColumns: ["product_category", "page"],
                          valueColumn: "price_usd",
                          cupedAttributionWindow: 7,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        operationId: "get-metrics-metric_id",
        "x-stoplight": {
          id: "9a0l8henitzhd",
        },
        description:
          "Get Metric Definition: Returned schema should be consistent with schema required for metric creation. (Tags is still WIP)",
      },
    },
    "/metrics/list": {
      get: {
        summary: "List All Metrics",
        operationId: "get-user",
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      message: "User listed successfully.",
                      data: [
                        {
                          email: "jacob@statsig.com",
                          firstName: "jacob",
                          lastName: "O'Quinn",
                          role: "admin",
                        },
                        {
                          email: "joe@statsig.com",
                          firstName: "Joe",
                          lastName: "Zeng",
                          role: "admin",
                        },
                      ],
                    },
                  },
                  properties: {
                    message: {
                      $ref: "../models/message.json",
                    },
                    data: {
                      type: "array",
                      description: "Array of metrics in the project",
                      items: {
                        $ref: "#/components/schemas/MetricListItem",
                      },
                    },
                    pagination: {
                      $ref: "../models/pagination.json",
                    },
                  },
                  required: ["message", "data"],
                },
                examples: {
                  "example-1": {
                    value: {
                      message: "Metrics listed successfully.",
                      data: [
                        {
                          name: "metric_name",
                          type: "composite",
                          id: "metric_name::composite",
                          tags: ["★ Core"],
                        },
                        {
                          name: "d1_retention_rate",
                          type: "user",
                          id: "d1_retention_rate::user",
                          description:
                            "this metric has a description and isHidden field",
                          isHidden: false,
                          tags: [],
                        },
                      ],
                    },
                  },
                  "example-2": {
                    value: {
                      message: "Metrics listed successfully.",
                      data: [
                        {
                          name: "metric_1",
                          type: "composite",
                          id: "metric_1::composite",
                        },
                        {
                          name: "metric_2",
                          type: "event_count",
                          id: "metric_2::event_count",
                        },
                      ],
                    },
                  },
                  "Filtered by tag ": {
                    value: {
                      message: "Metrics listed successfully.",
                      data: [
                        {
                          name: "d1_retention_rate",
                          type: "user",
                          id: "d1_retention_rate::user",
                          description: "description",
                          isHidden: false,
                          tags: ["queried_tag"],
                        },
                        {
                          name: "l14",
                          type: "user",
                          id: "l14::user",
                          description: "a description",
                          isHidden: false,
                          tags: ["queried_tag", "other_tag"],
                        },
                        {
                          name: "mau@d56_retention_rate",
                          type: "user",
                          id: "mau@d56_retention_rate::user",
                          description: "",
                          isHidden: false,
                          tags: ["queried_tag", "another_tag"],
                        },
                      ],
                    },
                  },
                  "Pagination Example": {
                    value: {
                      message: "Metrics listed successfully.",
                      data: [
                        {
                          name: "my_metric",
                          type: "ratio",
                          id: "my_metric::ratio",
                          description: "",
                          isHidden: false,
                          creatorName: "jacob O'Quinn",
                          creatorEmail: "jacob@statsig.com",
                          tags: [],
                          lineage: {
                            events: ["gql_query", "custom_event"],
                            metrics: [],
                          },
                        },
                        {
                          name: "gql_query",
                          type: "event_count",
                          id: "gql_query::event_count",
                          lineage: {
                            events: ["gql_query"],
                            metrics: [],
                          },
                        },
                        {
                          name: "gql_query",
                          type: "event_dau",
                          id: "gql_query::event_dau",
                          lineage: {
                            events: ["gql_query"],
                            metrics: [],
                          },
                        },
                        {
                          name: "hello",
                          type: "setup_incomplete",
                          id: "hello::setup_incomplete",
                          description: "",
                          isHidden: false,
                          creatorName: "jacob O'Quinn",
                          creatorEmail: "jacob@statsig.com",
                          tags: ["★ Core"],
                          lineage: {
                            events: [],
                            metrics: [],
                          },
                        },
                        {
                          name: "joe loves event names",
                          type: "event_count",
                          id: "joe loves event names::event_count",
                          lineage: {
                            events: ["joe loves event names"],
                            metrics: [],
                          },
                        },
                      ],
                      pagination: {
                        itemsPerPage: 5,
                        pageNumber: 2,
                        totalItems: 38,
                        nextPage: "/console/v1/metrics/list?page=3&limit=5",
                        previousPage: "/console/v1/metrics/list?page=1&limit=5",
                        all: "/console/v1/metrics/list",
                      },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
            content: {
              "application/json": {
                schema: {
                  $ref: "../models/error_401.json",
                },
                examples: {
                  "example-1": {
                    value: {
                      status: 401,
                      message:
                        "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx",
                    },
                  },
                },
              },
            },
          },
        },
        description: "List all metrics in the project",
        tags: ["Metrics"],
        parameters: [
          {
            schema: {
              type: "string",
              enum: ["true", "false"],
            },
            in: "query",
            name: "showHiddenMetrics",
            description: "Should hidden metrics be returned",
          },
          {
            schema: {
              type: "array",
            },
            in: "query",
            name: "tags",
            description:
              "Filter metrics based on a given tagID, found on /tags endpoint",
          },
          {
            schema: {
              type: "number",
            },
            in: "query",
            name: "page",
            description: "Page to query",
          },
          {
            schema: {
              type: "number",
            },
            in: "query",
            name: "limit",
            description: "Elements per page",
          },
        ],
        "x-stoplight": {
          id: "hraf7qd3ede6p",
        },
      },
      parameters: [],
    },
    "/metrics/metric_source": {
      post: {
        summary: "Create Metric Source (Warehouse Native)",
        operationId: "post-metrics-metric_source",
        responses: {
          200: {
            description: "OK",
          },
          400: {
            description: "Bad Request",
          },
        },
        "x-stoplight": {
          id: "g743ks59c83ix",
        },
        description:
          "Create Warehouse Native Metric Source.\n \nSee [guidance](https://docs.statsig.com/statsig-warehouse-native/guides/metric-sources)",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: [
                  "name",
                  "description",
                  "timestampColumn",
                  "sql",
                  "idTypeMapping",
                ],
                properties: {
                  name: {
                    type: "string",
                    "x-stoplight": {
                      id: "hntiod51vjbew",
                    },
                  },
                  description: {
                    type: "string",
                    "x-stoplight": {
                      id: "yoz2h2stwhgdi",
                    },
                  },
                  tags: {
                    type: "array",
                    "x-stoplight": {
                      id: "tra890ftvr0x0",
                    },
                    description:
                      "List of tags. Tag must already exists in your project",
                    items: {
                      "x-stoplight": {
                        id: "txpkdb1loqn3y",
                      },
                      type: "string",
                    },
                  },
                  timestampColumn: {
                    type: "string",
                    "x-stoplight": {
                      id: "6uvv25sdv8qm2",
                    },
                    description: "Timestamp ",
                  },
                  sql: {
                    type: "string",
                    "x-stoplight": {
                      id: "tcgyz0371yl6x",
                    },
                    description: "SQL query you want to ",
                  },
                  idTypeMapping: {
                    type: "array",
                    "x-stoplight": {
                      id: "qteof4kbqqqxw",
                    },
                    items: {
                      "x-stoplight": {
                        id: "x6g48nfaamslm",
                      },
                      type: "object",
                      properties: {
                        statsigUnitID: {
                          type: "string",
                          "x-stoplight": {
                            id: "1r888gtck50ia",
                          },
                          description:
                            "Type of Unit ID this column represents. Configure a custom ID in project settings. [View Documentation](https://docs.statsig.com/guides/experiment-on-custom-id-types)",
                        },
                        column: {
                          type: "string",
                          "x-stoplight": {
                            id: "p6yf8ckwqm2i9",
                          },
                          description:
                            "Column name containing this unit type's values",
                        },
                      },
                    },
                  },
                  timestampAsDay: {
                    type: "boolean",
                    "x-stoplight": {
                      id: "9f2iy2sjk6fsx",
                    },
                  },
                },
              },
              examples: {
                "Example 1": {
                  value: {
                    name: "test_metric_source",
                    description: "Test description for metric source",
                    tags: ["non_production"],
                    sql: "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                    idTypeMapping: [
                      {
                        statsigUnitID: "userID",
                        column: "user_id",
                      },
                    ],
                    timestampColumn: "ts",
                    timestampAsDay: true,
                  },
                },
              },
            },
            "application/xml": {
              schema: {
                type: "object",
                properties: {},
              },
            },
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {},
              },
            },
            "text/html": {
              schema: {
                type: "object",
                properties: {
                  "": {
                    type: "string",
                    "x-stoplight": {
                      id: "eltb8b2lwlts8",
                    },
                  },
                },
              },
            },
          },
          description: "",
        },
        tags: ["Metric Source (Warehouse Native)"],
      },
    },
    "/metrics/metric_source/{name}": {
      parameters: [
        {
          schema: {
            type: "string",
          },
          name: "name",
          in: "path",
          required: true,
        },
      ],
      post: {
        summary: "Update Metric Source",
        operationId: "post-metrics-metric_source-name",
        responses: {
          200: {
            description: "OK",
          },
        },
        "x-stoplight": {
          id: "fhbmy15agoxzz",
        },
        description: "Update description and tags of the given metric source",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  description: {
                    type: "string",
                    "x-stoplight": {
                      id: "9bbrbvy9uebpg",
                    },
                  },
                  tags: {
                    type: "array",
                    "x-stoplight": {
                      id: "sdjcdma8junxx",
                    },
                    description:
                      "Updated list of tags. Tag must be created first",
                    items: {
                      "x-stoplight": {
                        id: "uev9305380j93",
                      },
                      type: "string",
                    },
                  },
                },
              },
              examples: {
                "Update description only": {
                  value: {
                    description: "Updated description",
                  },
                },
                "Update tags only": {
                  value: {
                    tags: ["non_production"],
                  },
                },
              },
            },
          },
          description: "",
        },
        tags: ["Metric Source (Warehouse Native)"],
      },
    },
    "/metrics/metric_source/list": {
      get: {
        summary: "List Metric Sources",
        tags: ["Metric Source (Warehouse Native)"],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  "x-examples": {
                    "Example 1": {
                      message: "Metric sources listed successfully.",
                      data: [
                        {
                          name: "Log Events",
                          description: "events",
                          tags: ["helo"],
                          sql: "SELECT * FROM shoppy-sales.logging.events\n",
                          timestampColumn: "ts",
                          timestampAsDay: true,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                            {
                              statsigUnitID: "deviceID",
                              column: "device_id",
                            },
                            {
                              statsigUnitID: "companyID",
                              column: "device_id",
                            },
                          ],
                        },
                        {
                          name: "Visits",
                          description: "",
                          tags: [],
                          sql: "SELECT\n  *, 1 as abc, 2 as abc2\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                            {
                              statsigUnitID: "deviceID",
                              column: "device_id",
                            },
                          ],
                        },
                        {
                          name: "Navigation Events",
                          description: "",
                          tags: [],
                          sql: "SELECT\n  ts,\n  user_id,\n  device_id,\n  page,\n  PRODUCT_CATEGORY\nFROM shoppy-sales.logging.events\nWHERE event = 'page_view'",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                            {
                              statsigUnitID: "deviceID",
                              column: "device_id",
                            },
                          ],
                        },
                        {
                          name: "Checkout Events",
                          description: "",
                          tags: [],
                          sql: "SELECT\n  ts,\n  event,\n  user_id,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                          ],
                        },
                        {
                          name: "Support Events",
                          description: "",
                          tags: [],
                          sql: "SELECT \n  event, \n  ts, \n  user_id, \n  device_id\nFROM shoppy-sales.logging.events",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                          ],
                        },
                        {
                          name: "123213",
                          description: "",
                          tags: [],
                          sql: "SELECT\n  ts,\n  event,\n  user_id,\n  page,\n  product_category,\n  price_usd\nFROM shoppy-sales.logging.events ",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                          ],
                        },
                        {
                          name: "Visits DeviceID",
                          description: "",
                          tags: [],
                          sql: "SELECT\n  *, 1 as thing\nFROM shoppy-sales.logging.events\nWHERE event = 'visit'\n  AND farm_fingerprint(device_id) > 0",
                          timestampColumn: "ts",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "deviceID",
                              column: "device_id",
                            },
                          ],
                        },
                        {
                          name: "Users who generated event X",
                          description: "",
                          tags: [],
                          sql: "",
                          timestampColumn: "",
                          timestampAsDay: false,
                          idTypeMapping: [],
                        },
                        {
                          name: "12345",
                          description: "",
                          tags: [],
                          sql: "SELECT * except(group_id) FROM `shoppy-sales.statsig.statsig_forwarded_exposures`",
                          timestampColumn: "timestamp",
                          timestampAsDay: false,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                          ],
                        },
                        {
                          name: "123456",
                          description: "",
                          tags: [],
                          sql: "",
                          timestampColumn: "",
                          timestampAsDay: false,
                          idTypeMapping: [],
                        },
                        {
                          name: "555",
                          description: "",
                          tags: [],
                          sql: "",
                          timestampColumn: "",
                          timestampAsDay: false,
                          idTypeMapping: [],
                        },
                        {
                          name: "Search Event",
                          description: "",
                          tags: [],
                          sql: "",
                          timestampColumn: "",
                          timestampAsDay: false,
                          idTypeMapping: [],
                        },
                        {
                          name: "test_metric_source",
                          description: "Test description for metric source",
                          tags: ["helo"],
                          sql: "SELECT * FROM shoppy-sales.logging.events WHERE event = 'visit'",
                          timestampColumn: "ts",
                          timestampAsDay: true,
                          idTypeMapping: [
                            {
                              statsigUnitID: "userID",
                              column: "user_id",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  properties: {
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          name: {
                            type: "string",
                          },
                          description: {
                            type: "string",
                          },
                          tags: {
                            type: "array",
                            items: {
                              type: "string",
                            },
                          },
                          sql: {
                            type: "string",
                          },
                          timestampColumn: {
                            type: "string",
                          },
                          timestampAsDay: {
                            type: "boolean",
                          },
                          idTypeMapping: {
                            type: "array",
                            items: {
                              type: "object",
                              properties: {
                                statsigUnitID: {
                                  type: "string",
                                },
                                column: {
                                  type: "string",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                examples: {
                  "Example 1": {
                    value: {
                      message: "Metric sources listed successfully.",
                      data: [
                        {
                          name: "Log Events",
                          description: "events",
                          tags: ["Core"],
                          sql: "SELECT * FROM shoppy-sales.logging.events",
                          timestampColumn: "ts",
                          timestampAsDay: true,
                          idTypeMapping: [
                            {
                              statsigUnitID: "user",
                              column: "string",
                            },
                          ],
                        },
                      ],
                    },
                  },
                },
              },
            },
          },
        },
        operationId: "get-metrics-metric_source-list",
        "x-stoplight": {
          id: "3wzno6nvteckc",
        },
        description: "List all Metric Sources in the project",
      },
    },
  },
  components: {
    schemas: {
      MetricListItem: {
        title: "MetricListItem",
        "x-stoplight": {
          id: "4v7o2l5nnx9re",
        },
        type: "object",
        "x-tags": ["Metrics"],
        "x-examples": {
          d1_retention_rate: {
            name: "d1_retention_rate",
            type: "user",
            id: "d1_retention_rate::user",
            description: "ab",
            isHidden: false,
            lineage: {
              events: [],
              metrics: [],
            },
          },
          daily_stickiness: {
            name: "daily_stickiness",
            type: "user",
            id: "daily_stickiness::user",
            description: "new description",
            isHidden: false,
          },
          Lineage: {
            name: "Example Experiment funnel metric",
            type: "funnel",
            id: "Alison funnel metric::funnel",
            description: "",
            isHidden: false,
            tags: [],
            lineage: {
              events: [],
              metrics: [
                "create_experiment::event_count",
                "start_experiment::event_count",
                "make_experiment_decision::event_count",
                "abandon_experiment::event_count",
                "delete_experiment::event_count",
              ],
            },
          },
        },
        properties: {
          id: {
            type: "string",
            description: "The formatted id used for queries",
          },
          name: {
            type: "string",
            description: "Metric name",
          },
          type: {
            type: "string",
            description: "Metric type",
          },
          description: {
            type: "string",
          },
          isHidden: {
            type: "boolean",
          },
          lineage: {
            type: "object",
            "x-stoplight": {
              id: "5udcl9v5tl1sl",
            },
            required: ["events", "metrics"],
            properties: {
              events: {
                type: "array",
                "x-stoplight": {
                  id: "ooigxtv1t43ya",
                },
                description: "Events used in the calculation of this metric",
                items: {
                  "x-stoplight": {
                    id: "16rl4kckiumx1",
                  },
                  type: "string",
                },
              },
              metrics: {
                type: "array",
                "x-stoplight": {
                  id: "rbr4k1f79f498",
                },
                description:
                  "Other metrics used in the calculation this metric",
                items: {
                  "x-stoplight": {
                    id: "b0n7gtx88jyyb",
                  },
                  type: "string",
                },
              },
            },
          },
        },
        required: ["id", "name", "type", "description", "isHidden", "lineage"],
      },
      MetricRead: {
        title: "MetricRead",
        "x-stoplight": {
          id: "lsp9kqne0cmc7",
        },
        type: "object",
        properties: {
          value: {
            type: "number",
            description: "Metric value for the given unit_type",
          },
          unit_type: {
            type: "string",
            description: "Which unit_type",
          },
          input_rows: {
            type: "integer",
            description: "row count for imported metric",
          },
          numerator: {
            type: "number",
            description: "Numerator of a ratio metric",
          },
          denominator: {
            type: "number",
            description: "Denominator of a ratio metric",
          },
        },
        required: ["value", "unit_type"],
      },
      MetricEventCriteria: {
        title: "MetricEventCriteria",
        "x-stoplight": {
          id: "ph4mf3fld3gnx",
        },
        type: "object",
        properties: {
          type: {
            "x-stoplight": {
              id: "ndh4brj6qo251",
            },
            type: "string",
            enum: ["value", "meta_data"],
          },
          key: {
            type: "string",
            "x-stoplight": {
              id: "fx6th90kgp4dr",
            },
          },
          condition: {
            "x-stoplight": {
              id: "dccvwzonek7o6",
            },
            type: "string",
            enum: [
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
              "after_exposure",
            ],
            description:
              "sql_filter, start_withs, ends_with, and after_exposure are only applicable in Warehouse Native",
          },
          values: {
            type: "array",
            "x-stoplight": {
              id: "xvhgypao06xar",
            },
            items: {
              "x-stoplight": {
                id: "ubplhjgfe36ew",
              },
              type: "string",
            },
          },
          nullVacuousOverride: {
            type: "boolean",
            "x-stoplight": {
              id: "5iqta37m0qnpz",
            },
          },
        },
      },
      MetricEvent: {
        type: "object",
        "x-stoplight": {
          id: "mm7ftpgp75a31",
        },
        properties: {
          name: {
            type: "string",
            "x-stoplight": {
              id: "re74p4rg8otoy",
            },
          },
          type: {
            type: "string",
            "x-stoplight": {
              id: "xmiikz0hsjeq4",
            },
          },
          metadataKey: {
            type: "string",
            "x-stoplight": {
              id: "24expnj75zwnp",
            },
          },
          criteria: {
            $ref: "#/components/schemas/MetricEventCriteria",
          },
        },
        title: "MetricEvent",
        description: "",
      },
      MetricEvents: {
        type: "object",
        properties: {
          name: {
            type: "string",
            "x-stoplight": {
              id: "hp1tu02mq9are",
            },
          },
          type: {
            "x-stoplight": {
              id: "99v6c4hwjlitj",
            },
            type: "string",
            enum: ["count", "count_distinct", "value", "metadata"],
          },
          metadataKey: {
            type: "string",
            "x-stoplight": {
              id: "5yavuvymeu1yi",
            },
          },
          criteria: {
            $ref: "#/components/schemas/MetricEventCriteria",
          },
        },
        "x-stoplight": {
          id: "fsu96u3r8ccdx",
        },
      },
      WarehuseNativeFunnelEvent: {
        title: "WarehuseNativeFunnelEvent",
        "x-stoplight": {
          id: "p2mmrob1vwxtk",
        },
        type: "object",
        properties: {
          criteria: {
            "x-stoplight": {
              id: "plt3l9nmmd4dd",
            },
            type: "array",
            items: {
              $ref: "#/components/schemas/MetricEventCriteria",
            },
          },
          metricSourceName: {
            type: "string",
            "x-stoplight": {
              id: "o9tb413gjq07y",
            },
          },
          name: {
            "x-stoplight": {
              id: "f0xj6fn8oxbth",
            },
            type: "string",
            description: "Step name",
            nullable: true,
          },
          sessionIdentifierField: {
            type: "string",
            "x-stoplight": {
              id: "i44iehk3b8fsq",
            },
            description:
              "Name of column which being used as session identifier. Funnel event with the same metric source have to have the same identifier column",
          },
        },
      },
    },
    responses: {},
    securitySchemes: {
      "STATSIG-API-KEY": {
        name: "STATSIG-API-KEY",
        type: "apiKey",
        in: "header",
      },
    },
  },
  security: [
    {
      "STATSIG-API-KEY": [],
    },
  ],
};
