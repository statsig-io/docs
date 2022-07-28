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
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    },
    "requestBodies": {
      "Update-Holdout": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "isEnabled": {
                  "type": "boolean",
                  "description": "Is the holdout enabled."
                },
                "description": {
                  "type": "string",
                  "description": "A brief summary of what the holdout is being used for."
                },
                "passPercentage": {
                  "type": "string",
                  "description": "The percentage of custumers, on the range of 0%-10%, who won't see the new features."
                },
                "gateIDs": {
                  "type": "string",
                  "description": "An array of gatesIDs which this holdout is to be applied."
                },
                "experimentIDs": {
                  "type": "string",
                  "description": "An array of experimentsIDs which this holdout is to be applied."
                },
                "layerIDs": {
                  "type": "string",
                  "description": "An array of layersIDs which this holdout is to be applied."
                },
                "isGlobal": {
                  "type": "string",
                  "description": "Is the holdout being applied to all new gates."
                }
              }
            },
            "examples": {
              "example-1": {
                "value": {
                  "id": "a_holdout",
                  "isEnabled": false,
                  "description": "UPDATED summary of what this holdout does",
                  "idType": "a_customID",
                  "isGlobal": false,
                  "lastModifierName": "CONSOLE API",
                  "lastModifierID": "zkK82njn9aL",
                  "passPercentage": 10,
                  "gateIDs": [
                    "new_gate"
                  ],
                  "experimentIDs": [
                    "new_experiment"
                  ],
                  "layerIDs": [
                    "new_layer"
                  ]
                }
              }
            }
          }
        }
      }
    },
    "schemas": {
      "overrides_data": {
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
        "properties": {
          "passingUserIDs": {
            "type": "array",
            "description": "User IDs that are added will be part of the Holdout",
            "items": {
              "type": "string"
            }
          },
          "failingUserIDs": {
            "type": "array",
            "description": "User IDs that are added will be excluded from the Holdout",
            "items": {
              "type": "string"
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
  "tags": [
    {
      "name": "gates"
    },
    {
      "name": "experiments"
    },
    {
      "name": "holdouts"
    },
    {
      "name": "dynamic config"
    },
    {
      "name": "segments"
    },
    {
      "name": "autotunes"
    },
    {
      "name": "events"
    }
  ],
  "paths": {
    "/holdouts": {
      "get": {
        "tags": [
          "Holdouts"
        ],
        "summary": "Read All Holdouts",
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
                      "type": "array",
                      "description": "Array of existing holdouts",
                      "items": {
                        "$ref": "../models/holdout.json"
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
                  "example-1": {
                    "value": {
                      "message": "Holdouts listed successfully.",
                      "data": [
                        {
                          "id": "a_holdout",
                          "isEnabled": true,
                          "description": "UPDATED summary of what this holdout does",
                          "idType": "userID",
                          "isGlobal": true,
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "passPercentage": 10,
                          "gateIDs": [
                            "g_gate",
                            "k_gate"
                          ],
                          "experimentIDs": [
                            "c_experiment",
                            "a_experiment",
                            "a_experiment"
                          ],
                          "layerIDs": [
                            "mynewlayer"
                          ]
                        },
                        {
                          "id": "z_holdout",
                          "isEnabled": true,
                          "description": "helpful summary of what this holdout does",
                          "idType": "userID",
                          "isGlobal": false,
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "zujcy6odhjaoch83",
                          "passPercentage": 0,
                          "gateIDs": [],
                          "experimentIDs": [],
                          "layerIDs": []
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
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
        "x-codeSample": {
          "lang": "cURL",
          "label": "cURL",
          "source": "curl --request GET 'https://statsigapi.net/console/v1/gates' --header 'STATSIG-API-KEY: console-xxxxXXXXxxxxXXXXxxxx'"
        }
      },
      "post": {
        "tags": [
          "Holdouts"
        ],
        "summary": "Update Holdout Overrides",
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
                    },
                    "data": {
                      "$ref": "../models/holdout.json"
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
                      "message": "Holdout updated successfully.",
                      "data": {
                        "id": "a_holdout",
                        "isEnabled": true,
                        "description": "UPDATED summary of what this holdout does",
                        "idType": "userID",
                        "isGlobal": true,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "passPercentage": 30,
                        "gateIDs": [
                          "a_gate"
                        ],
                        "experimentIDs": [],
                        "layerIDs": [
                          "mynewlayer"
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
                      "errors": [
                        {
                          "property": "isEnabled",
                          "errorMessage": "Expected boolean, received string"
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
                    },
                    "errors": {
                      "type": "array",
                      "nullable": true,
                      "items": {
                        "$ref": ""
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
                          "property": "isEnabled",
                          "errorMessage": "Expected boolean, received string"
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
                  "example-1": {
                    "value": {
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
                  "example-2": {
                    "value": {
                      "status": 404,
                      "message": "Holdout not found."
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/Update-Holdout"
        }
      }
    },
    "/holdouts/{holdout_id}": {
      "get": {
        "tags": [
          "Holdouts"
        ],
        "summary": "Read Single Holdout",
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
                  "x-examples": {
                    "example-1": {
                      "message": "Holdout deleted successfully."
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
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
                      "message": "Holdout deleted successfully."
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
        }
      },
      "post": {
        "tags": [
          "Holdouts"
        ],
        "summary": "Fully Update Holdout",
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
                    },
                    "data": {
                      "$ref": "../models/holdout.json"
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
                      "message": "Holdout updated successfully.",
                      "data": {
                        "id": "a_holdout",
                        "isEnabled": true,
                        "description": "UPDATED summary of what this holdout does",
                        "idType": "userID",
                        "isGlobal": true,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "passPercentage": 30,
                        "gateIDs": [
                          "a_gate"
                        ],
                        "experimentIDs": [],
                        "layerIDs": [
                          "mynewlayer"
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
                      "errors": [
                        {
                          "property": "isEnabled",
                          "errorMessage": "Expected boolean, received string"
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
                    },
                    "errors": {
                      "type": "array",
                      "nullable": true,
                      "items": {
                        "$ref": ""
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
                          "property": "isEnabled",
                          "errorMessage": "Expected boolean, received string"
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
                  "example-1": {
                    "value": {
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
                  "example-2": {
                    "value": {
                      "status": 404,
                      "message": "Holdout not found."
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/Update-Holdout"
        },
        "description": "Update all fields of the holdout"
      },
      "delete": {
        "tags": [
          "Holdouts"
        ],
        "summary": "Delete Holdout",
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
                      "message": "Holdout deleted successfully."
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
                      "message": "Holdout not found."
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
                      "message": "Holdout not found."
                    }
                  }
                }
              }
            }
          }
        }
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_holdout"
          },
          "name": "holdout_id",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Partially Update Holdout",
        "operationId": "patch-holdouts-holdout_id",
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
                        "description": "an updated summary of what this holdout does",
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
                      "type": "string"
                    },
                    "data": {
                      "$ref": "../models/holdout.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Holdout updated successfully.",
                      "data": {
                        "id": "a_holdout",
                        "isEnabled": true,
                        "description": "an updated summary of what this holdout does",
                        "idType": "userID",
                        "isGlobal": true,
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "passPercentage": 10,
                        "gateIDs": [
                          "a_gate"
                        ],
                        "experimentIDs": [
                          "a_experiment"
                        ],
                        "layerIDs": [
                          "a_layer"
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
                      "message": "Holdout not found."
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
                      "message": "Holdout not found."
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/Update-Holdout"
        },
        "description": "Update selected properties of the holdout",
        "tags": [
          "Holdouts"
        ]
      }
    },
    "/holdouts/{holdout_id}/overrides": {
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_holdout"
          },
          "name": "holdout_id",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Get a gate's overrides",
        "tags": [
          "Holdouts"
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
                      "message": "Gate Overrides read successfully.",
                      "data": {
                        "passingUserIDs": [],
                        "failingUserIDs": []
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "#/components/schemas/overrides_data"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Holdout Overrides read successfully.",
                      "data": {
                        "passingUserIDs": [
                          "string"
                        ],
                        "failingUserIDs": [
                          "string"
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
                }
              }
            }
          }
        },
        "operationId": "get-holdouts-holdout_id-overrides"
      },
      "post": {
        "summary": "update a gates overrides",
        "tags": [
          "Holdouts"
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
                      "$ref": "#/components/schemas/overrides_data"
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
                }
              }
            }
          }
        },
        "operationId": "post-holdouts-holdout_id-overrides",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/overrides_data"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "passingUserIDs": [
                      "string"
                    ],
                    "failingUserIDs": [
                      "string"
                    ]
                  }
                }
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/overrides_data"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "passingUserIDs": [
                      "string"
                    ],
                    "failingUserIDs": [
                      "string"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}