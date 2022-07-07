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
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/segments": {
      "get": {
        "tags": [
          "segments"
        ],
        "summary": "Read All Segments",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segments listed successfully.",
                      "data": [
                        {
                          "id": "test",
                          "isEnabled": true,
                          "description": "test",
                          "lastModifierName": "Jacob O'Quinn",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
                          "type": "rule_based"
                        },
                        {
                          "id": "a_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "type": "id_list"
                        },
                        {
                          "id": "c_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "type": "id_list"
                        },
                        {
                          "id": "segment_test_2",
                          "isEnabled": true,
                          "description": "this is the second test",
                          "lastModifierName": "jacob ",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
                          "type": "rule_based"
                        },
                        {
                          "id": "segment_test",
                          "isEnabled": true,
                          "description": "a simple test ",
                          "lastModifierName": "jacob ",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
                          "type": "rule_based"
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
                      "description": "An array of segments",
                      "items": {
                        "$ref": "../models/segment.json"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segments listed successfully.",
                      "data": [
                        {
                          "id": "a_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "8dahjGcaRh92n9aoFaicW9",
                          "type": "id_list"
                        },
                        {
                          "id": "b_segment",
                          "isEnabled": true,
                          "description": "like a_segment but with a b instead",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "jFiia92hinDkcGaFijd0",
                          "type": "id_list"
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
          "segments"
        ],
        "summary": "Create Segment",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "example-1": {
                    "name": "a segment",
                    "description": "helpful summary of what this segment is",
                    "type": "id_list"
                  }
                },
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the new segment"
                  },
                  "description": {
                    "type": "string",
                    "description": "A brief summary of what the segment is being used for."
                  },
                  "type": {
                    "type": "string",
                    "enum": [
                      "id_list",
                      "rule_based"
                    ]
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "name": "a segment",
                    "description": "helpful summary of what this segment is",
                    "type": "id_list"
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
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list"
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
          }
        }
      }
    },
    "/segments/{segment_id}": {
      "get": {
        "tags": [
          "segments"
        ],
        "summary": "Read a Single Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
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
            "description": "Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "status": 404,
                      "message": "Segment not found."
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
                      "message": "Segment not found."
                    }
                  }
                }
              }
            }
          },
          "": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "$ref": "../models/segment.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list"
                      }
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
          "segments"
        ],
        "summary": "Delete Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment deleted successfully."
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
                      "message": "Segment deleted successfully."
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
                      "message": "Segment not found."
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
                      "message": "Segment not found."
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
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true,
          "description": "The segment id to query"
        }
      ]
    }
  }
}