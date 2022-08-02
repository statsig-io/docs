module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "95941d9430eba"
  },
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
              "description": "Autotune object",
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
                    "1",
                    "24",
                    "48",
                    "1hr",
                    "24hr",
                    "48hr",
                    "1hrs",
                    "24hrs",
                    "48hrs"
                  ],
                  "description": "The initial time period where Autotune will equally split the traffic."
                },
                "attributionWindow": {
                  "type": "string",
                  "enum": [
                    "1",
                    "2",
                    "4",
                    "24",
                    "1hr",
                    "2hr",
                    "4hr",
                    "24hr",
                    "1hrs",
                    "2hrs",
                    "4hrs",
                    "24hrs"
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
        },
        "description": "Request body expects an Autotune object"
      }
    },
    "schemas": {
      "description": {
        "title": "description",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
        "type": "string",
        "description": "A helpful description of what this autotune does.",
        "x-examples": {
          "example-1": "A helpful description of what this autotune does."
        }
      },
      "variants": {
        "title": "variants",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
        "type": "array",
        "description": "Array of Variant Objects",
        "items": {
          "$ref": "../models/variant.json"
        }
      },
      "successEvent": {
        "title": "successEvent",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
        "type": "string",
        "description": "The event you are trying to optimize for."
      },
      "explorationWindow": {
        "title": "explorationWindow",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
        "type": "string",
        "enum": [
          "1",
          "24",
          "48",
          "1hr",
          "24hr",
          "48hr",
          "1hrs",
          "24hrs",
          "48hrs"
        ],
        "description": "The initial time period where Autotune will equally split the traffic."
      },
      "attributionWindow": {
        "title": "attributionWindow",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
        "type": "string",
        "enum": [
          "1",
          "2",
          "4",
          "24",
          "1hr",
          "2hr",
          "4hr",
          "24hr",
          "1hrs",
          "2hrs",
          "4hrs",
          "24hrs"
        ],
        "description": "The maximum duration between the exposure and success event that counts as a success."
      },
      "winnerThreshold": {
        "title": "winnerThreshold",
        "x-stoplight": {
          "id": "179oi5srnx6dj"
        },
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
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/autotunes": {
      "get": {
        "tags": [
          "Autotunes"
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
                          "lastModifierID": "ajv762klv9nx9hca",
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
                          "lastModifierID": "ajv762klv9nx9hca",
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
          "Autotunes"
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
          },
          "description": "Request body expects an Autotune object"
        },
        "responses": {
          "200": {
            "description": "Successful response. Returns a message and the newly created Autotune object",
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
                          "lastModifierID": "ajv762klv9nx9hca",
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
                          "lastModifierID": "ajv762klv9nx9hca",
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
                        "lastModifierID": "ajv762klv9nx9hca",
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
          "Autotunes"
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
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
          "Autotunes"
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
          "Autotunes"
        ],
        "summary": "Fully Update Autotune",
        "responses": {
          "200": {
            "description": "Successful response. Returns a message and the newly created Autotune object",
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
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
        },
        "description": "Update all properties of the experiment"
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_autotune"
          },
          "name": "autotune_id",
          "in": "path",
          "required": true,
          "description": "autotune id to query"
        }
      ],
      "patch": {
        "summary": "Partially Update Autotune",
        "operationId": "patch-autotunes-autotune_id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Autotune Experiment updated successfully.",
                      "data": {
                        "id": "a_autotune",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
                      "message": "Autotune Experiment updated successfully.",
                      "data": {
                        "id": "a_autotune",
                        "isStarted": false,
                        "description": "helpful summary of what this Aututune is",
                        "lastModifierID": "jd93DGSnvkauH9FijdGiajh",
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
                          "property": "description",
                          "errorMessage": "Expected string, received boolean"
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
                      "items": {
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
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "description",
                          "errorMessage": "Expected string, received boolean"
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
        "description": "Update selected properties of the experiment",
        "requestBody": {
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
                    "$ref": "#/components/schemas/description"
                  },
                  "variants": {
                    "$ref": "#/components/schemas/variants"
                  },
                  "successEvent": {
                    "$ref": "#/components/schemas/successEvent"
                  },
                  "explorationWindow": {
                    "$ref": "#/components/schemas/explorationWindow"
                  },
                  "attributionWindow": {
                    "$ref": "#/components/schemas/attributionWindow"
                  },
                  "winnerThreshold": {
                    "$ref": "#/components/schemas/winnerThreshold"
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
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
                "example-2": {
                  "value": {
                    "description": "Just update the description"
                  }
                },
                "example-3": {
                  "value": {
                    "explorationWindow": "34hr",
                    "attributionWindow": "24hr",
                    "winnerThreshold": "90%"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Autotunes"
        ]
      }
    }
  }
}