# API Documentation

## Endpoints

### GET /
Returns a welcome message.

**Response:**
```json
{
  "message": "Hello from JavaScript!"
}
```

### POST /api/data
Accepts data and returns formatted response.

**Request Body:**
```json
{
  "data": "example"
}
```