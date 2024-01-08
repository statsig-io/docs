module.exports = {
  "openapi": "3.0.0",
  "info": {
      "title": "Console API",
      "version": "1.0.0"
  },
  "components": {
      "schemas": {
          "PaginationResponseMetadataSchema": {
              "type": "object",
              "properties": {
                  "itemsPerPage": {
                      "type": "number"
                  },
                  "pageNumber": {
                      "type": "number"
                  },
                  "nextPage": {
                      "type": [
                          "string",
                          "null"
                      ]
                  },
                  "previousPage": {
                      "type": [
                          "string",
                          "null"
                      ]
                  },
                  "totalItems": {
                      "type": "number"
                  },
                  "all": {
                      "type": "string"
                  }
              },
              "required": [
                  "itemsPerPage",
                  "pageNumber",
                  "nextPage",
                  "previousPage"
              ]
          },
          "GateSchema": {
              "anyOf": [
                  {
                      "type": "object",
                      "properties": {
                          "id": {
                              "type": "string"
                          },
                          "name": {
                              "type": "string"
                          },
                          "idType": {
                              "type": "string"
                          },
                          "description": {
                              "type": "string"
                          },
                          "lastModifierID": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "lastModifiedTime": {
                              "type": [
                                  "number",
                                  "null"
                              ]
                          },
                          "lastModifierEmail": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "lastModifierName": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "creatorID": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "createdTime": {
                              "type": "number"
                          },
                          "creatorName": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "creatorEmail": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "tags": {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              }
                          },
                          "targetApps": {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              }
                          },
                          "holdoutIDs": {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              }
                          }
                      },
                      "required": [
                          "id",
                          "idType",
                          "description",
                          "lastModifierID",
                          "lastModifiedTime",
                          "lastModifierEmail",
                          "lastModifierName",
                          "creatorID",
                          "createdTime",
                          "creatorName",
                          "creatorEmail"
                      ]
                  },
                  {
                      "type": "object",
                      "properties": {
                          "idType": {
                              "type": "string"
                          },
                          "checksPerHour": {
                              "type": [
                                  "number",
                                  "null"
                              ]
                          },
                          "status": {
                              "type": "string",
                              "enum": [
                                  "In Progress",
                                  "Launched",
                                  "Disabled",
                                  "Archived"
                              ]
                          },
                          "type": {
                              "type": "string",
                              "enum": [
                                  "TEMPORARY",
                                  "PERMANENT",
                                  "STALE"
                              ]
                          },
                          "typeReason": {
                              "type": "string",
                              "enum": [
                                  "NONE",
                                  "STALE_PROBABLY_LAUNCHED",
                                  "STALE_PROBABLY_UNLAUNCHED",
                                  "STALE_PROBABLY_FORGOTTEN",
                                  "STALE_NO_RULES",
                                  "STALE_PROBABLY_DEAD_CHECK"
                              ]
                          }
                      },
                      "required": [
                          "idType",
                          "checksPerHour",
                          "status",
                          "type",
                          "typeReason"
                      ]
                  },
                  {
                      "type": "object",
                      "properties": {
                          "isEnabled": {
                              "type": "boolean"
                          },
                          "description": {
                              "type": "string",
                              "maxLength": 1000
                          },
                          "rules": {
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "name": {
                                          "type": "string"
                                      },
                                      "passPercentage": {
                                          "type": "number",
                                          "minimum": 0,
                                          "maximum": 100
                                      },
                                      "conditions": {
                                          "type": "array",
                                          "items": {
                                              "type": "object",
                                              "properties": {
                                                  "targetValue": {
                                                      "anyOf": [
                                                          {
                                                              "type": "array",
                                                              "items": {
                                                                  "type": "string"
                                                              }
                                                          },
                                                          {
                                                              "type": "array",
                                                              "items": {
                                                                  "type": "number"
                                                              }
                                                          },
                                                          {
                                                              "type": "string"
                                                          },
                                                          {
                                                              "type": "number"
                                                          },
                                                          {
                                                              "type": "null"
                                                          },
                                                          {
                                                              "type": "null"
                                                          }
                                                      ]
                                                  },
                                                  "operator": {
                                                      "type": "string"
                                                  },
                                                  "field": {
                                                      "type": [
                                                          "string",
                                                          "null"
                                                      ]
                                                  },
                                                  "customID": {
                                                      "type": [
                                                          "string",
                                                          "null"
                                                      ]
                                                  },
                                                  "type": {
                                                      "type": "string",
                                                      "enum": [
                                                          "app_version",
                                                          "browser_name",
                                                          "browser_version",
                                                          "country",
                                                          "custom_field",
                                                          "email",
                                                          "environment_tier",
                                                          "fails_gate",
                                                          "fails_segment",
                                                          "ip_address",
                                                          "locale",
                                                          "os_name",
                                                          "os_version",
                                                          "passes_gate",
                                                          "passes_segment",
                                                          "public",
                                                          "time",
                                                          "unit_id",
                                                          "user_id",
                                                          "url",
                                                          "javascript"
                                                      ]
                                                  }
                                              },
                                              "required": [
                                                  "type"
                                              ]
                                          }
                                      },
                                      "environments": {
                                          "type": [
                                              "array",
                                              "null"
                                          ],
                                          "items": {
                                              "type": "string"
                                          }
                                      }
                                  },
                                  "required": [
                                      "name",
                                      "passPercentage",
                                      "conditions"
                                  ]
                              }
                          },
                          "tags": {
                              "type": "array",
                              "items": {
                                  "type": "string"
                              }
                          },
                          "idType": {
                              "type": "string"
                          },
                          "targetApps": {
                              "anyOf": [
                                  {
                                      "type": "string"
                                  },
                                  {
                                      "type": "array",
                                      "items": {
                                          "type": "string"
                                      }
                                  }
                              ]
                          },
                          "creatorID": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          },
                          "creatorEmail": {
                              "type": [
                                  "string",
                                  "null"
                              ]
                          }
                      },
                      "required": [
                          "isEnabled",
                          "description",
                          "rules"
                      ]
                  }
              ]
          },
          "GatesResponseSchema": {
              "type": "object",
              "properties": {
                  "message": {
                      "type": "string"
                  },
                  "data": {
                      "anyOf": [
                          {
                              "type": "object",
                              "properties": {
                                  "id": {
                                      "type": "string"
                                  },
                                  "name": {
                                      "type": "string"
                                  },
                                  "idType": {
                                      "type": "string"
                                  },
                                  "description": {
                                      "type": "string"
                                  },
                                  "lastModifierID": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "lastModifiedTime": {
                                      "type": [
                                          "number",
                                          "null"
                                      ]
                                  },
                                  "lastModifierEmail": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "lastModifierName": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "creatorID": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "createdTime": {
                                      "type": "number"
                                  },
                                  "creatorName": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "creatorEmail": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "tags": {
                                      "type": "array",
                                      "items": {
                                          "type": "string"
                                      }
                                  },
                                  "targetApps": {
                                      "type": "array",
                                      "items": {
                                          "type": "string"
                                      }
                                  },
                                  "holdoutIDs": {
                                      "type": "array",
                                      "items": {
                                          "type": "string"
                                      }
                                  }
                              },
                              "required": [
                                  "id",
                                  "idType",
                                  "description",
                                  "lastModifierID",
                                  "lastModifiedTime",
                                  "lastModifierEmail",
                                  "lastModifierName",
                                  "creatorID",
                                  "createdTime",
                                  "creatorName",
                                  "creatorEmail"
                              ]
                          },
                          {
                              "type": "object",
                              "properties": {
                                  "idType": {
                                      "type": "string"
                                  },
                                  "checksPerHour": {
                                      "type": [
                                          "number",
                                          "null"
                                      ]
                                  },
                                  "status": {
                                      "type": "string",
                                      "enum": [
                                          "In Progress",
                                          "Launched",
                                          "Disabled",
                                          "Archived"
                                      ]
                                  },
                                  "type": {
                                      "type": "string",
                                      "enum": [
                                          "TEMPORARY",
                                          "PERMANENT",
                                          "STALE"
                                      ]
                                  },
                                  "typeReason": {
                                      "type": "string",
                                      "enum": [
                                          "NONE",
                                          "STALE_PROBABLY_LAUNCHED",
                                          "STALE_PROBABLY_UNLAUNCHED",
                                          "STALE_PROBABLY_FORGOTTEN",
                                          "STALE_NO_RULES",
                                          "STALE_PROBABLY_DEAD_CHECK"
                                      ]
                                  }
                              },
                              "required": [
                                  "idType",
                                  "checksPerHour",
                                  "status",
                                  "type",
                                  "typeReason"
                              ]
                          },
                          {
                              "type": "object",
                              "properties": {
                                  "isEnabled": {
                                      "type": "boolean"
                                  },
                                  "description": {
                                      "type": "string",
                                      "maxLength": 1000
                                  },
                                  "rules": {
                                      "type": "array",
                                      "items": {
                                          "type": "object",
                                          "properties": {
                                              "name": {
                                                  "type": "string"
                                              },
                                              "passPercentage": {
                                                  "type": "number",
                                                  "minimum": 0,
                                                  "maximum": 100
                                              },
                                              "conditions": {
                                                  "type": "array",
                                                  "items": {
                                                      "type": "object",
                                                      "properties": {
                                                          "targetValue": {
                                                              "anyOf": [
                                                                  {
                                                                      "type": "array",
                                                                      "items": {
                                                                          "type": "string"
                                                                      }
                                                                  },
                                                                  {
                                                                      "type": "array",
                                                                      "items": {
                                                                          "type": "number"
                                                                      }
                                                                  },
                                                                  {
                                                                      "type": "string"
                                                                  },
                                                                  {
                                                                      "type": "number"
                                                                  },
                                                                  {
                                                                      "type": "null"
                                                                  },
                                                                  {
                                                                      "type": "null"
                                                                  }
                                                              ]
                                                          },
                                                          "operator": {
                                                              "type": "string"
                                                          },
                                                          "field": {
                                                              "type": [
                                                                  "string",
                                                                  "null"
                                                              ]
                                                          },
                                                          "customID": {
                                                              "type": [
                                                                  "string",
                                                                  "null"
                                                              ]
                                                          },
                                                          "type": {
                                                              "type": "string",
                                                              "enum": [
                                                                  "app_version",
                                                                  "browser_name",
                                                                  "browser_version",
                                                                  "country",
                                                                  "custom_field",
                                                                  "email",
                                                                  "environment_tier",
                                                                  "fails_gate",
                                                                  "fails_segment",
                                                                  "ip_address",
                                                                  "locale",
                                                                  "os_name",
                                                                  "os_version",
                                                                  "passes_gate",
                                                                  "passes_segment",
                                                                  "public",
                                                                  "time",
                                                                  "unit_id",
                                                                  "user_id",
                                                                  "url",
                                                                  "javascript"
                                                              ]
                                                          }
                                                      },
                                                      "required": [
                                                          "type"
                                                      ]
                                                  }
                                              },
                                              "environments": {
                                                  "type": [
                                                      "array",
                                                      "null"
                                                  ],
                                                  "items": {
                                                      "type": "string"
                                                  }
                                              }
                                          },
                                          "required": [
                                              "name",
                                              "passPercentage",
                                              "conditions"
                                          ]
                                      }
                                  },
                                  "tags": {
                                      "type": "array",
                                      "items": {
                                          "type": "string"
                                      }
                                  },
                                  "idType": {
                                      "type": "string"
                                  },
                                  "targetApps": {
                                      "anyOf": [
                                          {
                                              "type": "string"
                                          },
                                          {
                                              "type": "array",
                                              "items": {
                                                  "type": "string"
                                              }
                                          }
                                      ]
                                  },
                                  "creatorID": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  },
                                  "creatorEmail": {
                                      "type": [
                                          "string",
                                          "null"
                                      ]
                                  }
                              },
                              "required": [
                                  "isEnabled",
                                  "description",
                                  "rules"
                              ]
                          },
                          {
                              "type": "array",
                              "items": {
                                  "$ref": "#/components/schemas/GateSchema"
                              }
                          }
                      ]
                  },
                  "pagination": {
                      "$ref": "#/components/schemas/PaginationResponseMetadataSchema"
                  }
              },
              "required": [
                  "message"
              ]
          }
      },
      "parameters": {}
  },
  "paths": {
      "/console/v1/gates": {
          "get": {
              "description": "Get gates",
              "summary": "Get gates",
              "parameters": [
                  {
                      "schema": {
                          "anyOf": [
                              {
                                  "type": "string"
                              },
                              {
                                  "type": "array",
                                  "items": {
                                      "type": "string"
                                  }
                              }
                          ]
                      },
                      "required": false,
                      "name": "idType",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "type": "string",
                          "enum": [
                              "TEMPORARY",
                              "PERMANENT",
                              "STALE"
                          ]
                      },
                      "required": false,
                      "name": "type",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "type": "string",
                          "enum": [
                              "NONE",
                              "STALE_PROBABLY_LAUNCHED",
                              "STALE_PROBABLY_UNLAUNCHED",
                              "STALE_PROBABLY_FORGOTTEN",
                              "STALE_NO_RULES",
                              "STALE_PROBABLY_DEAD_CHECK"
                          ]
                      },
                      "required": false,
                      "name": "typeReason",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "type": [
                              "string",
                              "null"
                          ]
                      },
                      "required": false,
                      "name": "creatorName",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "type": [
                              "string",
                              "null"
                          ]
                      },
                      "required": false,
                      "name": "creatorID",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "anyOf": [
                              {
                                  "type": "string"
                              },
                              {
                                  "type": "array",
                                  "items": {
                                      "type": "string"
                                  }
                              }
                          ]
                      },
                      "required": false,
                      "name": "tags",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "anyOf": [
                              {
                                  "type": "string"
                              },
                              {
                                  "type": "number"
                              }
                          ]
                      },
                      "required": false,
                      "name": "limit",
                      "in": "query"
                  },
                  {
                      "schema": {
                          "anyOf": [
                              {
                                  "type": "string"
                              },
                              {
                                  "type": "number"
                              }
                          ]
                      },
                      "required": false,
                      "name": "page",
                      "in": "query"
                  }
              ],
              "responses": {
                  "200": {
                      "description": "Object with user data.",
                      "content": {
                          "application/json": {
                              "schema": {
                                  "$ref": "#/components/schemas/GatesResponseSchema"
                              }
                          }
                      }
                  }
              }
          }
      }
  },
  "webhooks": {}
}