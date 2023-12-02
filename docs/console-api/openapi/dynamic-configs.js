module.exports = {
  "openapi": "3.0.0",
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
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    },
    "requestBodies": {
      "create_dynamic_config": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "description": "The display name of the dynamic config",
                  "example": "a dynamic config"
                },
                "description": {
                  "type": "string",
                  "description": "A brief summary of what the dynamic config is being used for.",
                  "example": "helpful summary of what this dynamic config does"
                },
                "tags": {
                  "type": "array",
                  "x-stoplight": {
                    "id": "4u8p85o6xcf2l"
                  },
                  "description": "a list of tag names to attach to the dynamic config",
                  "items": {
                    "x-stoplight": {
                      "id": "dlpg24cgslee8"
                    },
                    "type": "string",
                    "example": "a tag"
                  }
                }
              }
            },
            "examples": {}
          }
        },
        "description": "The name and description for the new Dynamic Config"
      }
    },
    "schemas": {
      "description": {
        "title": "description",
        "x-stoplight": {
          "id": "liyywvwv1ul0f"
        },
        "type": "string",
        "description": "A helpful summary of what this dynamic config does.",
        "x-examples": {
          "example-1": "a helpful summary of what this dynamic config does"
        }
      },
      "isEnabled": {
        "title": "isEnabled",
        "x-stoplight": {
          "id": "a777j69kq9g8y"
        },
        "type": "boolean",
        "description": "Is the dynamic config enabled.",
        "x-examples": {
          "example-1": true
        }
      },
      "id": {
        "title": "id",
        "x-stoplight": {
          "id": "270blnxzb3ln4"
        },
        "type": "string",
        "description": "The name that was originally given to the dynamic config on creation but formatted as an ID (\"A Dynamic Config\" -> \"a_dynamic_config\")",
        "x-examples": {
          "example-1": "a_dynamic_config"
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
    "/dynamic_configs": {
      "post": {
        "tags": [
          "Dynamic Configs"
        ],
        "summary": "Create Dynamic Config",
        "responses": {
          "200": {
            "description": "Successful response. Returns a message and the newly created Dynamic Config object",
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
                      "$ref": "../models/dynamic_config.json"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Dynamic config created successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "creatorEmail": "johnsmith@mydomain.com",
                        "creatorName": "John Smith",
                        "createdTime": 1674769467002,
                        "holdoutIDs": [],
                        "isEnabled": true,
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public",
                                "operator": "string",
                                "targetValue": 0,
                                "field": "string",
                                "customID": "string"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        },
                        "tags": [
                          "a tag"
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
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/create_dynamic_config"
        }
      },
      "get": {
        "tags": [
          "Dynamic Configs"
        ],
        "summary": "Read All Dynamic Configs",
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
                      "description": "Array of existing Dynamic Configs",
                      "items": {
                        "$ref": "../models/dynamic_config.json"
                      }
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
                  "Example 1": {
                    "value": {
                      "message": "Dynamic configs listed successfully.",
                      "data": [
                        {
                          "id": "a_dynamic_config",
                          "description": "helpful summary of what this dynamic config does",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "lastModifierName": "CONSOLE API",
                          "creatorEmail": "johnsmith@mydomain.com",
                          "creatorName": "John Smith",
                          "createdTime": 1674769467002,
                          "holdoutIDs": [],
                          "isEnabled": true,
                          "rules": [
                            {
                              "name": "All Conditions",
                              "passPercentage": 10,
                              "conditions": [
                                {
                                  "type": "public",
                                  "operator": "string",
                                  "targetValue": 0,
                                  "field": "string",
                                  "customID": "string"
                                }
                              ],
                              "returnValue": {
                                "key": true
                              }
                            }
                          ],
                          "defaultValue": {
                            "key": "the default value"
                          },
                          "tags": [
                            "a tag"
                          ]
                        }
                      ]
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
          "Dynamic Configs"
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
                  "Example 1": {
                    "value": {
                      "message": "Dynamic config read successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "creatorEmail": "johnsmith@mydomain.com",
                        "creatorName": "John Smith",
                        "createdTime": 1674769467002,
                        "holdoutIDs": [],
                        "isEnabled": true,
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public",
                                "operator": "string",
                                "targetValue": 0,
                                "field": "string",
                                "customID": "string"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        },
                        "tags": [
                          "a tag"
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
        "summary": "Fully Update Dynamic Config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "../models/dynamic_config_update.json"
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
          },
          "description": "Request body expects a Dynamic Config object"
        },
        "responses": {
          "201": {
            "description": "Successful response. Returns a message and the newly created Dynamic Config object",
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
                      "$ref": "../models/dynamic_config.json"
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
                  "Example 1": {
                    "value": {
                      "message": "Dynamic config updated successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "creatorEmail": "johnsmith@mydomain.com",
                        "creatorName": "John Smith",
                        "createdTime": 1674769467002,
                        "holdoutIDs": [],
                        "isEnabled": true,
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public",
                                "operator": "string",
                                "targetValue": 0,
                                "field": "string",
                                "customID": "string"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        },
                        "tags": [
                          "a tag"
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
          "Dynamic Configs"
        ],
        "description": "Update all properties of the dynamic config"
      },
      "patch": {
        "summary": "Partially Update Dynamic Config",
        "operationId": "patch-dynamic_configs-dynamic_config_id",
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
                      "$ref": "../models/dynamic_config.json"
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Dynamic config updated successfully.",
                      "data": {
                        "id": "a_dynamic_config",
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "creatorEmail": "johnsmith@mydomain.com",
                        "creatorName": "John Smith",
                        "createdTime": 1674769467002,
                        "holdoutIDs": [],
                        "isEnabled": true,
                        "rules": [
                          {
                            "name": "All Conditions",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public",
                                "operator": "string",
                                "targetValue": 0,
                                "field": "string",
                                "customID": "string"
                              }
                            ],
                            "returnValue": {
                              "key": true
                            }
                          }
                        ],
                        "defaultValue": {
                          "key": "the default value"
                        },
                        "tags": [
                          "a tag"
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
        "description": "Update selected properties of the dynamic config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "id": "a_dynamic_config",
                    "isEnabled": true,
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
                },
                "properties": {
                  "id": {
                    "$ref": "#/components/schemas/id"
                  },
                  "description": {
                    "$ref": "#/components/schemas/description"
                  },
                  "isEnabled": {
                    "$ref": "#/components/schemas/isEnabled"
                  },
                  "rules": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/rule.json"
                    }
                  },
                  "defaultValue": {
                    "type": "object",
                    "description": "The fallback JSON object when no rules are triggered"
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "6fcbz59pu3vu6"
                    },
                    "description": "a list of tag names to attach to the dynamic config",
                    "items": {
                      "x-stoplight": {
                        "id": "r4ji5xjkdjysb"
                      },
                      "type": "string",
                      "example": "a tag"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "isEnabled": true,
                    "description": "Updated summary of what this dynamic config does",
                    "rules": [
                      {
                        "name": "Updated Conditions",
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
                      "key": "Updated value"
                    }
                  }
                },
                "example-2": {
                  "value": {
                    "isEnabled": false,
                    "defaultValue": {
                      "key": "Updated value"
                    }
                  }
                },
                "example-3": {
                  "value": {
                    "description": "Just update the description"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Dynamic Configs"
        ]
      },
      "delete": {
        "summary": "Delete Dynamic Config",
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
                    }
                  }
                },
                "example": {
                  "message": "Gate deleted successfully."
                },
                "examples": {
                  "Example 1": {
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
          "Dynamic Configs"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_dynamic_config"
          },
          "name": "dynamic_config_id",
          "in": "path",
          "required": true,
          "description": "The id of the dynamic config to be queried"
        }
      ]
    }
  }
}