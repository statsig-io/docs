module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "7rs45s44t9wib"
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
      "TargetApp": {
        "title": "TargetApp",
        "x-stoplight": {
          "id": "qb59m781tauwf"
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
              "id": "is2bm9pmi5o54"
            },
            "description": "Name of the target app"
          },
          "id": {
            "type": "string",
            "x-stoplight": {
              "id": "sbgkzkwzq1763"
            },
            "description": "ID of target app"
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
  "paths": {
    "/target_app": {
      "get": {
        "summary": "List Target Apps",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "description": "Array of existing holdouts",
                      "items": {
                        "$ref": "#/components/schemas/TargetApp"
                      }
                    }
                  },
                  "required": [
                    "message"
                  ]
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
                  "example": {
                    "value": {
                      "message": "Target apps listed successfully.",
                      "data": [
                        {
                          "name": "Client-apps"
                        },
                        {
                          "name": "Server-apps"
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
          "id": "9cruq6ob5vkhh"
        },
        "tags": [
          "Target Apps"
        ]
      },
      "patch": {
        "summary": "Bulk Assign Target App",
        "responses": {
          "201": {
            "description": "Updated",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Holdout updated successfully.",
                      "data": {
                        "id": "a_holdout",
                        "isEnabled": true,
                        "description": "UPDATED summary of what this holdout does",
                        "idType": "userID",
                        "isGlobal": true,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "passPercentage": 10,
                        "gateIDs": [],
                        "experimentIDs": [],
                        "layerIDs": [
                          "mynewlayer"
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "example": {
                  "message": "Gate created successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
                  }
                },
                "examples": {
                  "Example": {
                    "value": {
                      "message": "Target apps updated successfully."
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
                      "message": "Not Found Exception",
                      "errors": [
                        {
                          "property": "gateIDs",
                          "errorMessage": "The following Gate IDs could not be found: [a_gate]"
                        }
                      ]
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
                  "Gate not found": {
                    "value": {
                      "status": 404,
                      "message": "Gates with IDs [not a gate] do not exist"
                    }
                  },
                  "Target app not found": {
                    "value": {
                      "status": 404,
                      "message": "Target apps with IDs [Not an App] do not exist"
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
                "x-examples": {
                  "example-1": {
                    "name": "a holdout",
                    "description": "helpful summary of what this holdout does",
                    "idType": "userID"
                  }
                },
                "properties": {
                  "targetApps": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "4g7yynkua72lq"
                    },
                    "description": "List of target apps to be assigned to following configs",
                    "items": {
                      "x-stoplight": {
                        "id": "wo9qazrx33qnk"
                      },
                      "type": "string"
                    }
                  },
                  "gates": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "s1dnlrs3krdi4"
                    },
                    "description": "Gate IDs assigned new target appIDs ",
                    "items": {
                      "x-stoplight": {
                        "id": "ty2jluwfcgl4k"
                      },
                      "type": "string"
                    }
                  },
                  "experiments": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "4h0j040vqis6q"
                    },
                    "description": "Experiments IDs assigned new target appIDs",
                    "items": {
                      "x-stoplight": {
                        "id": "qesw17qmqkgfo"
                      },
                      "type": "string"
                    }
                  },
                  "dynamicConfigs": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "xk3nwr7uzqo7o"
                    },
                    "description": "Dynamic Config IDs assigned new target appIDs",
                    "items": {
                      "x-stoplight": {
                        "id": "cyw7q969e3bl3"
                      },
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "targetApps"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "targetApps": [
                      "Target App 1",
                      "Target App 2"
                    ],
                    "gates": [
                      "gate to assign"
                    ],
                    "dynamicConfigs": [
                      "dynamic config to assign"
                    ],
                    "experiments": [
                      "experiment to assign"
                    ]
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "q3elz42pbferd"
        },
        "description": "Assign configs to multiple target apps at once",
        "tags": [
          "Target Apps"
        ]
      },
      "parameters": [],
      "post": {
        "summary": "Create Target App",
        "tags": [
          "Target Apps"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "x-stoplight": {
                        "id": "gc7nk1uk1mrly"
                      },
                      "type": "string",
                      "example": "Target app created successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/TargetApp"
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "post-target_app",
        "x-stoplight": {
          "id": "bdx7v80njb1jh"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "onztxfocbim86"
                    },
                    "description": "Name of target app"
                  },
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "12rxomfb0qe6l"
                    },
                    "description": "Description of target app"
                  },
                  "gates": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "ivoh7b9zbu1hl"
                    },
                    "description": "Feature gate IDs assigned the new target appID",
                    "items": {
                      "x-stoplight": {
                        "id": "us8bkp58nsl8u"
                      },
                      "type": "string"
                    }
                  },
                  "dynamicConfigs": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "bp925ps9byixu"
                    },
                    "description": "Dynamic config IDs assigned the new target appID",
                    "items": {
                      "x-stoplight": {
                        "id": "qx4boulkzdgso"
                      },
                      "type": "string"
                    }
                  },
                  "experiments": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "wdyla17ecvvr9"
                    },
                    "description": "Experiment IDs assigned the new target appID",
                    "items": {
                      "x-stoplight": {
                        "id": "bw6oyprwp0cte"
                      },
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "name": "Target app 1",
                    "description": "Example description",
                    "gates": [
                      "Example gate"
                    ],
                    "dynamicConfigs": [
                      "Example dynamic config"
                    ],
                    "experiments": [
                      "Example experiment"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    "/target_app/{id}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "id",
          "in": "path",
          "required": true
        }
      ],
      "delete": {
        "summary": "Delete Target App",
        "operationId": "delete-target_app-id",
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
                        "id": "29z2uzx20275u"
                      },
                      "example": "Target app deleted successfully"
                    }
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "sk4d7u54projq"
        },
        "tags": [
          "Target Apps"
        ]
      }
    }
  },
  "tags": [
    {
      "name": "Target Apps"
    }
  ]
}