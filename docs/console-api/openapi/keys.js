module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "9g1o8ywwcmfd1"
  },
  "info": {
    "title": "https://statsigapi.net/console/v1",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "paths": {
    "/keys/{id}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "id",
          "in": "path",
          "required": true
        }
      ],
      "get": {
        "summary": "Get Key",
        "tags": [
          "Keys"
        ],
        "responses": {
          "200": {
            "description": "User Found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "txd8g304tuec1"
                      },
                      "example": "Key read successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/Key"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "get-keys-id",
        "description": "Get a key.",
        "x-stoplight": {
          "id": "08r1ikm1jrna4"
        }
      },
      "delete": {
        "summary": "Delete a Key",
        "operationId": "delete-keys-id",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "oxrnf7hemo1av"
                      },
                      "example": "Key deleted successfully"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "x-stoplight": {
          "id": "ynhwhbla5sags"
        },
        "tags": [
          "Keys"
        ],
        "description": "Delete a key."
      },
      "patch": {
        "summary": "Update a Key",
        "tags": [
          "Keys"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "uiy6no04irbib"
                      },
                      "example": "Key updated successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/Key"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "patch-keys-id",
        "x-stoplight": {
          "id": "tcv1hdux6eni7"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "description"
                ],
                "properties": {
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "5v60vo5gz9waq"
                    },
                    "description": "Description of key"
                  },
                  "scopes": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "o9is9g0wp888l"
                    },
                    "description": "List of scopes",
                    "items": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "if6ecbif91jir"
                      },
                      "enum": [
                        "omni_read_only",
                        "omni_read_write",
                        "client_download_config_specs",
                        "none_hash_enabled"
                      ],
                      "example": "omni_read_write"
                    }
                  },
                  "targetAppID": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "l0b1oda00zakd"
                    },
                    "description": "Primary target app",
                    "example": "primaryApp"
                  },
                  "secondaryTargetAppIDs": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "gicnjda1tmx2y"
                    },
                    "description": "List of secondary target apps",
                    "items": {
                      "x-stoplight": {
                        "id": "lst419b0xpbsc"
                      },
                      "type": "string",
                      "example": "secondaryApp"
                    }
                  },
                  "environments": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "bqijx0740xt6z"
                    },
                    "description": "List of environments",
                    "example": "production"
                  }
                }
              },
              "examples": {}
            }
          }
        },
        "description": "Update a key."
      }
    },
    "/keys": {
      "post": {
        "summary": "Create Key",
        "operationId": "post-user",
        "responses": {
          "200": {
            "description": "Key Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "3lt4e2q51j78i"
                      },
                      "example": "Key created successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/Key"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          }
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "description",
                  "type",
                  "scopes"
                ],
                "properties": {
                  "description": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "rcg53uv8p2cx7"
                    },
                    "description": "Description of key"
                  },
                  "type": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "vthmsr4hiavcv"
                    },
                    "example": "SERVER",
                    "enum": [
                      "SERVER",
                      "CLIENT",
                      "CONSOLE"
                    ],
                    "description": "Type of key"
                  },
                  "scopes": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "17ut6chozn2ti"
                    },
                    "description": "List of scopes",
                    "items": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "jzyoiul0smp6f"
                      },
                      "enum": [
                        "omni_read_only",
                        "omni_read_write",
                        "client_download_config_specs",
                        "none_hash_enabled"
                      ],
                      "example": "omni_read_write"
                    }
                  },
                  "targetAppID": {
                    "type": "string",
                    "x-stoplight": {
                      "id": "bzsqchyzp31l6"
                    },
                    "description": "Primary target app",
                    "example": "primaryApp"
                  },
                  "secondaryTargetAppIDs": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "u6znogksf81p3"
                    },
                    "description": "List of secondary target apps",
                    "items": {
                      "x-stoplight": {
                        "id": "xai2bqihi3q30"
                      },
                      "type": "string",
                      "example": "secondaryApp"
                    }
                  },
                  "environments": {
                    "type": "array",
                    "x-stoplight": {
                      "id": "o1b07ljm03jxn"
                    },
                    "description": "List of environments",
                    "items": {
                      "x-stoplight": {
                        "id": "yl2nnj8cbpia5"
                      },
                      "type": "string",
                      "example": "production"
                    }
                  }
                }
              },
              "examples": {}
            }
          },
          "description": ""
        },
        "description": "Create a new key.",
        "x-stoplight": {
          "id": "fb7e9dr0rb3g4"
        },
        "tags": [
          "Keys"
        ]
      },
      "parameters": [],
      "get": {
        "summary": "List Keys",
        "tags": [
          "Keys"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "p1ta80at8no77"
                      },
                      "example": "Keys listed successfully"
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "ue0kx3ygatsch"
                      },
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/Key"
                        },
                        {
                          "type": "array",
                          "x-stoplight": {
                            "id": "aycenvggnk2hy"
                          },
                          "items": {
                            "$ref": "#/components/schemas/Key"
                          }
                        }
                      ]
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          }
        },
        "operationId": "get-keys",
        "x-stoplight": {
          "id": "r6u57eocaxpti"
        },
        "description": "Get list of all keys."
      }
    },
    "/keys/{id}/deactivate": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "id",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Deactivate Key",
        "tags": [
          "Keys"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "4rtynkuwofyfz"
                      },
                      "example": "Key deactivated successfully"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions"
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "patch-keys-id-deactivate",
        "x-stoplight": {
          "id": "h3tula67ny4nt"
        },
        "description": "Deactivate a key."
      }
    },
    "/keys/{id}/rotate": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "id",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Rotate Key",
        "tags": [
          "Keys"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "bj47yelbyvqef"
                      },
                      "example": "Key rotated successfully"
                    },
                    "data": {
                      "$ref": "#/components/schemas/Key"
                    }
                  }
                },
                "examples": {}
              }
            }
          },
          "403": {
            "description": "Insufficient permissions",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "x-stoplight": {
                        "id": "e1je7wyabpcfy"
                      },
                      "example": "Key rotated successfully"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found"
          }
        },
        "operationId": "patch-keys-id-rotate",
        "x-stoplight": {
          "id": "4b0g56wz7z5nu"
        },
        "description": "Rotate a key. (WARNING: will take effect immediately. Old key will no longer work)"
      }
    }
  },
  "components": {
    "schemas": {
      "Key": {
        "title": "Key",
        "type": "object",
        "x-examples": {
          "Example 1": {
            "key": "server-123",
            "type": "SERVER",
            "description": "Example description",
            "scopes": [
              "omni_read_only"
            ],
            "environments": [
              "production"
            ],
            "targetAppID": "12345"
          }
        },
        "x-stoplight": {
          "id": "68zqo2e0zngms"
        },
        "x-tags": [
          "Keys"
        ],
        "required": [
          "type",
          "description",
          "scopes"
        ],
        "properties": {
          "key": {
            "type": "string",
            "x-stoplight": {
              "id": "o5i8acav1g5fp"
            },
            "description": "Key value",
            "example": "server-123"
          },
          "type": {
            "type": "string",
            "x-stoplight": {
              "id": "ljjph6acf4c9a"
            },
            "description": "Type of key",
            "example": "SERVER",
            "enum": [
              "SERVER",
              "CLIENT",
              "CONSOLE"
            ]
          },
          "description": {
            "type": "string",
            "x-stoplight": {
              "id": "3a2242782e1xd"
            },
            "description": "Description of key",
            "example": "Example description"
          },
          "scopes": {
            "type": "array",
            "x-stoplight": {
              "id": "ylnfhhagr8oov"
            },
            "description": "List of scopes",
            "items": {
              "type": "string",
              "x-stoplight": {
                "id": "8ncfaplbv1pwu"
              },
              "enum": [
                "omni_read_only",
                "omni_read_write",
                "client_download_config_specs",
                "none_hash_enabled",
                "can_access_keys"
              ],
              "example": "omni_read_write",
              "default": "omni_read_write"
            }
          },
          "environments": {
            "type": "array",
            "x-stoplight": {
              "id": "lwyui31an1ilp"
            },
            "description": "List of environments",
            "items": {
              "x-stoplight": {
                "id": "ohy0l5jpg3vvh"
              },
              "type": "string",
              "example": "production"
            }
          },
          "primaryTargetApp": {
            "type": "string",
            "x-stoplight": {
              "id": "lvtp2mj1grbuh"
            },
            "description": "Primary target app",
            "example": "primaryApp"
          },
          "secondaryTargetApps": {
            "type": "array",
            "x-stoplight": {
              "id": "zaegxv2genlpd"
            },
            "description": "List of secondary target apps",
            "items": {
              "x-stoplight": {
                "id": "3f42v5du4zzx6"
              },
              "type": "string",
              "example": "secondaryApp"
            }
          }
        }
      }
    }
  },
  "tags": [
    {
      "name": "Keys"
    }
  ]
}