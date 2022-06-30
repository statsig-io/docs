module.exports = {
  "openapi": "3.0.0",
  "info": {
    "title": "console/v1",
    "version": "1.0.0",
    "contact": {
      "url": "https://www.statsig.com/slack",
      "name": "Statsig Support Slack"
    }
  },
  "servers": [
    {
      "url": "https://api.statsig.com/console/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/dynamic_configs": {
      "post": {
        "tags": [
          "dynamic configs"
        ],
        "summary": "Create Dynamic Config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "../models/dynmaic-config-update.json"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "id": "a_dynamic_config",
                    "isEnabled": false,
                    "description": "an updated summary of what this dynamic config does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                    "rules": [
                      {
                        "name": "All Conditions",
                        "passPercentage": 10,
                        "returnValue": {
                          "key": true
                        },
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      }
                    ],
                    "defaultValue": {
                      "key": true
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Dynamic config updated successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "isEnabled": true,
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": true
                        }
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/dynamic-config.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Dynamic config updated successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "isEnabled": true,
                        "description": "an updated summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "6dja72kfgNidnaN",
                        "rules": [
                          {
                            "name": "1/10th of people",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": false
                        }
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
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "errors": {
                      "type": "array",
                      "nullable": true,
                      "items": {
                        "$ref": "../models/error.json"
                      }
                    }
                  }
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
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "221"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:52:29 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "../models/error_401.json"
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
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxXXXxxxXXXxxx"
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": [
          "dynamic configs"
        ],
        "summary": "Read All Dynamic Configs",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "1163"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:37:57 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/dynamic-config.json"
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
                  "example-1": {
                    "value": {
                      "message": "string",
                      "data": {
                        "id": "a_dynamic_config",
                        "isEnabled": false,
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [
                          {
                            "name": "1/10th of public gets true",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": true
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "45"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:38:21 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 404,
                      "message": "Dynamic config not found."
                    }
                  }
                }
              }
            }
          }
        },
        "description": ""
      }
    },
    "/dynamic_configs/{dynamic_config_id}": {
      "get": {
        "tags": [
          "dynamic configs"
        ],
        "summary": "Read Single Dynamic Config",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "218"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:53:53 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/dynamic_config.json"
                    }
                  }
                },
                "example": {
                  "message": "Gate read successfully.",
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
                      "message": "Dynamic config read successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "isEnabled": true,
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ja739Hi83H",
                        "rules": [
                          {
                            "name": "Public",
                            "passPercentage": 100,
                            "returnValue": {
                              "key": "value"
                            },
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        }
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
                      "message": "Dynamic config not found."
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
                      "message": "Dynamic config not found."
                    }
                  }
                }
              }
            }
          }
        },
        "description": ""
      },
      "post": {
        "summary": "Update Dynamic Config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "../models/dynmaic-config-update.json"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "id": "a_dynamic_config",
                    "isEnabled": false,
                    "description": "an updated summary of what this dynamic config does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "j8dp7mqAd",
                    "rules": [
                      {
                        "name": "Public",
                        "passPercentage": 100,
                        "returnValue": {
                          "key": "updated value"
                        },
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      }
                    ],
                    "defaultValue": {
                      "key": "the updated default value"
                    }
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "221"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:52:29 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/dynamic-config.json"
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
                      "message": "string",
                      "data": {
                        "id": "a_dynamic_config",
                        "isEnabled": true,
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "ja739Hi83H",
                        "rules": [
                          {
                            "name": "Public",
                            "passPercentage": 100,
                            "returnValue": {
                              "key": "value"
                            },
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        }
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
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "errors": {
                      "type": "array",
                      "nullable": true,
                      "items": {
                        "$ref": "../models/error.json"
                      }
                    }
                  }
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
                  "$ref": "../models/error_error_401.json"
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
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 404,
                      "message": "Dynamic config not found."
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
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 404,
                      "message": "Dynamic config not found."
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "dynamic configs"
        ]
      },
      "delete": {
        "summary": "Delete Dynamic Config",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "vary": {
                "schema": {
                  "type": "string",
                  "example": "Origin"
                }
              },
              "access-control-allow-origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "content-type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "content-length": {
                "schema": {
                  "type": "integer",
                  "example": "40"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:55:21 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
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
                      "message": "Dynamic config deleted successfully."
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
                      "message": "Dynamic config not found."
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
                      "message": "Dynamic config not found."
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          "dynamic configs"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "dynamic_config_id",
          "in": "path",
          "required": true,
          "description": "The id of the dynamic config to be queried"
        }
      ]
    }
  },
  "tags": [
    {
      "name": "dynamic configs"
    }
  ]
}