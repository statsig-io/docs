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
              },
              "required": [
                "status",
                "message"
              ]
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
    },
    "requestBodies": {}
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
          "Segments"
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
                          "type": "id_list",
                          "count": 0
                        },
                        {
                          "id": "c_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "type": "id_list",
                          "count": 0
                        },
                        {
                          "id": "segment_test_2",
                          "isEnabled": true,
                          "description": "this is the second test",
                          "lastModifierName": "jacob ",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
                          "type": "rule_based",
                          "rules": []
                        },
                        {
                          "id": "segment_test",
                          "isEnabled": true,
                          "description": "a simple test ",
                          "lastModifierName": "jacob ",
                          "lastModifierID": "wsJTGUMTimICpPESo2DYg",
                          "type": "rule_based",
                          "rules": []
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
                  "Id list segments": {
                    "value": {
                      "message": "Segments listed successfully.",
                      "data": [
                        {
                          "id": "a_segment",
                          "isEnabled": true,
                          "description": "helpful summary of what this segment is",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "8dahjGcaRh92n9aoFaicW9",
                          "type": "id_list",
                          "count": 0
                        },
                        {
                          "id": "b_segment",
                          "isEnabled": true,
                          "description": "like a_segment but with a b instead",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "jFiia92hinDkcGaFijd0",
                          "type": "id_list",
                          "count": 0
                        }
                      ]
                    }
                  },
                  "Rule based segment": {
                    "value": {
                      "message": "Rules successfully updated",
                      "data": [
                        {
                          "id": "a_segment",
                          "isEnabled": true,
                          "description": "a rule_based segment",
                          "lastModifierName": "CONSOLE API",
                          "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                          "type": "rule_based",
                          "rules": [
                            {
                              "name": "check a field",
                              "passPercentage": 10,
                              "conditions": [
                                {
                                  "type": "custom_field",
                                  "targetValue": [
                                    "31"
                                  ],
                                  "operator": "any",
                                  "field": "field_to_check"
                                }
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
          "Segments"
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
                    "type": "id_list",
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
                        "type": "id_list",
                        "count": 0
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
                  "id list": {
                    "value": {
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list",
                        "count": 0
                      }
                    }
                  },
                  "rule based": {
                    "value": {
                      "message": "Segment created successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list",
                        "rules": []
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
        },
        "description": ""
      }
    },
    "/segments/{segment_id}": {
      "get": {
        "tags": [
          "Segments"
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
                        "type": "id_list",
                        "count": 0
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
                  "id list": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "id_list",
                        "count": 0
                      }
                    }
                  },
                  "rule based": {
                    "value": {
                      "message": "Segment read successfully.",
                      "data": {
                        "id": "a_segment",
                        "isEnabled": true,
                        "description": "helpful summary of what this segment is",
                        "lastModifierName": "CONSOLE API",
                        "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                        "type": "rule_based",
                        "rules": []
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
                        "type": "id_list",
                        "count": 0
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
                        "type": "id_list",
                        "count": 0
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
          "Segments"
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
            "$ref": "#/components/responses/404"
          }
        }
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "a_segment"
          },
          "name": "segment_id",
          "in": "path",
          "required": true,
          "description": "The segment id to query"
        }
      ]
    },
    "/segments/{segment_id}/id_list": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Add IDs to Segment",
        "operationId": "patch-segments-segment_id-id_list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment ids updated successfully."
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "message"
                  ]
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Segment ids updated successfully."
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
                      "message": "Segment must be of type 'id_list' to be modified"
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
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
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
        "tags": [
          "Segments"
        ],
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "description": "Array of IDs to add to segment",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "ids"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "ids": [
                      "user-1",
                      "user-2"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "Remove IDs from Segment",
        "operationId": "delete-segments-segment_id-id_list",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "example-1": {
                      "message": "Segment ids deleted successfully."
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
                      "message": "Segment ids deleted successfully."
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
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
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
                      "message": "Segment must be of type 'id_list' to be modified on this endpoint"
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
        "tags": [
          "Segments"
        ],
        "description": "",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "description": "Array of IDs to remove from segment",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "required": [
                  "ids"
                ]
              },
              "examples": {
                "example-1": {
                  "value": {
                    "ids": [
                      "user-1",
                      "user-2"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    },
    "/segments/{segment_id}/conditional": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "summary": "Update Segment Rules",
        "operationId": "post-segments-segment_id-conditional",
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
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Rules successfully updated"
                    }
                  }
                }
              },
              "application/xml": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": "{\n    \"message\": \"Rules successfully updated\"\n}"
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
                      "type": "integer"
                    },
                    "message": {
                      "type": "string"
                    }
                  },
                  "x-examples": {
                    "example-1": {
                      "status": 400,
                      "message": "Segment must be of type 'rule_based' to be modified"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 400,
                      "message": "Segment must be of type 'rule_based' to be modified on this endpoint"
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
            "$ref": "#/components/responses/404"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "passPercentage": {
                      "type": "integer"
                    },
                    "conditions": {
                      "type": "array",
                      "items": {
                        "$ref": "../models/condition.json"
                      }
                    }
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": [
                    {
                      "name": "App version check",
                      "passPercentage": 10,
                      "conditions": [
                        {
                          "type": "app_version",
                          "operator": "version_gt",
                          "targetValue": [
                            "1.1.1"
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
        "description": "",
        "tags": [
          "Segments"
        ]
      }
    },
    "/segments/{segment_id}/id_list/reset": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "segment_id",
          "in": "path",
          "required": true
        }
      ],
      "post": {
        "tags": [
          "Segments"
        ],
        "summary": "",
        "operationId": "post-segments-segment_id-id_list-reset",
        "responses": {
          "200": {
            "description": "OK"
          }
        },
        "description": "Upsert an id list",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "ids": {
                    "type": "array",
                    "items": {}
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