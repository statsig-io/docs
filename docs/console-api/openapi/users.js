module.exports = {
  "openapi": "3.0.0",
  "x-stoplight": {
    "id": "xsirst36b2hjz"
  },
  "info": {
    "title": "https://statsigapi.net/console/v1",
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
                    "description": "update user's role. Can be one of 'Admin', 'Read Only', 'Member', or the name of any custom role."
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
    "/users/invite": {
      "post": {
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
        "description": "Invite a list of emails to your project. Note that console API does not send outgoing emails.",
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
                    "description": "Can be one of 'Admin', 'Read Only', 'Member', or the name of any custom role."
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
          "description": "Invited emails will be able to join the project with a selected role apon signing in. \nIf your project is in an organization, only email domains that match the organization's domain may be invited to the project. "
        }
      }
    },
    "/users/teams": {
      "get": {
        "summary": "List Teams",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Teams listed successfully.",
                      "data": [
                        {
                          "name": "123123",
                          "members": [],
                          "admins": [],
                          "defaultGateMetrics": [
                            {
                              "name": "1236",
                              "type": "user_warehouse"
                            }
                          ],
                          "defaultExperimentPrimaryMetrics": [
                            {
                              "name": "1236",
                              "type": "user_warehouse"
                            }
                          ],
                          "defaultExperimentSecondaryMetrics": [
                            {
                              "name": "1236",
                              "type": "user_warehouse"
                            }
                          ],
                          "defaultHoldoutMetrics": [
                            {
                              "name": "1236",
                              "type": "user_warehouse"
                            }
                          ],
                          "changeTeamConfigs": "anyone",
                          "reviewApproval": "team_only",
                          "defaultTargetApplications": [
                            "react-client"
                          ]
                        },
                        {
                          "name": "12312",
                          "members": [
                            {
                              "email": "nick@statsig.com",
                              "firstName": "Nick",
                              "lastName": "Jiang",
                              "role": "Owner"
                            }
                          ],
                          "admins": [
                            {
                              "email": "nick@statsig.com",
                              "firstName": "Nick",
                              "lastName": "Jiang",
                              "role": "Owner"
                            }
                          ],
                          "defaultGateMetrics": [],
                          "defaultExperimentPrimaryMetrics": [],
                          "defaultExperimentSecondaryMetrics": [],
                          "defaultHoldoutMetrics": [],
                          "changeTeamConfigs": "team_only",
                          "reviewApproval": "team_only",
                          "defaultTargetApplications": []
                        },
                        {
                          "name": "1231231",
                          "members": [
                            {
                              "email": "nick@statsig.com",
                              "firstName": "Nick",
                              "lastName": "Jiang",
                              "role": "Owner"
                            }
                          ],
                          "admins": [
                            {
                              "email": "nick@statsig.com",
                              "firstName": "Nick",
                              "lastName": "Jiang",
                              "role": "Owner"
                            }
                          ],
                          "defaultGateMetrics": [],
                          "defaultExperimentPrimaryMetrics": [],
                          "defaultExperimentSecondaryMetrics": [],
                          "defaultHoldoutMetrics": [],
                          "changeTeamConfigs": "anyone",
                          "reviewApproval": "team_only",
                          "defaultTargetApplications": []
                        }
                      ]
                    }
                  },
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "members": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/User"
                            }
                          },
                          "admins": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/User"
                            }
                          },
                          "defaultGateMetrics": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "defaultExperimentPrimaryMetrics": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "defaultExperimentSecondaryMetrics": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "defaultHoldoutMetrics": {
                            "type": "array",
                            "items": {
                              "type": "object",
                              "properties": {
                                "name": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              }
                            }
                          },
                          "changeTeamConfigs": {
                            "type": "string"
                          },
                          "reviewApproval": {
                            "type": "string"
                          },
                          "defaultTargetApplications": {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Teams listed successfully.",
                      "data": [
                        {
                          "name": "Team name",
                          "members": [
                            {
                              "email": "john@gmail.com",
                              "firstName": "John",
                              "lastName": "Adams",
                              "role": "Owner"
                            }
                          ],
                          "admins": [
                            {
                              "email": "john@gmail.com",
                              "firstName": "John",
                              "lastName": "Adams",
                              "role": "Owner"
                            }
                          ],
                          "defaultGateMetrics": [
                            {
                              "name": "clicks",
                              "type": "event_count"
                            }
                          ],
                          "defaultExperimentPrimaryMetrics": [
                            {
                              "name": "clicks",
                              "type": "event_count"
                            }
                          ],
                          "defaultExperimentSecondaryMetrics": [
                            {
                              "name": "clicks",
                              "type": "event_count"
                            }
                          ],
                          "defaultHoldoutMetrics": [
                            {
                              "name": "clicks",
                              "type": "event_count"
                            }
                          ],
                          "changeTeamConfigs": "anyone",
                          "reviewApproval": "team_only",
                          "defaultTargetApplications": [
                            "react-client"
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "get-users-teams",
        "x-stoplight": {
          "id": "o3vglh2xh70tr"
        },
        "tags": [
          "Teams (Enterprise only)"
        ]
      },
      "post": {
        "summary": "Create Team",
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "x-examples": {
                    "Example 1": {
                      "message": "Team updated successfully.",
                      "data": {
                        "name": "newteam",
                        "members": [
                          {
                            "email": "nick@statsig.com",
                            "firstName": "Nick",
                            "lastName": "Jiang",
                            "role": "Owner"
                          }
                        ],
                        "admins": [
                          {
                            "email": "nick@statsig.com",
                            "firstName": "Nick",
                            "lastName": "Jiang",
                            "role": "Owner"
                          }
                        ],
                        "defaultGateMetrics": [
                          {
                            "name": "1236",
                            "type": "user_warehouse"
                          }
                        ],
                        "defaultExperimentPrimaryMetrics": [
                          {
                            "name": "1236",
                            "type": "user_warehouse"
                          }
                        ],
                        "defaultExperimentSecondaryMetrics": [
                          {
                            "name": "1236",
                            "type": "user_warehouse"
                          }
                        ],
                        "defaultHoldoutMetrics": [
                          {
                            "name": "1236",
                            "type": "user_warehouse"
                          }
                        ],
                        "changeTeamConfigs": "anyone",
                        "reviewApproval": "team_only",
                        "defaultTargetApplications": [
                          "react-client"
                        ]
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
                        "name": {
                          "type": "string"
                        },
                        "members": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "email": {
                                "type": "string"
                              },
                              "firstName": {
                                "type": "string"
                              },
                              "lastName": {
                                "type": "string"
                              },
                              "role": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "admins": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "email": {
                                "type": "string"
                              },
                              "firstName": {
                                "type": "string"
                              },
                              "lastName": {
                                "type": "string"
                              },
                              "role": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultGateMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultExperimentPrimaryMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultExperimentSecondaryMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultExperimentSecondaryMetrics - copy": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultHoldoutMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "changeTeamConfigs": {
                          "type": "string",
                          "enum": [
                            "anyone",
                            "team_only"
                          ]
                        },
                        "reviewApproval": {
                          "type": "string",
                          "enum": [
                            "anyone",
                            "team_only",
                            "admin_only"
                          ]
                        },
                        "defaultTargetApplications": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Team created successfully.",
                      "data": {
                        "name": "new team",
                        "members": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "admins": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "defaultGateMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentPrimaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentSecondaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultHoldoutMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "changeTeamConfigs": "anyone",
                        "reviewApproval": "team_only",
                        "defaultTargetApplications": [
                          "react-client"
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "post-users-teams",
        "x-stoplight": {
          "id": "fhl5m5r7j1lhq"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "Example 1": {
                    "name": "newteam",
                    "members": [
                      "nick@statsig.com"
                    ],
                    "admins": [
                      "nick@statsig.com"
                    ],
                    "defaultGateMetrics": [
                      {
                        "name": "1236",
                        "type": "user_warehouse"
                      }
                    ],
                    "defaultExperimentPrimaryMetrics": [
                      {
                        "name": "1236",
                        "type": "user_warehouse"
                      }
                    ],
                    "defaultExperimentSecondaryMetrics": [
                      {
                        "name": "1236",
                        "type": "user_warehouse"
                      }
                    ],
                    "defaultHoldoutMetrics": [
                      {
                        "name": "1236",
                        "type": "user_warehouse"
                      }
                    ],
                    "changeTeamConfigs": "anyone",
                    "reviewApproval": "team_only",
                    "defaultTargetApplications": [
                      "react-client"
                    ]
                  }
                },
                "required": [
                  "name",
                  "members",
                  "admins",
                  "defaultHoldoutMetrics",
                  "changeTeamConfigs",
                  "reviewApproval",
                  "defaultTargetApplications"
                ],
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "members": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "admins": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "defaultGateMetrics": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "name",
                        "type"
                      ],
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "defaultExperimentSecondaryMetrics": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "name",
                        "type"
                      ],
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "defaultExperimentPrimaryMetrics": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "type",
                        "name"
                      ],
                      "properties": {
                        "type": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "defaultHoldoutMetrics": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "required": [
                        "name",
                        "type"
                      ],
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "changeTeamConfigs": {
                    "type": "string",
                    "enum": [
                      "anyone",
                      "team_only"
                    ]
                  },
                  "reviewApproval": {
                    "type": "string",
                    "enum": [
                      "anyone",
                      "team_only",
                      "admin_only"
                    ]
                  },
                  "defaultTargetApplications": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "name": "new team",
                    "members": [
                      "john@gmail.com"
                    ],
                    "admins": [
                      "john@gmail.com"
                    ],
                    "defaultGateMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultExperimentPrimaryMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultExperimentSecondaryMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultHoldoutMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "changeTeamConfigs": "anyone",
                    "reviewApproval": "team_only",
                    "defaultTargetApplications": [
                      "react-client"
                    ]
                  }
                }
              }
            }
          }
        },
        "tags": [
          "Teams (Enterprise only)"
        ]
      }
    },
    "/users/teams/{team_name}": {
      "parameters": [
        {
          "schema": {
            "type": "string"
          },
          "name": "team_name",
          "in": "path",
          "required": true
        },
        {
          "schema": {
            "type": "string"
          },
          "name": "team_name",
          "in": "path",
          "required": true
        }
      ],
      "patch": {
        "summary": "Partially Update Team",
        "tags": [
          "Teams (Enterprise only)"
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
                      "message": "Team created successfully.",
                      "data": {
                        "name": "new team",
                        "members": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "admins": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "defaultGateMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentPrimaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentSecondaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultHoldoutMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "changeTeamConfigs": "anyone",
                        "reviewApproval": "team_only",
                        "defaultTargetApplications": [
                          "react-client"
                        ]
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
                        "name": {
                          "type": "string"
                        },
                        "members": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/User"
                          }
                        },
                        "admins": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/User"
                          }
                        },
                        "defaultGateMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultExperimentPrimaryMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultExperimentSecondaryMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "defaultHoldoutMetrics": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "name": {
                                "type": "string"
                              },
                              "type": {
                                "type": "string"
                              }
                            }
                          }
                        },
                        "changeTeamConfigs": {
                          "type": "string",
                          "enum": [
                            "anyone",
                            "team_only"
                          ]
                        },
                        "reviewApproval": {
                          "type": "string",
                          "enum": [
                            "anyone",
                            "team_only",
                            "admin_only"
                          ]
                        },
                        "defaultTargetApplications": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      }
                    }
                  }
                },
                "examples": {
                  "Example 1": {
                    "value": {
                      "message": "Team updated successfully.",
                      "data": {
                        "name": "new team",
                        "members": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "admins": [
                          {
                            "email": "john@gmail.com",
                            "firstName": "John",
                            "lastName": "Adams",
                            "role": "Owner"
                          }
                        ],
                        "defaultGateMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentPrimaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultExperimentSecondaryMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "defaultHoldoutMetrics": [
                          {
                            "name": "clicks",
                            "type": "event_count"
                          }
                        ],
                        "changeTeamConfigs": "anyone",
                        "reviewApproval": "team_only",
                        "defaultTargetApplications": [
                          "react-client"
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "operationId": "patch-users-teams-team_name",
        "x-stoplight": {
          "id": "d0kzinv05v33d"
        },
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "x-examples": {
                  "Example 1": {
                    "message": "Team creaed successfully.",
                    "data": {
                      "name": "new team",
                      "members": [
                        {
                          "email": "john@gmail.com",
                          "firstName": "John",
                          "lastName": "Adams",
                          "role": "Owner"
                        }
                      ],
                      "admins": [
                        {
                          "email": "john@gmail.com",
                          "firstName": "John",
                          "lastName": "Adams",
                          "role": "Owner"
                        }
                      ],
                      "defaultGateMetrics": [
                        {
                          "name": "clicks",
                          "type": "event_count"
                        }
                      ],
                      "defaultExperimentPrimaryMetrics": [
                        {
                          "name": "clicks",
                          "type": "event_count"
                        }
                      ],
                      "defaultExperimentSecondaryMetrics": [
                        {
                          "name": "clicks",
                          "type": "event_count"
                        }
                      ],
                      "defaultHoldoutMetrics": [
                        {
                          "name": "clicks",
                          "type": "event_count"
                        }
                      ],
                      "changeTeamConfigs": "anyone",
                      "reviewApproval": "team_only",
                      "defaultTargetApplications": [
                        "react-client"
                      ]
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
                      "name": {
                        "type": "string"
                      },
                      "members": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/User"
                        }
                      },
                      "admins": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/User"
                        }
                      },
                      "defaultGateMetrics": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "defaultExperimentPrimaryMetrics": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "defaultExperimentSecondaryMetrics": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string"
                            },
                            "name": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "defaultHoldoutMetrics": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "type": {
                              "type": "string"
                            }
                          }
                        }
                      },
                      "changeTeamConfigs": {
                        "type": "string",
                        "enum": [
                          "anyone",
                          "team_only"
                        ]
                      },
                      "reviewApproval": {
                        "type": "string",
                        "enum": [
                          "anyone",
                          "team_only",
                          "admin_only"
                        ]
                      },
                      "defaultTargetApplications": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              },
              "examples": {
                "Example 1": {
                  "value": {
                    "name": "new team",
                    "members": [
                      "john@gmail.com"
                    ],
                    "admins": [
                      "john@gmail.com"
                    ],
                    "defaultGateMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultExperimentPrimaryMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultExperimentSecondaryMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "defaultHoldoutMetrics": [
                      {
                        "name": "clicks",
                        "type": "event_count"
                      }
                    ],
                    "changeTeamConfigs": "anyone",
                    "reviewApproval": "team_only",
                    "defaultTargetApplications": [
                      "react-client"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "User": {
        "title": "User",
        "x-stoplight": {
          "id": "f6r4g3anpc9iv"
        },
        "type": "object",
        "x-examples": {
          "example-1": {
            "email": "john@gmail.com",
            "firstName": "John",
            "lastName": "Adams",
            "role": "read_only"
          }
        },
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
            "example": "member"
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