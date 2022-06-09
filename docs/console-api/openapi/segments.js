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
              "application/json": {}
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
              "application/json": {}
            }
          }
        }
      }
    }
  }
}
