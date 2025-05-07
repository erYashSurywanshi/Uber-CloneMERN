# Backend API Documentation

## POST `/users/register`

### Description
Registers a new user in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars )"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses

- **201 Created**
  - User registered s uccessfully.
  - Returns: `{ "token": "JWT_TOKEN", ... }`

  #### Example Response
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "64e8f7c2b2e4b2a1d8c1e123",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- **400 Bad Request**
  - Validation failed (missing or invalid fields).
  - Returns: `{ "errors": [ ... ] }`

### Notes

- All fields are required.
- Password must be at least 6 characters.
- Email must be unique and valid.
