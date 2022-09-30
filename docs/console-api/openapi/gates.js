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
    "schemas": {
      "gate_override": {
        "type": "object",
        "x-examples": {
          "Gate of id type UserID": {
            "passingUserIDs": [
              "passing-user"
            ],
            "failingUserIDs": [
              "failing-user"
            ]
          },
          "Gate with a customID type": {
            "passingUserIDs": [
              "passing-user"
            ],
            "failingUserIDs": [
              "failing-user"
            ],
            "passingCustomIDs": [
              "passing-custom-id"
            ],
            "failingCustomIDs": [
              "failing-custom-id"
            ]
          }
        },
        "description": "",
        "properties": {
          "passingUserIDs": {
            "type": "array",
            "description": "An array of UserIDs that will be forced to pass the gate.",
            "items": {
              "type": "string"
            }
          },
          "failingUserIDs": {
            "type": "array",
            "description": "An array of UserIDs that will be forced to fail the gate.",
            "items": {
              "type": "string"
            }
          },
          "passingCustomIDs": {
            "type": "array",
            "description": "An array of CustomIDs that will be forced to pass the gate (used for gates not using UserID as their idType).",
            "items": {
              "type": "string"
            }
          },
          "failingCustomIDs": {
            "type": "array",
            "description": "An array of CustomIDs that will be forced to fail the gate (used for gates not using UserID as their idType).",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "passingUserIDs",
          "failingUserIDs"
        ]
      }
    },
    "responses": {
      "404": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "x-examples": {
                "example-1": {
                  "status": 404,
                  "message": "Gate not found."
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
                  "message": "Gate not found."
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
    "/gates": {
      "post": {
        "tags": [
          "Gates"
        ],
        "summary": "Create Gate",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "name": {
                      "type": "string",
                      "description": "The display name to give the new gate"
                    },
                    "description": {
                      "type": "string",
                      "description": "A summary of what this gate does"
                    }
                  }
                },
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "The name of the new gate"
                  },
                  "description": {
                    "type": "string",
                    "description": "A description of the new gate"
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "name": "a gate",
                    "description": "helpful summary of what this gate does"
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
                      "description": "The display name to give the new gate"
                    },
                    "description": {
                      "type": "string",
                      "description": "A summary of what this gate does"
                    }
                  }
                },
                "properties": {
                  "name": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string",
                        "description": "Name of the new gate"
                      },
                      "description": {
                        "type": "string",
                        "description": "A summary of this gate purpose"
                      }
                    }
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
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/gate.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Gate created successfully.",
                      "data": {
                        "id": "a_gate",
                        "isEnabled": true,
                        "description": "helpful summary of what this gate does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [],
                        "devRules": [],
                        "stagingRules": [],
                        "tags": [],
                        "checksPerHour": 0
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
                      "nullable": true,
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
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-9O92sGDeuJuT8xTVH6zARKsa9MHof2VHWMLBn9vr8Nqaasdf"
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
                      "status": 401,
                      "message": "This endpoint only accepts an active CONSOLE key, but an invalid key was sent. Key: console-xxxxXXXXxxxxXXXxxx"
                    }
                  }
                }
              }
            }
          }
        },
        "description": "Create a new gate"
      },
      "get": {
        "tags": [
          "Gates"
        ],
        "summary": "Read All Gates",
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
                      "description": "An array of existing gate objects",
                      "items": {
                        "$ref": "../models/gate.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Gates listed successfully.",
                      "data": [
                        {
                          "id": "a_gate",
                          "isEnabled": true,
                          "description": "helpful summary of what this gate does",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "aiK7Y0FddfTimfadf2f9vacz",
                          "rules": [
                            {
                              "name": "a rule",
                              "passPercentage": 100,
                              "conditions": [
                                {
                                  "type": "user_id",
                                  "targetValue": [
                                    "user1"
                                  ],
                                  "operator": "any"
                                }
                              ]
                            }
                          ],
                          "devRules": [
                            {
                              "name": "ten percent of people",
                              "passPercentage": 10,
                              "conditions": [
                                {
                                  "type": "public"
                                }
                              ]
                            }
                          ],
                          "stagingRules": [
                            {
                              "name": "everyone",
                              "passPercentage": 100,
                              "conditions": [
                                {
                                  "type": "public"
                                }
                              ]
                            }
                          ],
                          "tags": [
                            "* Core"
                          ],
                          "checksPerHour": 0
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
                }
              }
            }
          }
        },
        "operationId": "",
        "description": "Get a list of all gates",
        "x-code-samples": [
          {
            "lang": "cURL",
            "label": "cURL",
            "source": "curl --request GET 'https://statsigapi.net/console/v1/gates' --header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'"
          }
        ]
      }
    },
    "/gates/{gate_id}": {
      "get": {
        "tags": [
          "Gates"
        ],
        "summary": "Read Single Gate",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Gate read successfully.",
                      "data": {
                        "id": "a_gate",
                        "isEnabled": true,
                        "description": "helpful summary of what this gate does",
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
                                "type": "passes_gate",
                                "targetValue": "my_gate_2"
                              },
                              {
                                "type": "fails_gate",
                                "targetValue": "my_gate_2"
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
                      "$ref": "../models/gate.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Gate read successfully.",
                      "data": {
                        "id": "a_gate",
                        "isEnabled": true,
                        "description": "helpful summary of what this gate does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "rules": [
                          {
                            "name": "specific users",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "user_id",
                                "targetValue": [
                                  "111",
                                  "222"
                                ]
                              }
                            ]
                          }
                        ],
                        "devRules": [
                          {
                            "name": "ten percent of people",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "stagingRules": [
                          {
                            "name": "everyone",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "tags": [
                          "* Core"
                        ],
                        "checksPerHour": 0
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
                      "message": "Name is already in use"
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
                      "message": "Name is already in use"
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
            "$ref": "#/components/responses/404"
          }
        },
        "description": "Read data from a single gate "
      },
      "post": {
        "tags": [
          "Gates"
        ],
        "summary": "Fully Update Gate",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "isEnabled": true,
                    "description": "updated summary of what this gate does",
                    "rules": [
                      {
                        "name": "10 percent of all",
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
                "properties": {
                  "isEnabled": {
                    "type": "boolean"
                  },
                  "description": {
                    "type": "string"
                  },
                  "rules": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/rule.json"
                    }
                  },
                  "devRules": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/rule.json"
                    }
                  },
                  "stagingRules": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/rule.json"
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "isEnabled": false,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": [
                      {
                        "name": "everyone",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      }
                    ],
                    "devRules": [
                      {
                        "name": "all outlook",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "email",
                            "operator": "str_contains_any",
                            "targetValue": [
                              "@outlook.com"
                            ]
                          }
                        ]
                      }
                    ],
                    "stagingRules": [
                      {
                        "name": "all outlook and gmail",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "email",
                            "operator": "str_contains_any",
                            "targetValue": [
                              "@outlook.com",
                              "@gmail.com"
                            ]
                          }
                        ]
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
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/gate.json"
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
                      "message": "string",
                      "data": {
                        "id": "a_gate",
                        "isEnabled": true,
                        "description": "helpful summary of what this gate does",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaasdfLlkaujjajiuOSBP2",
                        "rules": [
                          {
                            "name": "everyone",
                            "passPercentage": 100,
                            "type": "public"
                          }
                        ],
                        "devRules": [
                          {
                            "name": "all outlook",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "email",
                                "operator": "str_contains_any",
                                "targetValue": [
                                  "@outlook.com"
                                ]
                              }
                            ]
                          }
                        ],
                        "stagingRules": [
                          {
                            "name": "all outlook and gmail",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "email",
                                "operator": "str_contains_any",
                                "targetValue": [
                                  "@outlook.com",
                                  "@gmail.com"
                                ]
                              }
                            ]
                          }
                        ],
                        "tags": [
                          "* Core"
                        ],
                        "checksPerHour": 0
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
            "$ref": "#/components/responses/404"
          }
        },
        "description": "Update all properties of a gate"
      },
      "delete": {
        "tags": [
          "Gates"
        ],
        "summary": "Delete Gate",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Gate deleted successfully."
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
                      "message": "Gate deleted successfully."
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
                      "message": "Gate not found."
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
                      "message": "Gate not found."
                    }
                  }
                }
              }
            }
          }
        },
        "description": "Delete a gate"
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_gate"
          },
          "name": "gate_id",
          "in": "path",
          "description": "The unique gate id to query",
          "required": true
        }
      ],
      "patch": {
        "summary": "Partially Update Gate",
        "operationId": "patch-gates-gate_id",
        "responses": {
          "200": {
            "description": "OK",
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
                        "gateIDs": [
                          "a_gate"
                        ],
                        "experimentIDs": [],
                        "layerIDs": [
                          "mynewlayer"
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "$ref": "../models/gate.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Gate updated successfully.",
                      "data": {
                        "id": "a_gate",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaasdfLlkaujjajiuOSBP2",
                        "isEnabled": false,
                        "description": "helpful summary of what this gate does",
                        "rules": [
                          {
                            "name": "everyone",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "devRules": [
                          {
                            "name": "all outlook",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "email",
                                "operator": "str_contains_any",
                                "targetValue": [
                                  "@outlook.com"
                                ]
                              }
                            ]
                          }
                        ],
                        "stagingRules": [
                          {
                            "name": "all outlook and gmail",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "email",
                                "operator": "str_contains_any",
                                "targetValue": [
                                  "@outlook.com",
                                  "@gmail.com"
                                ]
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
            "$ref": "#/components/responses/404"
          }
        },
        "description": "Update selected properties of the gate",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "isEnabled": true,
                    "description": "updated summary of what this gate does",
                    "rules": [
                      {
                        "name": "10 percent of all",
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
                "properties": {
                  "isEnabled": {
                    "type": "boolean",
                    "description": "Is the gate Enabled."
                  },
                  "description": {
                    "type": "string",
                    "description": "A summary of what this gate does."
                  },
                  "rules": {
                    "type": "array",
                    "items": {
                      "$ref": "../models/rule.json"
                    }
                  }
                }
              },
              "examples": {
                "full update": {
                  "value": {
                    "isEnabled": false,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": [
                      {
                        "name": "everyone",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      }
                    ],
                    "devRules": [
                      {
                        "name": "all outlook",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "email",
                            "operator": "str_contains_any",
                            "targetValue": [
                              "@outlook.com"
                            ]
                          }
                        ]
                      }
                    ],
                    "stagingRules": [
                      {
                        "name": "all outlook and gmail",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "email",
                            "operator": "str_contains_any",
                            "targetValue": [
                              "@outlook.com",
                              "@gmail.com"
                            ]
                          }
                        ]
                      }
                    ]
                  }
                },
                "update isEnabled": {
                  "value": {
                    "isEnabled": true
                  }
                },
                "update description": {
                  "value": {
                    "description": "Just update the description"
                  }
                },
                "partial update": {
                  "value": {
                    "isEnabled": true,
                    "description": "string",
                    "rules": [
                      {
                        "name": "string",
                        "passPercentage": 0,
                        "conditions": [
                          {
                            "type": "string",
                            "operator": "string",
                            "targetValue": 0,
                            "field": "string",
                            "customID": "string"
                          }
                        ],
                        "returnValue": {}
                      }
                    ]
                  }
                }
              }
            }
          },
          "description": ""
        },
        "tags": [
          "Gates"
        ]
      }
    },
    "/gates/{gate_id}/overrides": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_gate"
          },
          "name": "gate_id",
          "in": "path",
          "required": true,
          "description": "Gate id to query"
        }
      ],
      "get": {
        "tags": [
          "Gates"
        ],
        "summary": "Get All Gate Overrides",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Gate Overrides read successfully.",
                      "data": {
                        "passingUserIDs": [],
                        "failingUserIDs": [
                          "failing-user"
                        ],
                        "passingCustomIDs": [],
                        "failingCustomIDs": []
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
                        "passingUserIDs": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "failingUserIDs": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "passingCustomIDs": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        "failingCustomIDs": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Gate Overrides read successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
                        ],
                        "passingCustomIDs": [
                          "passing-custom-id"
                        ],
                        "failingCustomIDs": [
                          "passing-custom-id"
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
            "$ref": "#/components/responses/404"
          }
        },
        "operationId": "get-gates-gate_id-overrides"
      },
      "post": {
        "summary": "Update Gate Overrides",
        "tags": [
          "Gates"
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
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/gate_override"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
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
            "$ref": "#/components/responses/404"
          }
        },
        "operationId": "post-gates-gate_id-overrides",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/gate_override"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "passingUserIDs": [
                      "passing-user"
                    ],
                    "failingUserIDs": [
                      "failing-user"
                    ]
                  }
                }
              }
            }
          }
        },
        "description": "Set gate overrides to be provided lists"
      },
      "patch": {
        "summary": "Add Gate Overrides",
        "tags": [
          "Gates"
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
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/gate_override"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
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
            "$ref": "#/components/responses/404"
          }
        },
        "operationId": "patch-gates-gate_id-overrides",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/gate_override"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "passingUserIDs": [
                      "passing-user"
                    ],
                    "failingUserIDs": [
                      "failing-user"
                    ]
                  }
                }
              }
            }
          }
        },
        "description": "Adds provided lists to existing gate overrides"
      },
      "delete": {
        "summary": "Remove Gate Overrides",
        "tags": [
          "Gates"
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
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
                        ]
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/gate_override"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Holdout Overrides updated successfully.",
                      "data": {
                        "passingUserIDs": [
                          "passing-user"
                        ],
                        "failingUserIDs": [
                          "failing-user"
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
            "$ref": "#/components/responses/404"
          }
        },
        "operationId": "delete-gates-gate_id-overrides",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/gate_override"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "passingUserIDs": [
                      "passing-user"
                    ],
                    "failingUserIDs": [
                      "failing-user"
                    ]
                  }
                }
              }
            }
          }
        },
        "description": "Removes provided lists from existing gate overrides"
      }
    }
  }
}