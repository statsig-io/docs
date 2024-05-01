module.exports = {
  "openapi": "3.0.0",
  "info": {
    "title": "https://statsigapi.net/console/v1",
    "version": "1.0.0",
    "description": "Layer endpoint"
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
    "schemas": {}
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/layers": {
      "post": {
        "summary": "Create Layer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "name": "a layer",
                    "description": "helpful summary of what this layer does"
                  }
                },
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "The name of this layer"
                  },
                  "description": {
                    "type": "string",
                    "description": "A helpful summary of what this layer does."
                  },
                  "targetApps": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "cwnq61sn0qnt0"
                    },
                    "description": "List of target apps",
                    "items": {
                      "x-stoplight": {
                        "id": "czilu7axb3foh"
                      },
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "name": "A Layer",
                    "description": "helpful summary of what this layer does"
                  }
                }
              }
            }
          },
          "description": ""
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layer created successfully.",
                      "data": {
                        "id": "a_layer",
                        "description": "helpful summary of what this layer does",
                        "idType": "userID",
                        "isImplicitLayer": false,
                        "parameters": []
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layer created successfully."
                    },
                    "data": {
                      "$ref": "../models/layer.json"
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
                "examples": {}
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
                      "status": 400,
                      "message": "Layer name is already in use"
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
                      "message": "Layer name is already in use"
                    }
                  },
                  "example-2": {
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
        "description": "",
        "tags": [
          "Layers"
        ]
      },
      "get": {
        "summary": "Read All Layers",
        "operationId": "get-layers",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layers listed successfully.",
                      "data": [
                        {
                          "id": "mynewlayer",
                          "isImplicitLayer": false,
                          "description": "ghjk",
                          "parameters": [
                            {
                              "name": "g",
                              "type": "number",
                              "defaultValue": 23432
                            }
                          ]
                        },
                        {
                          "id": "statsig::d experiment_layer",
                          "isImplicitLayer": true,
                          "description": "",
                          "parameters": []
                        },
                        {
                          "id": "statsig::A experiment_layer",
                          "isImplicitLayer": true,
                          "description": "",
                          "parameters": []
                        },
                        {
                          "id": "statsig::b experiment_layer",
                          "isImplicitLayer": true,
                          "description": "",
                          "parameters": []
                        },
                        {
                          "id": "statsig::a_experiment_layer",
                          "isImplicitLayer": true,
                          "description": "",
                          "parameters": []
                        },
                        {
                          "id": "a_layer",
                          "isImplicitLayer": false,
                          "description": "updated description",
                          "parameters": [
                            {
                              "name": "a_name",
                              "type": "boolean",
                              "defaultValue": true
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layers listed successfully."
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "$ref": "../models/layer.json"
                      }
                    }
                  }
                },
                "examples": {}
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
        "description": "Get a list of all Layers",
        "tags": [
          "Layers"
        ]
      }
    },
    "/layers/{layer_id}": {
      "post": {
        "summary": "Fully Update Layer",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "description": "updated description",
                    "parameters": [
                      {
                        "name": "a_name",
                        "type": "boolean",
                        "defaultValue": "asdf"
                      }
                    ]
                  }
                },
                "properties": {
                  "description": {
                    "type": "string",
                    "description": "Updated description"
                  },
                  "parameters": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/layer_parameter.json"
                    }
                  },
                  "targetApps": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "61tti5i7peynn"
                    },
                    "description": "List of target apps",
                    "items": {
                      "x-stoplight": {
                        "id": "cgrbc3gkct5x2"
                      },
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "description": "new description",
                    "parameters": [
                      {
                        "name": "a_parameter",
                        "type": "boolean",
                        "defaultValue": true
                      },
                      {
                        "name": "b_parameter",
                        "type": "number",
                        "defaultValue": 123
                      },
                      {
                        "name": "c_parameter",
                        "type": "string",
                        "defaultValue": "this is a string"
                      },
                      {
                        "name": "d_parameter",
                        "type": "array",
                        "defaultValue": []
                      },
                      {
                        "name": "e_parameter",
                        "type": "object",
                        "defaultValue": {
                          "key": "value"
                        }
                      }
                    ]
                  }
                }
              }
            }
          },
          "description": ""
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layer updated successfully.",
                      "data": {
                        "id": "a_layer",
                        "isImplicitLayer": false,
                        "description": "updated description",
                        "parameters": [
                          {
                            "name": "a_name",
                            "type": "boolean",
                            "defaultValue": true
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layer updated successfully."
                    },
                    "data": {
                      "$ref": "../models/layer.json"
                    }
                  }
                },
                "example": {
                  "message": "Gate updated successfully.",
                  "data": {
                    "id": "a_gate",
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
                "examples": {}
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
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": {
                        "property": "parameter",
                        "errorMessage": "Parameter(s) missing: [a_parameter, b_parameter, c_parameter, d_parameter, e_parameter]"
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
                    "errors": {
                      "type": "object",
                      "properties": {
                        "property": {
                          "type": "string"
                        },
                        "errorMessage": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": {
                        "property": "parameters",
                        "errorMessage": "Parameter(s) missing: [a_parameter, b_parameter]"
                      }
                    }
                  },
                  "example-2": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "description",
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
                      "message": "Layer not found."
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
                      "message": "Layer not found."
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Layers"
        ]
      },
      "delete": {
        "summary": "Delete Layer",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {},
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layer deleted successfully."
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layer deleted successfully."
                    }
                  }
                },
                "example": {
                  "message": "Gate deleted successfully."
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Layer deleted successfully."
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
                      "status": 400,
                      "message": "Layer cannot be deleted with experiments still on it"
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
                      "message": "Layer cannot be deleted with experiments still on it"
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
                      "message": "Layer not found."
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
                      "message": "Layer not found."
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Layers"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_layer"
          },
          "name": "layer_id",
          "in": "path",
          "required": true,
          "description": "The id of the layer to query"
        }
      ],
      "get": {
        "summary": "Read Single Layer",
        "operationId": "get-layers-layer_id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layer read successfully.",
                      "data": {
                        "id": "a_layer",
                        "isImplicitLayer": false,
                        "description": "updated description",
                        "parameters": [
                          {
                            "name": "a_name",
                            "type": "string",
                            "defaultValue": "asdf"
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layer read successfully."
                    },
                    "data": {
                      "$ref": "../models/layer.json"
                    }
                  }
                },
                "examples": {}
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
                      "message": "Layer not found."
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
                      "message": "Layer not found."
                    }
                  }
                }
              }
            }
          }
        },
        "description": "Get a single Layer",
        "tags": [
          "Layers"
        ]
      },
      "patch": {
        "summary": "Partially Update Layer",
        "operationId": "patch-layers-layer_id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Layer updated successfully.",
                      "data": {
                        "id": "a_layer",
                        "description": "new description",
                        "idType": "userID",
                        "isImplicitLayer": false,
                        "parameters": [
                          {
                            "name": "a_parameter",
                            "type": "boolean",
                            "defaultValue": true
                          },
                          {
                            "name": "b_parameter",
                            "type": "number",
                            "defaultValue": 123
                          },
                          {
                            "name": "c_parameter",
                            "type": "string",
                            "defaultValue": "this is a string"
                          },
                          {
                            "name": "d_parameter",
                            "type": "array",
                            "defaultValue": []
                          },
                          {
                            "name": "e_parameter",
                            "type": "object",
                            "defaultValue": {
                              "key": "value"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Layer updated successfully."
                    },
                    "data": {
                      "$ref": "../models/layer.json"
                    }
                  }
                },
                "examples": {}
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
                    "description": "new description",
                    "parameters": [
                      {
                        "name": "a_parameter",
                        "type": "boolean",
                        "defaultValue": true
                      },
                      {
                        "name": "b_parameter",
                        "type": "number",
                        "defaultValue": 123
                      },
                      {
                        "name": "c_parameter",
                        "type": "string",
                        "defaultValue": "this is a string"
                      },
                      {
                        "name": "d_parameter",
                        "type": "array",
                        "defaultValue": []
                      },
                      {
                        "name": "e_parameter",
                        "type": "object",
                        "defaultValue": {
                          "key": "value"
                        }
                      }
                    ]
                  }
                },
                "properties": {
                  "description": {
                    "type": "string",
                    "description": "A helpful summary of this layer"
                  },
                  "parameters": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/layer_parameter.json"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "description": "new description",
                    "parameters": [
                      {
                        "name": "a_parameter",
                        "type": "boolean",
                        "defaultValue": true
                      },
                      {
                        "name": "b_parameter",
                        "type": "number",
                        "defaultValue": 123
                      },
                      {
                        "name": "c_parameter",
                        "type": "string",
                        "defaultValue": "this is a string"
                      },
                      {
                        "name": "d_parameter",
                        "type": "array",
                        "defaultValue": []
                      },
                      {
                        "name": "e_parameter",
                        "type": "object",
                        "defaultValue": {
                          "key": "value"
                        }
                      }
                    ]
                  }
                },
                "example-2": {
                  "value": {
                    "description": "just update the description"
                  }
                },
                "example-3": {
                  "value": {
                    "parameters": [
                      {
                        "name": "update_only_parameters",
                        "type": "boolean",
                        "defaultValue": true
                      }
                    ]
                  }
                }
              }
            }
          }
        },
        "description": "Update selected properties of the layer",
        "tags": [
          "Layers"
        ]
      }
    },
    "/layers/{layer_id}/experiments": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_layer"
          },
          "name": "layer_id",
          "in": "path",
          "required": true,
          "description": "layer id to query"
        }
      ],
      "get": {
        "summary": "Get Layer Experiments",
        "tags": [
          "Layers"
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
                      "message": "Layer experiments listed successfully",
                      "data": [
                        {
                          "id": "d_experiment",
                          "description": "",
                          "lastModifierName": "Jacob O'Quinn",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
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
                          "allocation": 10,
                          "duration": 14,
                          "targetingGateID": "",
                          "defaultConfidenceInterval": "95",
                          "bonferroniCorrection": false
                        },
                        {
                          "id": "experiment",
                          "description": "",
                          "lastModifierName": "Jacob O'Quinn",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
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
                          "bonferroniCorrection": false
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
                        "$ref": "../models/experiment.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Layer experiments listed successfully",
                      "data": [
                        {
                          "id": "a_experiment",
                          "description": "a helpful description",
                          "lastModifierName": "Adam Smith",
                          "lastModifierID": "dKixAUMTimICd0a2DYg",
                          "idType": "userID",
                          "status": "setup",
                          "layerID": "a_layer",
                          "hypothesis": "my hypothesis",
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
                          "allocation": 10,
                          "duration": 14,
                          "targetingGateID": "",
                          "defaultConfidenceInterval": "95",
                          "bonferroniCorrection": false
                        },
                        {
                          "id": "b_experiment",
                          "description": "a helpful description",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "F1dTd9achapPESsp7d3",
                          "idType": "userID",
                          "status": "setup",
                          "layerID": "a_layer",
                          "hypothesis": "my hypothesis",
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
                          "bonferroniCorrection": false
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
                      "message": "Layer not found."
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
                      "message": "Layer not found."
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-layers-layer_id-experiments",
        "description": "Get a list of Experiments in the Layer"
      }
    }
  }
}