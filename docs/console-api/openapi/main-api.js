module.exports = 
{
  "openapi": "3.0.0",
  "info": {
    "title": "console/v1",
    "version": "1.0.0"
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
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "tags": [
    {
      "name": "gates"
    },
    {
      "name": "dynamic config"
    },
    {
      "name": "segments"
    },
    {
      "name": "autotunes"
    },
    {
      "name": "events"
    }
  ],
  "paths": {
    "/gates": {
      "post": {
        "tags": [
          "gates"
        ],
        "summary": "Create Gate",
        "x-code-samples": [
          {
            "lang": "JavaScript",
            "label": "JS - Node",
            "source": "var request = require(\"request\");\n"

          },
          {
            "lang": "JavaScript",
            "label": "JS - Node",
            "source": "<?php echo \"This is our custom PHP code\"; ?>"
          },
          {
            "lang": "JavaScript",
            "label": "JS - Node",
            "source": "var request = require(\"request\");\n"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "a gate",
                  "description": "helpful summary of what this gate does"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
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
                  "example": "221"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:52:29 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate created successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
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
                  "type": "object"
                },
                "examples": {
                  "example-0": {
                    "summary": "400 Name Used",
                    "value": {
                      "status": 400,
                      "message": "Name is already in use"
                    }
                  },
                  "example-1": {
                    "summary": "400 Missing Field",
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "name",
                          "errorMessage": "Required"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": [
          "gates"
        ],
        "summary": "Read All Gates",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "1163"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:37:57 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gates listed successfully.",
                  "data": [
                    {
                      "id": "my_gate_a",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_3",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_2",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "b_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
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
                  "example": "45"
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
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      }
    },
    "/gates/a_gate": {
      "get": {
        "tags": [
          "gates"
        ],
        "summary": "Read Single Gate",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "218"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:53:53 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate read successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "gates"
        ],
        "summary": "Update Gate",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "isEnabled": true,
                  "description": "helpful summary of what this gate does",
                  "lastModifierName": "CONSOLE API",
                  "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                  "rules": [
                    {
                      "name": "All Conditions",
                      "passPercentage": 10,
                      "conditions": [
                        {
                          "type": "public"
                        },
                        {
                          "type": "user_id",
                          "operator": "any",
                          "targetValue": [
                            "111",
                            "222"
                          ]
                        },
                        {
                          "type": "email",
                          "operator": "str_contains_any",
                          "targetValue": [
                            "@outlook.com",
                            "@gmail.com"
                          ]
                        },
                        {
                          "type": "email",
                          "operator": "is_null",
                          "value": null
                        },
                        {
                          "type": "custom_field",
                          "operator": "gt",
                          "targetValue": 31,
                          "field": "age"
                        },
                        {
                          "type": "app_version",
                          "operator": "version_gt",
                          "targetValue": "1.1.1"
                        },
                        {
                          "type": "browser_name",
                          "operator": "any",
                          "targetValue": [
                            "Android",
                            "Chrome"
                          ]
                        },
                        {
                          "type": "browser_version",
                          "operator": "any",
                          "targetValue": [
                            "94.0.4606.81",
                            "94.0.4606.92"
                          ]
                        },
                        {
                          "type": "os_name",
                          "operator": "none",
                          "targetValue": [
                            "Android",
                            "Windows"
                          ]
                        },
                        {
                          "type": "os_version",
                          "operator": "version_lte",
                          "targetValue": [
                            "11.0.0"
                          ]
                        },
                        {
                          "type": "country",
                          "operator": "any",
                          "targetValue": [
                            "NZ",
                            "US"
                          ]
                        },
                        {
                          "type": "passes_gate",
                          "targetValue": "my_gate_2"
                        },
                        {
                          "type": "fails_gate",
                          "targetValue": "my_gate_2"
                        },
                        {
                          "type": "time",
                          "operator": "after",
                          "targetValue": 1643070357193
                        },
                        {
                          "type": "environment_tier",
                          "operator": "any",
                          "targetValue": "production"
                        },
                        {
                          "type": "passes_segment",
                          "targetValue": "growth_org"
                        },
                        {
                          "type": "fails_segment",
                          "targetValue": "growth_org"
                        },
                        {
                          "type": "ip_address",
                          "operator": "any",
                          "targetValue": [
                            "1.1.1.1",
                            "8.8.8.8"
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
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "395"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:54:20 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate updated successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "Description Here",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": [
                      {
                        "name": "Specific Users",
                        "passPercentage": 100,
                        "conditions": [
                          {
                            "type": "user_id",
                            "targetValue": [
                              "111",
                              "222"
                            ],
                            "operator": "any"
                          }
                        ]
                      },
                      {
                        "name": "Public",
                        "passPercentage": 10,
                        "conditions": [
                          {
                            "type": "public"
                          }
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
      "delete": {
        "tags": [
          "gates"
        ],
        "summary": "Delete Gate",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "40"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:55:21 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate deleted successfully."
                }
              }
            }
          }
        }
      }
    },
    "/dynamic_configs": {
      "post": {
        "tags": [
          "dynamic config"
        ],
        "summary": "Create Dynamic Config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "a dynamic config",
                  "description": "helpful summary of what this dynamic config does"
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
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
                  "example": "221"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:52:29 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate created successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
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
                  "type": "object"
                },
                "examples": {
                  "example-0": {
                    "summary": "400 Name Used",
                    "value": {
                      "status": 400,
                      "message": "Name is already in use"
                    }
                  },
                  "example-1": {
                    "summary": "400 Missing Field",
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "name",
                          "errorMessage": "Required"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      },
      "get": {
        "tags": [
          "dynamic config"
        ],
        "summary": "Read All Dynamic Configs",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "1163"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:37:57 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gates listed successfully.",
                  "data": [
                    {
                      "id": "my_gate_a",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_3",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate_2",
                      "isEnabled": true,
                      "description": "",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": []
                    },
                    {
                      "id": "my_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "b_gate",
                      "isEnabled": true,
                      "description": "Description Here",
                      "lastModifierName": "CONSOLE API",
                      "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                      "rules": [
                        {
                          "name": "Specific Users",
                          "passPercentage": 100,
                          "conditions": [
                            {
                              "type": "user_id",
                              "targetValue": [
                                "111",
                                "222"
                              ],
                              "operator": "any"
                            }
                          ]
                        },
                        {
                          "name": "Public",
                          "passPercentage": 10,
                          "conditions": [
                            {
                              "type": "public"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
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
                  "example": "45"
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
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      }
    },
    "/dynamic_configs/a_dynamic_config": {
      "get": {
        "tags": [
          "dynamic config"
        ],
        "summary": "Read Single Dynamic Config",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "218"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:53:53 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate read successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "dynamic config"
        ],
        "summary": "Update Dynamic Config",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "id": "a_dynamic_config",
                  "isEnabled": false,
                  "description": "helpful summary of what this dynamic config does",
                  "lastModifierName": "CONSOLE API",
                  "lastModifierID": "1vaQaBoLlkauH9iiuOSBP2",
                  "rules": [
                    {
                      "name": "All Conditions",
                      "passPercentage": 10,
                      "returnValue": {
                        "key": true
                      },
                      "conditions": [
                        {
                          "type": "public"
                        }
                      ]
                    }
                  ],
                  "defaultValue": {
                    "key": true
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Created",
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
                  "example": "221"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:52:29 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate created successfully.",
                  "data": {
                    "id": "a_gate",
                    "isEnabled": true,
                    "description": "helpful summary of what this gate does",
                    "lastModifierName": "CONSOLE API",
                    "lastModifierID": "5rfuqoxLIYTscuSaaCOlB8",
                    "rules": []
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
                  "type": "object"
                },
                "examples": {
                  "example-0": {
                    "summary": "400 Name Used",
                    "value": {
                      "status": 400,
                      "message": "Name is already in use"
                    }
                  },
                  "example-1": {
                    "summary": "400 Missing Field",
                    "value": {
                      "status": 400,
                      "message": "Bad Request Exception",
                      "errors": [
                        {
                          "property": "name",
                          "errorMessage": "Required"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "status": 403,
                  "message": "Forbidden resource"
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "dynamic config"
        ],
        "summary": "Delete Dynamic Config",
        "responses": {
          "200": {
            "description": "OK",
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
                  "example": "40"
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Sun, 23 Jan 2022 23:55:21 GMT"
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
                  "type": "object"
                },
                "example": {
                  "message": "Gate deleted successfully."
                }
              }
            }
          }
        }
      }
    },
    "/segments/a_segment": {
      "get": {
        "tags": [
          "segments"
        ],
        "summary": "Read a Single Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
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
              "application/json": {}
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
                "example": {
                  "name": "c segment",
                  "description": "helpful summary of what this segment is",
                  "type": "id_list"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/segments/c_segment": {
      "delete": {
        "tags": [
          "segments"
        ],
        "summary": "Delete Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/autotunes": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read All Autotunes",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
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
                "type": "object",
                "example": {
                  "name": "My Autotunes Are Best",
                  "description": "helpful summary of what this Aututune is",
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
                  "explorationWindow": "1hr",
                  "attributionWindow": "2hr",
                  "winnerThreshold": "99%"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/autotunes/my_second_autotune": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read a Single Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/autotunes/my_autotunes_are_best": {
      "delete": {
        "tags": [
          "autotunes"
        ],
        "summary": "Delete Autotune",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      },
      "post": {
        "tags": [
          "autotunes"
        ],
        "summary": "Update Autotune",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
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
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/events": {
      "get": {
        "tags": [
          "events"
        ],
        "summary": "List All Events (E2E)",
        "security": [
          {
            "apikeyAuth": []
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    }
  }
}