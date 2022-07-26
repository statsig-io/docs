module.exports = {
  "openapi": "3.0.0",
  "info": {
    "title": "console/v1",
    "version": "1.0.0",
    "description": "Gate endpoint"
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
          }
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
                      "$ref": "../models/message.json"
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
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Layer created successfully.",
                      "data": {
                        "id": "a_layer",
                        "description": "helpful summary of what this layer does",
                        "idType": "userID",
                        "isImplicitLayer": false,
                        "parameters": []
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
        "summary": "Get Layers",
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
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "$ref": "../models/layer.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Layers listed successfully.",
                      "data": [
                        {
                          "id": "statsig::a_experiment_layer",
                          "isImplicitLayer": true,
                          "description": "",
                          "parameters": []
                        },
                        {
                          "id": "a_layer",
                          "isImplicitLayer": false,
                          "description": "a description",
                          "parameters": [
                            {
                              "name": "a_parameter",
                              "type": "boolean",
                              "defaultValue": true
                            }
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
        "description": "Get a list of all Layers",
        "tags": [
          "Layers"
        ]
      }
    },
    "/layers/{layer_id}": {
      "post": {
        "summary": "Update Layer",
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
                      "$ref": "../models/message.json"
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
                "examples": {
                  "example-1": {
                    "value": {
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
                      "$ref": "../models/message.json"
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
        "summary": "Get Layer",
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
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/layer.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Layer read successfully.",
                      "data": {
                        "id": "a_layer",
                        "isImplicitLayer": false,
                        "description": "a helpful description",
                        "parameters": [
                          {
                            "name": "a_parameter",
                            "type": "string",
                            "defaultValue": "return this value"
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
      }
    }
  }
}