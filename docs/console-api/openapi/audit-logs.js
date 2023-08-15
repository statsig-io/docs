module.exports = {
  "openapi": "3.0.0",
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
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    },
    "schemas": {
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/audit_logs": {
      "get": {
        "tags": [
          "Audit Logs"
        ],
        "summary": "Read Audit Logs",
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
                      "description": "Array of existing Audit Logs",
                      "items": {
                        "$ref": "../models/audit_log.json"
                      }
                    },
                    "pagination": {
                      "$ref": "../models/pagination.json"
                    }
                  }
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "message": "Audit logs listed successfully.",
                      "data": [
                        {
                          "id": "25KPZcLjTY7AS1uZdBolPZ",
                          "name": "test_gate_1",
                          "changeLog": "Created Gate",
                          "actionType": "gate_create",
                          "date": "Mon Sep 26 2022",
                          "time": "23:46:14 GMT+0000 (Coordinated Universal Time)",
                          "updatedBy": "Jane Doe",
                          "updatedByUserID": "4eoDlYj7svJixZfDsYSn",
                          "changes": {
                            "rules": {
                              "new": [
                                {
                                  "groupName": "test",
                                  "percentagePass": 100,
                                  "conditionJSON": [
                                    {
                                      "conditionType": 1,
                                      "operator": 0,
                                      "value": [
                                        "1"
                                      ],
                                      "extraConfig": {}
                                    }
                                  ],
                                  "returnValueJSON": "true",
                                  "id": "BfGswoMDcsZ4y9Le1d9O",
                                  "salt": "8df8n90p-d9bj-1l23-c9bl-1m022n9bzps8",
                                  "environment": "production",
                                  "rollouts": [],
                                  "enabledEnvironments": [
                                    "development",
                                    "staging",
                                    "production"
                                  ]
                                }
                              ],
                              "old": [
                                {
                                  "groupName": "test",
                                  "percentagePass": 100,
                                  "conditionJSON": [
                                    {
                                      "conditionType": 1,
                                      "operator": 0,
                                      "value": [
                                        "1"
                                      ],
                                      "extraConfig": {}
                                    }
                                  ],
                                  "returnValueJSON": "true",
                                  "id": "BfGswoMDcsZ4y9Le1d9O",
                                  "salt": "8df8n90p-d9bj-1l23-c9bl-1m022n9bzps8",
                                  "environment": "production",
                                  "rollouts": [],
                                  "enabledEnvironments": [
                                    "development",
                                    "staging"
                                  ]
                                }
                              ]
                            }
                          }
                        },
                        {
                          "id": "19LZJaPtCM4GT1sUbWlqVC",
                          "name": "check_employee",
                          "changeLog": "Removed Tag from Config",
                          "actionType": "config_remove_tag",
                          "date": "Mon Sep 26 2022",
                          "time": "21:25:22 GMT+0000 (Coordinated Universal Time)",
                          "updatedBy": "John Doe",
                          "updatedByUserID": "fd7dWH15Ddncvl3xhVLH",
                          "changes": {}
                        },
                        {
                          "id": "76LGVrItCR9WE1iDfNmpHT",
                          "name": "check_employee",
                          "changeLog": "Removed Tag from Config",
                          "actionType": "config_remove_tag",
                          "date": "Mon Sep 26 2022",
                          "time": "21:25:18 GMT+0000 (Coordinated Universal Time)",
                          "updatedBy": "John Doe",
                          "updatedByUserID": "fd7dWH15Ddncvl3xhVLH",
                          "changes": {}
                        }
                      ],
                      "pagination": {
                        "itemsPerPage": 3,
                        "pageNumber": 2,
                        "totalItems": 829,
                        "nextPage": "statsigapi.net/console/v1/audit_logs?page=3&limit=3",
                        "previousPage": "statsigapi.net/console/v1/audit_logs?page=1&limit=3",
                        "all": "statsigapi.net/console/v1/audit_logs"
                      }
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Not Found",
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
                  "example": 45
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
                  "type": "object",
                  "properties": {
                    "status": {
                      "$ref": "../models/status.json"
                    },
                    "message": {
                      "$ref": "../models/message.json"
                    }
                  }
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                },
                "examples": {
                  "example-1": {
                    "value": {
                      "status": 404,
                      "message": "Audit log not found"
                    }
                  }
                }
              }
            }
          }
        },
        "description": ""
      },
      "parameters": [
        {
          "schema": {
            "type": "string",
            "example": "example_audit_log"
          },
          "name": "id",
          "in": "query",
          "required": false,
          "description": "The name of audit log the to be queried"
        },
        {
          "schema": {
            "type": "number",
            "example": 5
          },
          "name": "limit",
          "in": "query",
          "required": false,
          "description": "The number of items per page to return"
        },
        {
          "schema": {
            "type": "number",
            "example": 1
          },
          "name": "page",
          "in": "query",
          "required": false,
          "description": "The page number to return"
        },
        {
          "schema": {
            "type": "string",
            "example": "time"
          },
          "name": "sortKey",
          "in": "query",
          "required": false,
          "description": "The key to sort by (default is time)"
        },
        {
          "schema": {
            "type": "string",
            "example": "desc"
          },
          "name": "sortOrder",
          "in": "query",
          "required": false,
          "description": "The order to sort in (default is desc)"
        },
        {
          "schema": {
            "type": "string",
            "example": "25KPZcLjTY7AS1uZdBolPZ"
          },
          "name": "latestID",
          "in": "query",
          "required": false,
          "description": "If specified, returns up to the specified audit log (exclusive) "
        }
      ]
    }
  }
}