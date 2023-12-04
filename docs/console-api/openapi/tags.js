module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "1nnoljtcp2fp4"
  },
  "info": {
    "title": "https://statsigapi.net/console/v1",
    "version": "1.0.0",
    "description": ""
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
                  "message": "Tag not found."
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
                  "message": "Tag not found."
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
    "/tags": {
      "get": {
        "summary": "Read All Tags",
        "tags": [
          "Tags"
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
                      "x-stoplight": {
                        "id": "bdxm20ggxgeb8"
                      },
                      "type": "string",
                      "example": "Tags listed successfully"
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "ap3zrjjv3ose4"
                      },
                      "anyOf": [
                        {
                          "$ref": "../models/tag.json"
                        },
                        {
                          "type": "array",
                          "x-stoplight": {
                            "id": "wx6dieixgjmjz"
                          },
                          "uniqueItems": true,
                          "items": {
                            "$ref": "../models/tag.json"
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "404": {
            "$ref": "#/components/responses/404",
            "description": "Not Found"
          }
        },
        "operationId": "get-tags",
        "x-stoplight": {
          "id": "txi2jg64qm810"
        },
        "requestBody": {
          "content": {}
        }
      },
      "post": {
        "summary": "Create Tag",
        "tags": [
          "Tags"
        ],
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
                      "type": "string",
                      "x-stoplight": {
                        "id": "297ag2tzwkvpo"
                      },
                      "example": "Tag created successfully"
                    },
                    "data": {
                      "x-stoplight": {
                        "id": "nuqd2ew0wxrhk"
                      },
                      "anyOf": [
                        {
                          "$ref": "../models/tag.json"
                        },
                        {
                          "type": "array",
                          "x-stoplight": {
                            "id": "j3u54doybmw3i"
                          },
                          "items": {
                            "$ref": "../models/tag.json"
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "post-tags",
        "x-stoplight": {
          "id": "5hpk219v6vwhz"
        },
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "name",
            "description": "The display name to give the new tag"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "description",
            "description": "A description of this tag"
          },
          {
            "schema": {
              "type": "boolean"
            },
            "in": "query",
            "name": "isCore",
            "description": "Whether or not this tag is a core tag"
          }
        ]
      }
    }
  }
}
