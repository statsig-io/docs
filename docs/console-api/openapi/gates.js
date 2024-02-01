module.exports = {
  "openapi": "3.0.0",
  "info": {
    "title": "console/v1",
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
          },
          "environmentOverride": {
            "type": "array",
            "x-stoplight": {
              "id": "k5gbkaazc1w8z"
            },
            "description": "Environment overrides are currently only supported on POST updates.",
            "items": {
              "$ref": "#/components/schemas/environment_override"
            }
          }
        },
        "required": [
          "passingUserIDs",
          "failingUserIDs"
        ]
      },
      "environment_override": {
        "title": "environment_override",
        "x-stoplight": {
          "id": "prl1wtbi4szf7"
        },
        "type": "object",
        "properties": {
          "environment": {
            "type": "string",
            "x-stoplight": {
              "id": "ws3z0x2it6tud"
            },
            "description": "Which environment(s) the override is to be applied, Null implies all environments.",
            "nullable": true
          },
          "unitID": {
            "type": "string",
            "x-stoplight": {
              "id": "tm5bnw1vhij0z"
            },
            "description": "Which unit ID the override is being applied to."
          },
          "passingIDs": {
            "type": "array",
            "x-stoplight": {
              "id": "98bfxxf2rnv42"
            },
            "description": "IDs that are forced to pass the feature gate",
            "items": {
              "x-stoplight": {
                "id": "d407ifgjgg74j"
              },
              "type": "string"
            }
          },
          "failingIDs": {
            "type": "array",
            "x-stoplight": {
              "id": "9yeft355cn4hm"
            },
            "description": "IDs that are forced to fail the feature gate",
            "items": {
              "x-stoplight": {
                "id": "o09rvvx1e6c70"
              },
              "type": "string"
            }
          }
        },
        "required": [
          "environment",
          "unitID",
          "passingIDs",
          "failingIDs"
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
                  },
                  "idType": {
                    "type": "string",
                    "description": "The id type this gate will use, defaults to 'userID'"
                  },
                  "creatorID": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "a5j8czj6nrw96"
                    },
                    "description": "The userID of intended creator, defaults to Console API",
                    "example": "35sClJFs8l0y5uRQhDwUDo"
                  }
                },
                "required": [
                  "name"
                ]
              },
              "examples": {
                "name/description": {
                  "value": {
                    "name": "a gate",
                    "description": "helpful summary of what this gate does",
                    "idType": "userID",
                    "creatorID": "35sClJFs8l0y5uRQhDwUDo"
                  }
                },
                "customID": {
                  "value": {
                    "name": "a_custom_gate",
                    "description": "this is a gate with a custom idType",
                    "idType": "customID"
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
                        "description": "helpful summary of what this gate does",
                        "status": "In Progress",
                        "lastModifierID": "xxxxXXXXxxxxXXXxxxx",
                        "lastModifiedTime": 1675294285705,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierEmail": null,
                        "creatorID": "xxxxXXXXxxxxXXXxxxx",
                        "createdTime": 1674769467002,
                        "creatorName": "CONSOLE API",
                        "creatorEmail": null,
                        "idType": "userID",
                        "isEnabled": true,
                        "rules": [
                          {
                            "name": "Ten percent of users",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          }
                        ],
                        "checksPerHour": 0,
                        "tags": []
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
                          "status": "In Progress",
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
                            },
                            {
                              "name": "ten percent of people",
                              "passPercentage": 10,
                              "conditions": [
                                {
                                  "type": "public"
                                }
                              ]
                            },
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
                  "status": 401,
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
        ],
        "parameters": [
          {
            "schema": {
              "type": "array"
            },
            "in": "query",
            "name": "tags",
            "description": "Filter by gates with selected tags"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "idType",
            "description": "Filter by gates with selected idType"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "creatorID",
            "description": "Filter by gates with selected creatorID"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "creatorName",
            "description": "Filter by gates with selected creatorName"
          },
          {
            "schema": {
              "type": "number",
              "minimum": 1
            },
            "in": "query",
            "name": "page",
            "description": "Pagination page number (must also pass limit)"
          },
          {
            "schema": {
              "type": "number",
              "minimum": 1
            },
            "in": "query",
            "name": "limit",
            "description": "Gates per pagination response (must also pass page)"
          },
          {
            "schema": {
              "type": "string",
              "enum": [
                "STALE",
                "TEMPORARY",
                "PERMANENT"
              ]
            },
            "in": "query",
            "name": "type",
            "description": "Filter by gates with selected type"
          },
          {
            "schema": {
              "type": "string",
              "enum": [
                "NONE",
                "STALE_PROBABLY_LAUNCHED",
                "STALE_PROBABLY_UNLAUNCHED",
                "STALE_NO_RULES",
                "STALE_PROBABLY_DEAD_CHECK"
              ]
            },
            "in": "query",
            "name": "typeReason",
            "description": "Filter by gates with selected typeReason"
          }
        ],
        "requestBody": {
          "content": {}
        }
      },
      "parameters": []
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
                        "status": "In Progress",
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
                          },
                          {
                            "name": "ten percent of people",
                            "passPercentage": 10,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          },
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
                  "tags": {
                    "type": [
                      "array"
                    ],
                    "x-stoplight": {
                      "id": "5rrnm2ejylkzx"
                    },
                    "description": "The gate's tags",
                    "items": {
                      "x-stoplight": {
                        "id": "voxa9f4r28gsa"
                      },
                      "type": "string",
                      "example": "product_team"
                    }
                  },
                  "type": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "z4yjl8n8f5mc4"
                    }
                  },
                  "targetApps": {
                    "$ref": "../models/targetApps.json"
                  },
                  "idType": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "6o8q8g32tty5p"
                    },
                    "description": "Changing ID type will overwrite all historical Pulse results"
                  },
                  "": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "x9ql896pw8y28"
                    }
                  }
                }
              },
              "examples": {
                "Full Update": {
                  "value": {
                    "isEnabled": false,
                    "idType": "stableID",
                    "description": "helpful summary of what this gate does",
                    "status": "In Progress",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "tags": [
                      "design"
                    ],
                    "targetApps": [],
                    "rules": [
                      {
                        "name": "everyone",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      },
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
                      },
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
                      "message": "Gate updated successfully.",
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
                          },
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
                          },
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
                        "status": "In Progress",
                        "rules": [
                          {
                            "name": "everyone",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ]
                          },
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
                          },
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
                      },
                      "tags": [
                        "product_team"
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
                  },
                  "tags": {
                    "type": [
                      "array"
                    ],
                    "x-stoplight": {
                      "id": "5rrnm2ejylkzx"
                    },
                    "description": "The gate's tags",
                    "items": {
                      "x-stoplight": {
                        "id": "voxa9f4r28gsa"
                      },
                      "type": "string",
                      "example": "product_team"
                    }
                  },
                  "targetApps": {
                    "$ref": "../models/targetApps.json"
                  },
                  "idType": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "66ijtgompruqj"
                    },
                    "description": "Changing ID type will overwrite all historical Pulse results"
                  }
                }
              },
              "examples": {
                "full update": {
                  "value": {
                    "isEnabled": false,
                    "stableID": "stableID",
                    "description": "helpful summary of what this gate does",
                    "tags": [
                      "product_team"
                    ],
                    "targetApps": [],
                    "rules": [
                      {
                        "name": "everyone",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "public"
                          }
                        ]
                      },
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
                      },
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
                        },
                        "environmentOverrides": {
                          "x-stoplight": {
                            "id": "zif61py20eavs"
                          },
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/environment_override"
                          }
                        }
                      },
                      "required": [
                        "passingUserIDs",
                        "failingUserIDs"
                      ]
                    }
                  }
                },
                "examples": {
                  "UserID and CustomID overrides": {
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
                  },
                  "Environment Override": {
                    "value": {
                      "message": "Gate Overrides read successfully.",
                      "data": {
                        "passingUserIDs": [],
                        "failingUserIDs": [],
                        "environmentOverrides": [
                          {
                            "environment": "production",
                            "unitID": "userID",
                            "passingIDs": [
                              "update_pass"
                            ],
                            "failingIDs": [
                              "update_fail"
                            ]
                          },
                          {
                            "environment": "staging",
                            "unitID": "customID",
                            "passingIDs": [
                              "staging_pass"
                            ],
                            "failingIDs": []
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
    },
    "/gates/{gate_id}/launch": {
      "put": {
        "summary": "",
        "operationId": "put-gates-:id-launch",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Gate updated successfully.",
                      "data": {
                        "id": "a_gate",
                        "name": "A gate",
                        "description": "",
                        "idType": "userID",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifiedTime": 1698950181739,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierEmail": null,
                        "creatorID": "1vaQaBoLlkauH9iiuOSBP2",
                        "createdTime": 1698950178518,
                        "creatorName": "CONSOLE API",
                        "creatorEmail": null,
                        "targetApps": [],
                        "isEnabled": false,
                        "status": "Launched",
                        "rules": [
                          {
                            "name": "public",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "environments": null
                          }
                        ],
                        "checksPerHour": 0,
                        "tags": [],
                        "type": "TEMPORARY",
                        "typeReason": "NONE"
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
                  "Launch Gate": {
                    "value": {
                      "message": "Gate updated successfully.",
                      "data": {
                        "id": "a_gate",
                        "name": "A gate",
                        "description": "",
                        "idType": "userID",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifiedTime": 1698950181739,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierEmail": null,
                        "creatorID": "1vaQaBoLlkauH9iiuOSBP2",
                        "createdTime": 1698950178518,
                        "creatorName": "CONSOLE API",
                        "creatorEmail": null,
                        "targetApps": [],
                        "isEnabled": false,
                        "status": "Launched",
                        "rules": [
                          {
                            "name": "public",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "environments": null
                          }
                        ],
                        "checksPerHour": 0,
                        "tags": [],
                        "type": "TEMPORARY",
                        "typeReason": "NONE"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "07vwx0bjfwo42"
        },
        "description": "Launch a feature gate",
        "tags": [
          "Gates"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "gate_id",
          "in": "path",
          "required": true,
          "description": "Gate id to query"
        }
      ]
    },
    "/gates/{gate_id}/archive": {
      "put": {
        "summary": "",
        "operationId": "put-gates-:id-archive",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Gate updated successfully.",
                      "data": {
                        "id": "a_gate",
                        "name": "A gate",
                        "description": "",
                        "idType": "userID",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifiedTime": 1698950181739,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierEmail": null,
                        "creatorID": "1vaQaBoLlkauH9iiuOSBP2",
                        "createdTime": 1698950178518,
                        "creatorName": "CONSOLE API",
                        "creatorEmail": null,
                        "targetApps": [],
                        "isEnabled": false,
                        "status": "Launched",
                        "rules": [
                          {
                            "name": "public",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "environments": null
                          }
                        ],
                        "checksPerHour": 0,
                        "tags": [],
                        "type": "TEMPORARY",
                        "typeReason": "NONE"
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
                  "Archive Gate": {
                    "value": {
                      "message": "Gate updated successfully.",
                      "data": {
                        "id": "a_gate",
                        "name": "A gate",
                        "description": "",
                        "idType": "userID",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifiedTime": 1698950181739,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierEmail": null,
                        "creatorID": "1vaQaBoLlkauH9iiuOSBP2",
                        "createdTime": 1698950178518,
                        "creatorName": "CONSOLE API",
                        "creatorEmail": null,
                        "targetApps": [],
                        "isEnabled": false,
                        "status": "Archived",
                        "rules": [
                          {
                            "name": "public",
                            "passPercentage": 100,
                            "conditions": [
                              {
                                "type": "public"
                              }
                            ],
                            "environments": null
                          }
                        ],
                        "checksPerHour": 0,
                        "tags": [],
                        "type": "TEMPORARY",
                        "typeReason": "NONE"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "x-stoplight": {
          "id": "07vwx0bjfwo42"
        },
        "description": "Archive a feature gate",
        "tags": [
          "Gates"
        ]
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "gate_id",
          "in": "path",
          "required": true,
          "description": "Gate id to query"
        }
      ]
    }
  }
}