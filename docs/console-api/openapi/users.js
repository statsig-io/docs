module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "0f7f8wu4j7re3"
  },
  "info": {
    "title": "console/v1",
    "version": "1.0",
    "description": "Users Endpoint"
  },
  "servers": [
    {
      "url": "https://statsigapi.net/console/v1"
    }
  ],
  "paths": {
    "/users/{user_email}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "user_email",
          "in": "path",
          "required": true,
          "description": "The email of the user to query"
        }
      ],
      "get": {
        "summary": "Read Single User",
        "tags": [
          "Users"
        ],
        "operationId": "get-users-userId",
        "description": "Get the information for a single user by email",
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
                      "type": "object",
                      "properties": {
                        "email": {
                          "type": "string",
                          "example": "john@gmail.com"
                        },
                        "firstName": {
                          "type": "string",
                          "example": "John"
                        },
                        "lastName": {
                          "type": "string",
                          "example": "Adams"
                        },
                        "role": {
                          "type": "string",
                          "enum": [
                            "read_only",
                            "member",
                            "admin"
                          ],
                          "example": "member"
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "User read successfully.",
                      "data": {
                        "email": "john@gmail.com",
                        "firstName": "John",
                        "lastName": "Adams",
                        "role": "read_only"
                      }
                    }
                  },
                  "example-2": {
                    "value": {
                      "message": "User read successfully.",
                      "data": {
                        "email": "bobby@gmail.com",
                        "firstName": "bobby",
                        "lastName": "smith",
                        "role": "admin"
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
            "$ref": "#/components/responses/noUserFound"
          }
        }
      },
      "post": {
        "summary": "Update User Information",
        "operationId": "post-users-userId",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "User updated successfully.",
                      "data": {
                        "email": "jacob@statsig.com",
                        "firstName": "jacoba",
                        "lastName": "O'Quinn",
                        "role": "admin"
                      }
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    },
                    "data": {
                      "type": "object",
                      "properties": {
                        "email": {
                          "type": "string"
                        },
                        "firstName": {
                          "type": "string",
                          "example": "John"
                        },
                        "lastName": {
                          "type": "string",
                          "example": "Adams"
                        },
                        "role": {
                          "type": "string",
                          "enum": [
                            "read_only",
                            "member",
                            "admin"
                          ],
                          "example": "admin"
                        }
                      }
                    }
                  },
                  "required": [
                    "message",
                    "data"
                  ]
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "User updated successfully.",
                      "data": {
                        "email": "john@gmail.com",
                        "firstName": "John",
                        "lastName": "Adams",
                        "role": "admin"
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
                  "properties": {
                    "status": {
                      "type": "integer"
                    },
                    "message": {
                      "type": "string"
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
                  },
                  "x-examples": {
                    "Example 1": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "role",
                          "errorMessage": "Invalid enum value. Expected 'admin' | 'member' | 'read_only', received 'bob'"
                        }
                      ]
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
                          "property": "role",
                          "errorMessage": "Invalid enum value. Expected 'admin' | 'member' | 'read_only', received 'omni'"
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
            "$ref": "#/components/responses/noUserFound"
          }
        },
        "description": "Update the information of an existing user.",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "Example 1": {
                    "email": "jacob@statsig.com",
                    "firstName": "jacoba",
                    "lastName": "O'Quinn",
                    "role": "admin"
                  }
                },
                "properties": {
                  "role": {
                    "type": "string",
                    "enum": [
                      "read_only",
                      "member",
                      "admin"
                    ],
                    "description": "update user's role"
                  },
                  "firstName": {
                    "type": "string",
                    "description": "update user's first name"
                  },
                  "lastName": {
                    "type": "string",
                    "description": "update user's last name"
                  }
                }
              },
              "examples": {
                "example-1": {
                  "value": {
                    "role": "read_only",
                    "firstName": "John",
                    "lastName": "Adams"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Users"
        ]
      }
    },
    "/users": {
      "get": {
        "summary": "Read All Users",
        "operationId": "get-user",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "User listed successfully.",
                      "data": [
                        {
                          "email": "jacob@statsig.com",
                          "firstName": "jacob",
                          "lastName": "O'Quinn",
                          "role": "admin"
                        },
                        {
                          "email": "joe@statsig.com",
                          "firstName": "Joe",
                          "lastName": "Zeng",
                          "role": "admin"
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
                      "items": {
                        "$ref": "#/components/schemas/User"
                      }
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "User listed successfully.",
                      "data": [
                        {
                          "email": "john@gmail.com",
                          "firstName": "John",
                          "lastName": "Adams",
                          "role": "read_only"
                        },
                        {
                          "email": "bobby@gmail.com",
                          "firstName": "Bobby",
                          "lastName": "Smith",
                          "role": "admin"
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
                }
              }
            }
          }
        },
        "tags": [
          "Users"
        ],
        "description": "List all users in the project"
      },
      "parameters": []
    },
    "/users/invites": {
      "get": {
        "summary": "Invite To Project",
        "tags": [
          "Users"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Users Invited successfully"
                    }
                  },
                  "properties": {
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "examples": {
                  "Success": {
                    "value": {
                      "message": "Users Invited successfully"
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
                    "Example 1": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "role",
                          "errorMessage": "Invalid enum value. Expected 'admin' | 'member' | 'read_only', received 'asdf'"
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
                  "Invalid Role": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "role",
                          "errorMessage": "Invalid enum value. Expected 'admin' | 'member' | 'read_only', received 'not_a_real_role'"
                        }
                      ]
                    }
                  },
                  "Invalid Email": {
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "emails.0",
                          "errorMessage": "Invalid email"
                        }
                      ]
                    }
                  },
                  "Invalid email domain on organization": {
                    "value": {
                      "status": 400,
                      "message": "Can not invite emails from outside your organization's domain (statsig.com) using the ConsoleAPI, recieved: invalid@outsideDomain.com"
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
                  "Example 1": {
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
        "operationId": "get-users-invites",
        "description": "Invite a list of emails to your project",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "Example 1": {
                    "role": "member",
                    "emails": [
                      "jacob@statsig.com",
                      "joe@statsig.com"
                    ]
                  }
                },
                "properties": {
                  "role": {
                    "type": "string",
                    "enum": [
                      "read_only",
                      "member",
                      "admin"
                    ]
                  },
                  "emails": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "example": "john@mydomain.com",
                      "format": "email"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "role": "read_only",
                    "emails": [
                      "john@mydomain.com"
                    ]
                  }
                }
              }
            }
          },
          "description": "Invite emails to your project with a selected role. \nIf your project is in an organization, only email domains that match the organization's domain may be invited. "
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "title": "User",
        "x-stoplight": {
          "id": "od759i65teq1z"
        },
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "example": "john@gmail.com"
          },
          "firstName": {
            "type": "string",
            "example": "John"
          },
          "lastName": {
            "type": "string",
            "example": "Adams"
          },
          "role": {
            "type": "string",
            "enum": [
              "read_only",
              "member",
              "admin"
            ],
            "example": "member"
          }
        },
        "x-examples": {
          "example-1": {
            "email": "john@gmail.com",
            "firstName": "John",
            "lastName": "Adams",
            "role": "read_only"
          }
        }
      }
    },
    "responses": {
      "userResponse": {
        "description": "Example response",
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "x-examples": {
                "Example 1": {
                  "message": "User updated successfully.",
                  "data": {
                    "email": "john@gmail.com",
                    "firstName": "John",
                    "lastName": "Adams",
                    "role": "admin"
                  }
                }
              },
              "properties": {
                "message": {
                  "$ref": "../models/message.json"
                },
                "data": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "example": "John@gmail.com"
                    },
                    "firstName": {
                      "type": "string",
                      "example": "John"
                    },
                    "lastName": {
                      "type": "string",
                      "example": "Adams"
                    },
                    "role": {
                      "type": "string",
                      "enum": [
                        "read_only",
                        "member",
                        "admin"
                      ],
                      "example": "member"
                    }
                  }
                }
              }
            },
            "examples": {
              "example-1": {
                "value": {
                  "message": "string",
                  "data": {
                    "email": "John@gmail.com",
                    "firstName": "John",
                    "lastName": "Adams",
                    "role": "read_only"
                  }
                }
              }
            }
          }
        }
      },
      "noUserFound": {
        "description": "Example response",
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
                "Example 1": {
                  "status": 404,
                  "message": "No user identified"
                }
              }
            },
            "examples": {
              "example-1": {
                "value": {
                  "status": 404,
                  "message": "No user identified"
                }
              }
            }
          }
        }
      }
    },
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "name": "STATSIG-API-KEY",
        "type": "apiKey",
        "in": "header"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ]
}