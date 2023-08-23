module.exports = {
    "openapi": "3.0.0",
    "x-stoplight": {
      "id": "4m4nd4s1y1y97"
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
        "TargetAppListItem": {
          "title": "TargetAppListItem",
          "x-stoplight": {
            "id": "40viauwuhgomo"
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
                "id": "tm0d08vsepf34"
              },
              "description": "Name of the target app"
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
      "/target_app": {
        "get": {
          "tags": [
            "Holdouts"
          ],
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
                          "$ref": "#/components/schemas/TargetAppListItem"
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
            "id": "ythd9w80evaps"
          }
        },
        "post": {
          "tags": [
            "Holdouts"
          ],
          "summary": "Bulk Add Target App",
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
                        "id": "0ind0w4hh7i6k"
                      },
                      "description": "List of target apps to be assigned to following configs",
                      "items": {
                        "x-stoplight": {
                          "id": "bbb6mr6y2592t"
                        },
                        "type": "string"
                      }
                    },
                    "gates": {
                      "type": "array",
                      "x-stoplight": {
                        "id": "djjlqf72epy4i"
                      },
                      "description": "Gate IDs assigned new target appIDs ",
                      "items": {
                        "x-stoplight": {
                          "id": "16huqscrgx5nu"
                        },
                        "type": "string"
                      }
                    },
                    "experiments": {
                      "type": "array",
                      "x-stoplight": {
                        "id": "ro3t2vwgueval"
                      },
                      "description": "Experiments IDs assigned new target appIDs ",
                      "items": {
                        "x-stoplight": {
                          "id": "ezy9eo9ji31xc"
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
                        "App to add",
                        "Second app to add"
                      ],
                      "gates": [
                        "gate to update"
                      ],
                      "experiments": [
                        "experiment to update"
                      ]
                    }
                  }
                }
              }
            }
          },
          "x-stoplight": {
            "id": "dtobypdbs8d06"
          },
          "description": "Add a selected target apps to multiple configs at once"
        },
        "parameters": []
      }
    }
  }