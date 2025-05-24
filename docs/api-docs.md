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

### 2. List Schools

**URL**
`GET /listSchools?latitude=12.345&longitude=-45.678`
