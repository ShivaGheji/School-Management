# School Management API Documentation

## Base URL

`https://api.yourschoolsystem.com/v1`

## API Overview

REST API for managing school locations with geospatial sorting


## Endpoints

### 1. Add School

**URL**  
`POST /addSchool`

**Request Body**

```json
{
  "name": "City High School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

**Success Response**

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "City High School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060
  }
}
```

**Error Response**
```json
{
  "status": "error",
  "message": "Validation failed",
  "errors": [
    "Latitude must be a valid number"
  ]
}
```

### 2. List Schools

**URL**
`GET /listSchools?latitude=12.345&longitude=-45.678`

**Success Response**

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "City High School",
      "address": "123 Main St",
      "distance": 0.5
    },
    {}
  ]
}
```
## Error Handling

**Standard error format**
```json
{
  "status": "error",
  "message": "Error description"
}
```

**Status Codes**
- 200 OK
- 201 Created
- 400 Bad Request
- 500 Internal Server Error
