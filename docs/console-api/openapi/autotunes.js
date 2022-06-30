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
    },
    "requestBodies": {
      "update_autotune": {
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "x-examples": {
                "example-1": {
                  "description": "helpful summary of what this Aututune is",
                  "variants": [
                    {
                      "name": "red",
                      "json": {
                        "color": "red"
                      }
                    },
                    {
                      "name": "blue",
                      "json": {
                        "color": "blue"
                      }
                    }
                  ],
                  "successEvent": "purchase_item",
                  "explorationWindow": "1hr",
                  "attributionWindow": "2hr",
                  "winnerThreshold": "99%"
                }
              },
              "properties": {
                "description": {
                  "type": "string",
                  "description": "A brief summary of what the autotune is being used for."
                },
                "variants": {
                  "type": "array",
                  "description": "Array of Variant Objects",
                  "items": {
                    "$ref": "../models/variant.json"
                  }
                },
                "successEvent": {
                  "type": "string",
                  "description": "The event you are trying to optimize for."
                },
                "explorationWindow": {
                  "type": "string",
                  "enum": [
                    "1hr",
                    "24hr",
                    "48hr",
                    "1",
                    "24",
                    "48"
                  ],
                  "description": "The initial time period where Autotune will equally split the traffic."
                },
                "attributionWindow": {
                  "type": "string",
                  "enum": [
                    "1hr",
                    "2hr",
                    "4hr",
                    "24hr",
                    "1",
                    "2",
                    "4",
                    "24"
                  ],
                  "description": "The maximum duration between the exposure and success event that counts as a success."
                },
                "winnerThreshold": {
                  "type": "string",
                  "enum": [
                    "80%",
                    "90%",
                    "95%",
                    "98%",
                    "99%"
                  ],
                  "description": "The \"probability of best\" threshold a variant needs to achieve for Autotune to declare it the winner, stop collecting data, and direct all traffic."
                }
              }
            },
            "examples": {
              "example-1": {
                "value": {
                  "description": "an updated summary of what this Aututune is",
                  "variants": [
                    {
                      "name": "red",
                      "json": {
                        "color": "red"
                      }
                    },
                    {
                      "name": "blue",
                      "json": {
                        "color": "blue"
                      }
                    }
                  ],
                  "successEvent": "purchase_item",
                  "explorationWindow": "1hr",
                  "attributionWindow": "2hr",
                  "winnerThreshold": "99%"
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
    "/autotunes": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read All Autotunes",
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
                      "type": "array",
                      "items": {
                        "$ref": "../models/autotune.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Autotune Experiments listed successfully.",
                      "data": [
                        {
                          "id": "button_color_test",
                          "isStarted": false,
                          "description": "Which color button gets the most clicks.",
                          "lastModifierID": "pqicjc739cna93nca",
                          "lastModifierName": "CONSOLE API",
                          "variants": [
                            {
                              "name": "red",
                              "json": {
                                "color": "red"
                              }
                            },
                            {
                              "name": "blue",
                              "json": {
                                "color": "blue"
                              }
                            }
                          ],
                          "successEvent": "click",
                          "successEventValue": "",
                          "explorationWindow": "1hr",
                          "attributionWindow": "2hrs",
                          "winnerThreshold": "99%"
                        },
                        {
                          "id": "rounded_icons_test",
                          "isStarted": false,
                          "description": "Circles vs rounded squares.",
                          "lastModifierID": "pqicjc739cna93nca",
                          "lastModifierName": "CONSOLE API",
                          "variants": [
                            {
                              "name": "circle",
                              "json": {
                                "shape": "circle"
                              }
                            },
                            {
                              "name": "rounded square",
                              "json": {
                                "shape": "rounded-square"
                              }
                            }
                          ],
                          "successEvent": "purchase_item",
                          "successEventValue": "",
                          "explorationWindow": "1hr",
                          "attributionWindow": "2hrs",
                          "winnerThreshold": "99%"
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
        }
      },
      "post": {
        "tags": [
          "autotunes"
        ],
        "summary": "Create Autotune",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "../models/autotune.json"
              },
              "examples": {
                "example-1": {
                  "value": {
                    "name": "a_autotune",
                    "description": "helpful summary of what this Aututune is",
                    "variants": [
                      {
                        "name": "red",
                        "json": {
                          "color": "red"
                        }
                      },
                      {
                        "name": "blue",
                        "json": {
                          "color": "blue"
                        }
                      }
                    ],
                    "successEvent": "purchase_item",
                    "explorationWindow": "1hr",
                    "attributionWindow": "2hr",
                    "winnerThreshold": "99%"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Autotune Experiments listed successfully.",
                      "data": [
                        {
                          "id": "button_color_test",
                          "isStarted": false,
                          "description": "Which color button gets the most clicks.",
                          "lastModifierID": "pqicjc739cna93nca",
                          "lastModifierName": "CONSOLE API",
                          "variants": [
                            {
                              "name": "red",
                              "json": {
                                "color": "red"
                              }
                            },
                            {
                              "name": "blue",
                              "json": {
                                "color": "blue"
                              }
                            }
                          ],
                          "successEvent": "click",
                          "successEventValue": "",
                          "explorationWindow": "1hr",
                          "attributionWindow": "2hrs",
                          "winnerThreshold": "99%"
                        },
                        {
                          "id": "rounded_icons_test",
                          "isStarted": false,
                          "description": "Circles vs rounded squares.",
                          "lastModifierID": "pqicjc739cna93nca",
                          "lastModifierName": "CONSOLE API",
                          "variants": [
                            {
                              "name": "circle",
                              "json": {
                                "shape": "circle"
                              }
                            },
                            {
                              "name": "rounded square",
                              "json": {
                                "shape": "rounded-square"
                              }
                            }
                          ],
                          "successEvent": "purchase_item",
                          "successEventValue": "",
                          "explorationWindow": "1hr",
                          "attributionWindow": "2hrs",
                          "winnerThreshold": "99%"
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "$ref": "../models/autotune.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Autotune Experiments created successfully.",
                      "data": {
                        "id": "button_color_test",
                        "isStarted": false,
                        "description": "Which color button gets the most clicks.",
                        "lastModifierID": "pqicjc739cna93nca",
                        "lastModifierName": "CONSOLE API",
                        "variants": [
                          {
                            "name": "red",
                            "json": {
                              "color": "red"
                            }
                          },
                          {
                            "name": "blue",
                            "json": {
                              "color": "blue"
                            }
                          }
                        ],
                        "successEvent": "click",
                        "successEventValue": "",
                        "explorationWindow": "1hr",
                        "attributionWindow": "2hrs",
                        "winnerThreshold": "99%"
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
          }
        }
      }
    },
    "/autotunes/{autotune_id}": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read a Single Autotune",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Autotune Experiment read successfully.",
                      "data": {
                        "id": "my_autotunes_are_best",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "variants": [
                          {
                            "name": "red",
                            "json": {
                              "foo": "boo"
                            }
                          },
                          {
                            "name": "blue",
                            "json": {}
                          }
                        ],
                        "successEvent": "purchase_item",
                        "successEventValue": "",
                        "explorationWindow": "1hr",
                        "attributionWindow": "2hrs",
                        "winnerThreshold": "99%"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/autotune.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Autotune Experiment read successfully.",
                      "data": {
                        "id": "my_autotunes_are_best",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "variants": [
                          {
                            "name": "red",
                            "json": {
                              "foo": "boo"
                            }
                          },
                          {
                            "name": "blue",
                            "json": {}
                          }
                        ],
                        "successEvent": "purchase_item",
                        "successEventValue": "",
                        "explorationWindow": "1hr",
                        "attributionWindow": "2hrs",
                        "winnerThreshold": "99%"
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
          },
          "404": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 404,
                      "message": "Autotune Experiment not found."
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
                      "message": "Autotune Experiment not found."
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "autotunes"
        ],
        "summary": "Delete Autotune",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Autotune Experiment deleted successfully."
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
                      "message": "Autotune Experiment deleted successfully."
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
                      "message": "Autotune Experiment not found."
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
                      "message": "Autotune Experiment not found."
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
          "autotunes"
        ],
        "summary": "Update Autotune",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Autotune Experiment read successfully.",
                      "data": {
                        "id": "my_autotunes_are_best",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "variants": [
                          {
                            "name": "red",
                            "json": {
                              "color": "red"
                            }
                          },
                          {
                            "name": "blue",
                            "json": {
                              "color": "blue"
                            }
                          }
                        ],
                        "successEvent": "purchase_item",
                        "successEventValue": "",
                        "explorationWindow": "1hr",
                        "attributionWindow": "2hrs",
                        "winnerThreshold": "99%"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/autotune.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Autotune Experiment read successfully.",
                      "data": {
                        "id": "my_autotunes_are_best",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "lastModifierName": "CONSOLE API",
                        "variants": [
                          {
                            "name": "red",
                            "json": {
                              "color": "red"
                            }
                          },
                          {
                            "name": "blue",
                            "json": {
                              "color": "blue"
                            }
                          }
                        ],
                        "successEvent": "purchase_item",
                        "successEventValue": "",
                        "explorationWindow": "1hr",
                        "attributionWindow": "2hrs",
                        "winnerThreshold": "99%"
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
                      "message": "Autotune Experiment not found."
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
                      "message": "Autotune Experiment not found."
                    }
                  }
                }
              }
            }
          }
        },
        "requestBody": {
          "$ref": "#/components/requestBodies/update_autotune"
        }
      },
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "autotune_id",
          "in": "path",
          "required": true,
          "description": "autotune id to query"
        }
      ]
    }
  }
}