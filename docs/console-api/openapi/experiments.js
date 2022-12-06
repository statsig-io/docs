module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "e0352ead0cc67"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0.0",
    "description": "Experiment endpoint"
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
    "schemas": {
      "experiment_override": {
        "type": "object",
        "x-examples": {
          "example-1": {
            "passingUserIDs": [
              "passing-user"
            ],
            "failingUserIDs": [
              "failing-user"
            ]
          }
        },
        "description": "Forces users which pass a gate or are in a segment into the desired group.",
        "title": "",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "segment",
              "gate"
            ]
          },
          "id": {
            "type": "string",
            "description": "The id of the segment or gate"
          },
          "groupID": {
            "type": "string",
            "description": "The experiment group which user will be forced into"
          }
        },
        "required": [
          "type",
          "id",
          "groupID"
        ]
      },
      "description": {
        "title": "description",
        "x-stoplight": {
          "id": "qvkg176q352su"
        },
        "type": "string",
        "description": "A helpful summary of what this experiment does",
        "x-examples": {
          "example-1": "A helpful summary of what this experiment does"
        }
      },
      "id": {
        "title": "id",
        "x-stoplight": {
          "id": "du660arabb32i"
        },
        "type": "string",
        "description": "The name that was originally given to the experiment on creation but formatted as an ID (\"A Experiment\" -> \"a_experiment\")"
      },
      "idType": {
        "title": "idType",
        "x-stoplight": {
          "id": "c97b5rk85shom"
        },
        "type": "string",
        "description": "The type of ID which the experiment is based on.",
        "x-examples": {
          "example-1": "userID"
        }
      },
      "status": {
        "title": "status",
        "x-stoplight": {
          "id": "8eyruln4wbga4"
        },
        "type": "string",
        "description": "The current status of the experiment.",
        "enum": [
          "setup",
          "active",
          "decision_made"
        ]
      },
      "hypothesis": {
        "title": "hypothesis",
        "x-stoplight": {
          "id": "r3r3izlcpph5h"
        },
        "type": "string",
        "description": "A statement that will be tested by this experiment."
      },
      "alloation": {
        "title": "alloation",
        "x-stoplight": {
          "id": "hkhfy0yu59ktg"
        },
        "type": "number",
        "description": "Percent of layer allocated to this experiment",
        "minimum": 0,
        "maximum": 100
      },
      "duration": {
        "title": "duration",
        "x-stoplight": {
          "id": "od90nv9jwan2n"
        },
        "type": "integer",
        "description": "How long the experiment should last in days",
        "minimum": 0
      },
      "targetingGateID": {
        "title": "targetingGateID",
        "x-stoplight": {
          "id": "od90nv9jwan2n"
        },
        "type": "string",
        "description": "Restrict your experiment to users passing the selected feature gate."
      },
      "defaultConfidenceInterval": {
        "title": "defaultConfidenceInterval",
        "x-stoplight": {
          "id": "od90nv9jwan2n"
        },
        "type": "string",
        "description": "Default error margin used for results",
        "enum": [
          "80",
          "90",
          "95",
          "98",
          "99"
        ]
      },
      "bonferroniCorrection": {
        "title": "bonferroniCorrection",
        "x-stoplight": {
          "id": "od90nv9jwan2n"
        },
        "type": "boolean",
        "description": "Is Bonferroni correction applied?"
      },
      "groups": {
        "title": "groups",
        "x-stoplight": {
          "id": "od90nv9jwan2n"
        },
        "type": "array",
        "description": "The test groups for your experiment",
        "items": {
          "type": "object",
          "description": "Group object",
          "properties": {
            "name": {
              "type": "string",
              "description": "name of the group"
            },
            "size": {
              "type": "number",
              "description": "What percentage of traffic should be passed into this group",
              "minimum": 0,
              "maximum": 100
            },
            "parameterValues": {
              "type": "object"
            }
          },
          "required": [
            "name",
            "size",
            "parameterValues"
          ]
        }
      },
      "experiment_id_override": {
        "type": "object",
        "x-examples": {
          "example-1": {
            "groupID": "Control",
            "ids": [
              "updated_id_list"
            ]
          }
        },
        "properties": {
          "groupID": {
            "type": "string",
            "description": "The experiment group which user will be forced into"
          },
          "ids": {
            "type": "array",
            "description": "The userID(s) to force into an experiment group",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "groupID",
          "ids"
        ],
        "description": "Forces specific users into the desired group."
      }
    },
    "responses": {
      "experiment_404.json": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "x-examples": {
                "example-1": {
                  "status": 404,
                  "message": "Experiment not found."
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
                  "status": 404,
                  "message": "Experiment not found."
                }
              }
            }
          }
        }
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/experiments": {
      "post": {
        "tags": [
          "Experiments"
        ],
        "summary": "Create Experiment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "name": {
                      "type": "string",
                      "description": "The display name to give the new experiment"
                    },
                    "description": {
                      "type": "string",
                      "description": "A summary of what this experiment does"
                    }
                  }
                },
                "description": "Experiment Create Contract",
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "The name of the new experiment.",
                    "example": "A experiment"
                  },
                  "description": {
                    "type": "string",
                    "description": "A description of the new experiment.",
                    "example": "A helpful summary of what this experiment does"
                  },
                  "idType": {
                    "type": "string",
                    "description": "The idType the experiment will be performed on.",
                    "example": "userID"
                  },
                  "layerID": {
                    "type": "string",
                    "description": "Which layer to place the experiment into.",
                    "example": "layer_1"
                  }
                },
                "required": [
                  "name"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "name": "a_experiment",
                    "description": "helpful summary of what this experiment does",
                    "idType": "userID",
                    "layerID": "a_layer"
                  }
                }
              }
            },
            "application/xml": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "name": {
                      "type": "string",
                      "description": "The display name to give the new experiment"
                    },
                    "description": {
                      "type": "string",
                      "description": "A summary of what this experiment does"
                    }
                  }
                },
                "properties": {
                  "name": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Name of the new experiment"
                      },
                      "description": {
                        "type": "string",
                        "description": "A summary of this experiment purpose"
                      }
                    }
                  }
                }
              }
            }
          },
          "description": "Create new Experiment"
        },
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
                      "$ref": "../models/experiment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiment created successfully.",
                      "data": {
                        "id": "a_experiment",
                        "description": "helpful summary of what this experiment does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "4FKF0sUbi1D7xZFW5vcHWB",
                        "idType": "userID",
                        "status": "setup",
                        "layerID": "a_layer",
                        "hypothesis": "",
                        "primaryMetrics": [],
                        "secondaryMetrics": [],
                        "groups": [
                          {
                            "name": "Control",
                            "size": 50,
                            "parameterValues": {}
                          },
                          {
                            "name": "Test",
                            "size": 50,
                            "parameterValues": {}
                          }
                        ],
                        "allocation": 0,
                        "duration": 14,
                        "targetingGateID": "",
                        "defaultConfidenceInterval": "95",
                        "bonferroniCorrection": false,
                        "tags": [
                          "* Core"
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
                    "example-1": {
                      "status": {
                        "type": "number",
                        "description": "Status Code"
                      },
                      "message": {
                        "type": "string",
                        "description": "A summary of what went wrong"
                      }
                    }
                  },
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "error": {
                      "type": "array",
                      "description": "A list of errors that have occured with the request",
                      "items": {
                        "type": "object",
                        "properties": {
                          "property": {
                            "type": "string",
                            "description": "Which property of the request body is invalid"
                          },
                          "error": {
                            "type": "string",
                            "description": "A description of the problem"
                          }
                        }
                      }
                    }
                  },
                  "required": [
                    "status",
                    "message"
                  ]
                },
                "examples": {
                  "example-0": {
                    "summary": "400 Name Used",
                    "value": {
                      "status": 400,
                      "message": "Name is already in use"
                    }
                  },
                  "example-1": {
                    "summary": "400 Missing Field",
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "name",
                          "errorMessage": "Required"
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
        "description": "Create a new experiment"
      },
      "get": {
        "summary": "Read All Experiments",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Message": {
                      "type": "string",
                      "description": "The status of the request"
                    },
                    "data": {
                      "type": "array",
                      "description": "An array of existing experiment objects",
                      "items": {
                        "$ref": "../models/experiment.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiments listed successfully.",
                      "data": [
                        {
                          "id": "a_experiment",
                          "description": "A helpful summary of what this experiment does",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "79djvKHavV9djhKHlVCeu",
                          "idType": "userID",
                          "status": "active",
                          "layerID": "test_layer_with_holdout",
                          "hypothesis": "",
                          "primaryMetrics": [],
                          "secondaryMetrics": [],
                          "groups": [
                            {
                              "name": "Control",
                              "size": 50,
                              "parameterValues": {
                                "key": "1"
                              }
                            },
                            {
                              "name": "Test",
                              "size": 50,
                              "parameterValues": {
                                "key": "0"
                              }
                            }
                          ],
                          "allocation": 100,
                          "targetingGateID": "test_public",
                          "defaultConfidenceInterval": "95",
                          "bonferroniCorrection": false,
                          "tags": [
                            "* Core"
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
        "operationId": "",
        "description": "Get a list of all experiments",
        "x-code-samples": [
          {
            "lang": "cURL",
            "label": "cURL",
            "source": "curl --request GET 'https://statsigapi.net/console/v1/experiments' --header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'"
          }
        ],
        "tags": [
          "Experiments"
        ]
      },
      "parameters": []
    },
    "/experiments/{experiment_id}": {
      "get": {
        "tags": [
          "Experiments"
        ],
        "summary": "Read Single Experiment",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Experiment read successfully.",
                      "data": {
                        "id": "a_experiment",
                        "isEnabled": true,
                        "description": "helpful summary of what this experiment does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              },
                              {
                                "type": "user_id",
                                "targetValue": [
                                  "111",
                                  "222"
                                ],
                                "operator": "any"
                              },
                              {
                                "type": "email",
                                "targetValue": [
                                  "@outlook.com",
                                  "@gmail.com"
                                ],
                                "operator": "str_contains_any"
                              },
                              {
                                "type": "email",
                                "operator": "is_null"
                              },
                              {
                                "type": "custom_field",
                                "targetValue": 31,
                                "operator": "gt",
                                "field": "age"
                              },
                              {
                                "type": "app_version",
                                "targetValue": "1.1.1",
                                "operator": "version_gt"
                              },
                              {
                                "type": "browser_name",
                                "targetValue": [
                                  "Android",
                                  "Chrome"
                                ],
                                "operator": "any"
                              },
                              {
                                "type": "browser_version",
                                "targetValue": [
                                  "94.0.4606.81",
                                  "94.0.4606.92"
                                ],
                                "operator": "any"
                              },
                              {
                                "type": "os_name",
                                "targetValue": [
                                  "Android",
                                  "Windows"
                                ],
                                "operator": "none"
                              },
                              {
                                "type": "os_version",
                                "targetValue": "11.0.0",
                                "operator": "version_lte"
                              },
                              {
                                "type": "country",
                                "targetValue": [
                                  "NZ",
                                  "US"
                                ],
                                "operator": "any"
                              },
                              {
                                "type": "passes_experiment",
                                "targetValue": "my_experiment_2"
                              },
                              {
                                "type": "fails_experiment",
                                "targetValue": "my_experiment_2"
                              },
                              {
                                "type": "time",
                                "targetValue": 1643070357193,
                                "operator": "after"
                              },
                              {
                                "type": "environment_tier",
                                "targetValue": [
                                  "production"
                                ],
                                "operator": "any"
                              },
                              {
                                "type": "passes_segment",
                                "targetValue": "growth_org"
                              },
                              {
                                "type": "fails_segment",
                                "targetValue": "growth_org"
                              },
                              {
                                "type": "ip_address",
                                "targetValue": [
                                  "1.1.1.1",
                                  "8.8.8.8"
                                ],
                                "operator": "any"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/experiment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiment read successfully.",
                      "data": {
                        "id": "a_experiment",
                        "description": "",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "4FKF0sUbi1D7xZFW5vcHWB",
                        "idType": "userID",
                        "status": "setup",
                        "launchedGroupID": null,
                        "layerID": "statsig::a_experiment_layer",
                        "hypothesis": "",
                        "primaryMetrics": [],
                        "secondaryMetrics": [],
                        "groups": [
                          {
                            "name": "Control",
                            "id": "4HbgLdfqlIeN3sHkyMG1qC",
                            "size": 50,
                            "parameterValues": {}
                          },
                          {
                            "name": "Test",
                            "size": 50,
                            "parameterValues": {}
                          }
                        ],
                        "allocation": 100,
                        "duration": 14,
                        "targetingGateID": "",
                        "defaultConfidenceInterval": "95",
                        "bonferroniCorrection": false,
                        "tags": [
                          "* Core"
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
                  "example-1": {
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
            "$ref": "#/components/responses/experiment_404.json"
          }
        },
        "description": "Read data from a single experiment ",
        "parameters": []
      },
      "post": {
        "tags": [
          "Experiments"
        ],
        "summary": "Fully Update Experiment",
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
                      "$ref": "../models/experiment.json"
                    }
                  }
                },
                "example": {
                  "message": "Experiment updated successfully.",
                  "data": {
                    "id": "a_experiment",
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
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "string",
                      "data": {
                        "id": "a_experiment",
                        "description": "a helpful summary of what this experiment does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "f0JAV9dd7KF0sUbi1DHWB",
                        "idType": "userID",
                        "status": "setup",
                        "layerID": "layer1",
                        "hypothesis": "Does 1 or 0 work better?",
                        "primaryMetrics": [
                          {
                            "name": "l14",
                            "type": "user"
                          }
                        ],
                        "secondaryMetrics": [
                          {
                            "name": "mau_28d",
                            "type": "user"
                          }
                        ],
                        "groups": [
                          {
                            "name": "group1",
                            "size": 50,
                            "parameterValues": {
                              "key": 1
                            }
                          },
                          {
                            "name": "gruop2",
                            "size": 50,
                            "parameterValues": {
                              "key": 0
                            }
                          }
                        ],
                        "allocation": 50.46,
                        "duration": 14,
                        "targetingGateID": "a_gate",
                        "defaultConfidenceInterval": "95",
                        "bonferroniCorrection": false,
                        "tags": []
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
          },
          "404": {
            "$ref": "#/components/responses/experiment_404.json"
          }
        },
        "description": "Update all properties of the experiment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "description": {
                    "$ref": "#/components/schemas/description"
                  },
                  "idType": {
                    "$ref": "#/components/schemas/idType"
                  },
                  "status": {
                    "$ref": "../models/status.json"
                  },
                  "hypothesis": {
                    "$ref": "#/components/schemas/hypothesis"
                  },
                  "primaryMetrics": {
                    "type": "array",
                    "description": "Main metrics needed to evaluate your hypothesis",
                    "items": {
                      "$ref": "./experiment_metric.json"
                    }
                  },
                  "secondaryMetrics": {
                    "type": "array",
                    "description": "Additional metric you may want to monitor that might impact the analysis or final decision of the experiment",
                    "items": {
                      "$ref": "./experiment_metric.json"
                    }
                  },
                  "groups": {
                    "type": "array",
                    "description": "The test groups for your experiment",
                    "items": {
                      "$ref": "#/components/schemas/groups"
                    }
                  },
                  "allocation": {
                    "$ref": "#/components/schemas/alloation"
                  },
                  "duration": {
                    "$ref": "#/components/schemas/duration"
                  },
                  "targetingGateID": {
                    "$ref": "#/components/schemas/targetingGateID"
                  },
                  "defaultConfidenceInterval": {
                    "$ref": "#/components/schemas/defaultConfidenceInterval"
                  },
                  "bonferroniCorrection": {
                    "$ref": "#/components/schemas/bonferroniCorrection"
                  }
                },
                "required": [
                  "description",
                  "idType",
                  "status",
                  "hypothesis",
                  "primaryMetrics",
                  "secondaryMetrics",
                  "groups",
                  "allocation",
                  "duration",
                  "targetingGateID",
                  "defaultConfidenceInterval",
                  "bonferroniCorrection"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "description": "Updated summary of what this experiment does",
                    "idType": "userID",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "66wvNB1zril4QQWFOGvfTP",
                    "status": "setup",
                    "hypothesis": "Updated hypothesis",
                    "launchedGroupID": null,
                    "startTime": null,
                    "endTime": null,
                    "layerID": null,
                    "primaryMetrics": [],
                    "secondaryMetrics": [],
                    "groups": [
                      {
                        "name": "group1",
                        "id": "4HbgLdfqlIeN3sHkyMG1qC",
                        "size": 50,
                        "parameterValues": {
                          "key": 1
                        }
                      },
                      {
                        "name": "group2",
                        "id": "4HbgLeUsO0ohmSfg9UBEJE",
                        "size": 50,
                        "parameterValues": {}
                      }
                    ],
                    "allocation": 50,
                    "duration": 28,
                    "targetingGateID": "a_gate",
                    "defaultConfidenceInterval": "90",
                    "bonferroniCorrection": false
                  }
                }
              }
            }
          },
          "description": "Update Experiment"
        },
        "parameters": []
      },
      "delete": {
        "tags": [
          "Experiments"
        ],
        "summary": "Delete Experiment",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Experiment deleted successfully."
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiment deleted successfully."
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
          },
          "404": {
            "$ref": "#/components/responses/experiment_404.json"
          }
        },
        "description": "Delete a experiment",
        "parameters": []
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_experiment"
          },
          "name": "experiment_id",
          "in": "path",
          "required": true,
          "description": "experiment ID to query"
        }
      ],
      "patch": {
        "summary": "Partially Update Experiment",
        "operationId": "patch-experiments-experiment_id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Experiment updated successfully.",
                      "data": {
                        "id": "a_experiment",
                        "description": "updated summary",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "idType": "userID",
                        "status": "setup",
                        "layerID": "statsig::a_experiment_layer",
                        "hypothesis": "updated hypothesis",
                        "primaryMetrics": [],
                        "secondaryMetrics": [],
                        "groups": [
                          {
                            "name": "group1",
                            "size": 50,
                            "parameterValues": {
                              "key": 1
                            }
                          },
                          {
                            "name": "gruop2",
                            "size": 50,
                            "parameterValues": {}
                          }
                        ],
                        "allocation": 100,
                        "duration": 14,
                        "targetingGateID": "",
                        "defaultConfidenceInterval": "95",
                        "bonferroniCorrection": true
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/experiment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "string",
                      "data": {
                        "id": "a_experiment",
                        "description": "a helpful summary of what this experiment does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "f0JAV9dd7KF0sUbi1DHWB",
                        "idType": "userID",
                        "status": "setup",
                        "layerID": "layer1",
                        "hypothesis": "Does 1 or 0 work better?",
                        "primaryMetrics": [
                          {
                            "name": "l14",
                            "type": "user"
                          }
                        ],
                        "secondaryMetrics": [
                          {
                            "name": "mau_28d",
                            "type": "user"
                          }
                        ],
                        "groups": [
                          {
                            "name": "group1",
                            "size": 50,
                            "parameterValues": {
                              "key": 1
                            }
                          },
                          {
                            "name": "gruop2",
                            "size": 50,
                            "parameterValues": {
                              "key": 0
                            }
                          }
                        ],
                        "allocation": 50.46,
                        "duration": 14,
                        "targetingGateID": "a_gate",
                        "defaultConfidenceInterval": "95",
                        "bonferroniCorrection": false,
                        "tags": []
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
          },
          "404": {
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 404,
                      "message": "Experiment not found."
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
                      "status": 404,
                      "message": "Experiment not found."
                    }
                  }
                }
              }
            }
          }
        },
        "description": "Update selected properties of the experiment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "id": "a_experiment",
                    "description": "updated summary",
                    "idType": "userID",
                    "layerID": "statsig::a_layer",
                    "hypothesis": "updated hypothesis",
                    "keyMetrics": [
                      {
                        "id": "my_custom_metric",
                        "type": "event_count_custom"
                      }
                    ],
                    "secondaryMetrics": [],
                    "groups": [
                      {
                        "name": "group1",
                        "size": 50,
                        "parameterValues": {
                          "key": 1
                        }
                      },
                      {
                        "name": "gruop2",
                        "size": 50,
                        "parameterValues": {}
                      }
                    ],
                    "allocation": 100,
                    "duration": 14,
                    "targetingGateID": "",
                    "defaultConfidenceInterval": "95",
                    "bonferroniCorrection": true
                  }
                },
                "properties": {
                  "id": {
                    "$ref": "#/components/schemas/id"
                  },
                  "description": {
                    "$ref": "#/components/schemas/description"
                  },
                  "idType": {
                    "$ref": "#/components/schemas/idType"
                  },
                  "hypothesis": {
                    "$ref": "#/components/schemas/hypothesis"
                  },
                  "keyMetrics": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/experiment_metric.json"
                    }
                  },
                  "secondaryMetrics": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/experiment_metric.json"
                    }
                  },
                  "groups": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/groups"
                    }
                  },
                  "allocation": {
                    "$ref": "#/components/schemas/alloation"
                  },
                  "duration": {
                    "$ref": "#/components/schemas/duration"
                  },
                  "targetingGateID": {
                    "$ref": "#/components/schemas/targetingGateID"
                  },
                  "defaultConfidenceInterval": {
                    "$ref": "#/components/schemas/defaultConfidenceInterval"
                  },
                  "bonferroniCorrection": {
                    "$ref": "#/components/schemas/bonferroniCorrection"
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "id": "a_experiment",
                    "description": "updated summary",
                    "idType": "userID",
                    "status": "setup",
                    "launchedGroupID": null,
                    "startTime": null,
                    "endTime": null,
                    "layerID": "statsig::a_layer",
                    "hypothesis": "updated hypothesis",
                    "keyMetrics": [
                      {
                        "id": "my_custom_metric",
                        "type": "event_count_custom"
                      }
                    ],
                    "secondaryMetrics": [],
                    "groups": [
                      {
                        "name": "group1",
                        "id": "4HbgLdfqlIeN3sHkyMG1qC",
                        "size": 50,
                        "parameterValues": {
                          "key": 1
                        }
                      },
                      {
                        "name": "gruop2",
                        "id": "4HbgLeUsO0ohmSfg9UBEJE",
                        "size": 50,
                        "parameterValues": {}
                      }
                    ],
                    "allocation": 100,
                    "duration": 14,
                    "targetingGateID": "",
                    "defaultConfidenceInterval": "95",
                    "bonferroniCorrection": true
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Experiments"
        ]
      }
    },
    "/experiments/{experiment_id}/overrides": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_experiment"
          },
          "name": "experiment_id",
          "in": "path",
          "required": true,
          "description": "Experiment ID to query"
        }
      ],
      "get": {
        "summary": "Get Experiment Overrides",
        "tags": [
          "Experiments"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Experiment Overrides read successfully.",
                      "data": {
                        "overrides": [
                          {
                            "groupID": "4IfTisAzh1ieQ5E1rc9kK2",
                            "name": "b_gate",
                            "type": "gate"
                          },
                          {
                            "groupID": "4IfTiqVwOJ8KwG65Q4dHr0",
                            "name": "",
                            "type": "segment"
                          },
                          {
                            "groupID": "4IfTiqVwOJ8KwG65Q4dHr0",
                            "name": "a_gate",
                            "type": "gate"
                          }
                        ],
                        "userIDOverrides": [
                          {
                            "ids": [
                              "a_user",
                              "b_user"
                            ],
                            "groupID": "4IfTisAzh1ieQ5E1rc9kK2"
                          },
                          {
                            "ids": [
                              "c_user"
                            ],
                            "groupID": "4IfTiqVwOJ8KwG65Q4dHr0"
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "overrides": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/experiment_override"
                          }
                        },
                        "userIDOverrides": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/experiment_id_override"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiment Overrides read successfully.",
                      "data": {
                        "overrides": [
                          {
                            "groupID": "Control",
                            "name": "a_gate",
                            "type": "gate"
                          },
                          {
                            "groupID": "test",
                            "name": "a_segment",
                            "type": "segment"
                          }
                        ],
                        "userIDOverrides": [
                          {
                            "ids": [
                              "updated_id_list"
                            ],
                            "groupID": "Control"
                          },
                          {
                            "ids": [
                              "updated_id_lists"
                            ],
                            "groupID": "Test"
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
                  "example-1": {
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
            "$ref": "#/components/responses/experiment_404.json"
          }
        },
        "operationId": "get-experiments-experiment_id-overrides",
        "description": ""
      },
      "post": {
        "summary": "Update Experiment Overrides",
        "operationId": "post-experiments-experiment_id-overrides",
        "responses": {
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Experiment Overrides updated successfully.",
                      "data": {
                        "overrides": [
                          {
                            "type": "segment",
                            "name": "a_segment",
                            "groupID": "Control"
                          },
                          {
                            "type": "gate",
                            "name": "a_gate",
                            "groupID": "Test"
                          }
                        ],
                        "userIDOverrides": [
                          {
                            "groupID": "Control",
                            "ids": [
                              "updated_id_list"
                            ]
                          },
                          {
                            "groupID": "Test",
                            "ids": [
                              "updated_id_lists"
                            ]
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "overrides": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/experiment_override"
                          }
                        },
                        "userIDOverrides": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/experiment_id_override"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Experiment Overrides updated successfully.",
                      "data": {
                        "overrides": [
                          {
                            "type": "segment",
                            "name": "a_segment",
                            "groupID": "Control"
                          },
                          {
                            "type": "gate",
                            "name": "a_gate",
                            "groupID": "Test"
                          }
                        ],
                        "userIDOverrides": [
                          {
                            "groupID": "Control",
                            "ids": [
                              "updated_user1"
                            ]
                          },
                          {
                            "groupID": "Test",
                            "ids": [
                              "updated_user2"
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
                  "example-1": {
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
            "$ref": "#/components/responses/experiment_404.json"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "overrides": [
                      {
                        "type": "segment",
                        "name": "a_segment",
                        "groupID": "Control"
                      },
                      {
                        "type": "gate",
                        "name": "a_gate",
                        "groupID": "Test"
                      }
                    ],
                    "userIDOverrides": [
                      {
                        "groupID": "Control",
                        "ids": [
                          "updated_id_list"
                        ]
                      },
                      {
                        "groupID": "Test",
                        "ids": [
                          "updated_id_lists"
                        ]
                      }
                    ]
                  }
                },
                "properties": {
                  "overrides": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/experiment_override"
                    }
                  },
                  "userIDOverrides": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/experiment_id_override"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "overrides": [
                      {
                        "type": "segment",
                        "id": "a_segment",
                        "groupID": "Control"
                      },
                      {
                        "type": "gate",
                        "id": "a_gate",
                        "groupID": "Test"
                      }
                    ],
                    "userIDOverrides": [
                      {
                        "groupID": "Control",
                        "ids": [
                          "updated_control_id_list"
                        ]
                      },
                      {
                        "groupID": "Test",
                        "ids": [
                          "updated_test_id_list"
                        ]
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Experiments"
        ],
        "description": ""
      }
    }
  }
}