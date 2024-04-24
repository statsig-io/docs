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
                "idType": {
                  "type": "string",
                  "description": "The type of ID which the dynamic config is based on.",
                  "example": "userID"
                },
                "tags": {
                  "type": "array",
                  "x-stoplight": {
                    "id": "pr38lwk3l4ves"
                  },
                  "description": "a list of tag names to attach to the dynamic config",
                  "items": {
                    "x-stoplight": {
                      "id": "ya0b1mdyl3ylk"
                    },
                    "type": "string",
                    "example": "a tag"
                  }
                },
                "creatorID": {
                  "type": "string",
                  "x-stoplight": {
                    "id": "fizory4tclp2f"
                  },
                  "description": "The userID of intended creator, defaults to Console API",
                  "example": "35sClJFs8l0y5uRQhDwUDo"
                }
              },
              "required": [
                "name"
              ]
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
          "id": "q54nvdsddtnf0"
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
          "id": "g5iv7rb1708ud"
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
          "id": "drv28ng2nji8e"
        },
        "type": "string",
        "description": "The name that was originally given to the dynamic config on creation but formatted as an ID (\"A Dynamic Config\" -> \"a_dynamic_config\")",
        "x-examples": {
          "example-1": "a_dynamic_config"
        }
      },
      "idType": {
        "type": "string",
        "description": "The type of ID which the dynamic config is based on.",
        "x-examples": {
          "example-1": "userID"
        }
      },
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
                        "idType": "userID",
                        "description": "helpful summary of what this dynamic config does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [
                          {
                            "name": "All Conditions",
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                        "idType": "userID",
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
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                          "idType": "userID",
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
                        "idType": "userID",
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
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                        "idType": "userID",
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
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                            "id": "38ttpCpzrQFTMKcqFKk02l",
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
                  "idType": {
                    "type": "string",
                    "description": "The type of ID which the dynamic config is based on.",
                    "example": "userID"
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
                  "defaultValueJsonC": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "tmr6k5uaqzz9a"
                    },
                    "description": "Same as `defaultValue`, but can accept comments. Only accepts valid JSON-C. Either this field or `defaultValue` may be provided, but providing both will throw an error."
                  },
                  "tags": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "h1gaar0oxcx9h"
                    },
                    "description": "a list of tag names to attach to the dynamic config",
                    "items": {
                      "x-stoplight": {
                        "id": "smz6qk9ixmwz6"
                      },
                      "type": "string",
                      "example": "a tag"
                    }
                  },
                  "schema": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "39eow704856tk"
                    },
                    "description": "A schema using JSON Schema Draft 2020-12 to enforce return values of this dynamic config's rules. When submitting a schema, all submitted return values (default value and rule return values) must match the schema. Alternatively, if no default values or rule return values are updated, existing rules and return values must already conform to the schema."
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