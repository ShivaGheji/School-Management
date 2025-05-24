# School Management API Documentation

## Base URL

`https://school-management-sg.up.railway.app/schools`

## API Overview

REST API for managing school locations with geospatial sorting

## Endpoints

### 1. Add School

**URL**  
`POST /schools`

**Request Body**

```json
{
  "name": "City High School",
  "address": "123 Main St",
  "latitude": 19.076,
  "longitude": 72.8777
}
```

**Success Response**

```json
{
  "status": "success",
  "message": "School added successfully"
}
```

**Error Response**

```json
{
  "success": false,
  "message": "\"latitude\" must be a number"
}
```

### 2. List Schools

**URL**  
`GET /schools?latitude=19.0760&longitude=72.8777`

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
