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
- **201 Created**: User registered successfully.
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```
- **400 Bad Request**: Validation failed (e.g., missing or invalid fields).
  ```json
  {
    "errors": ["Error details here"]
  }
  ```

---

## POST `/users/login`

### Purpose
Authenticate a user and return a JWT token.

### Request Body
Send a JSON object with the following fields:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses
- **200 OK**: User authenticated successfully.
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```
- **400 Bad Request**: Validation failed (e.g., missing or invalid fields).
  ```json
  {
    "errors": ["Error details here"]
  }
  ```
- **401 Unauthorized**: Invalid email or password.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes

- Both fields are required.
- Returns a JWT token on successful authentication.

---

## GET `/users/profile`

### Description
Retrieves the profile information for the currently authenticated user.

### Request Headers

-   `Authorization`: `Bearer <token>` (JWT token obtained after login)

### Responses

-   **200 OK**
    -   Successfully retrieved user profile.
    -   Returns:
        ```json
        {
            "id": "user_id",
            "email": "user@example.com",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "phoneNumber": "123-456-7890",
            "createdAt": "timestamp",
            "updatedAt": "timestamp"
        }
        ```
-   **401 Unauthorized**
    -   Invalid or missing JWT token.
    -   Returns: `{ "message": "Unauthorized" }`

### Notes

-   Requires a valid JWT token in the `Authorization` header.

---

## GET `/users/logout`

### Description
Logs out the current user by invalidating the JWT token.

### Request Headers

-   `Authorization`: `Bearer <token>` (JWT token obtained after login)

### Responses

-   **200 OK**
    -   Successfully logged out user.
    -   Returns:
        ```json
        {
            "message": "Logout successfully"
        }
        ```
-   **401 Unauthorized**
    -   Invalid or missing JWT token.
    -   Returns: `{ "message": "Unauthorized" }`

### Notes

-   Requires a valid JWT token in the `Authorization` header.
-   The JWT token is blacklisted after logout.

---

## POST `/captains/register`

### Description
Registers a new captain in the system.

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 chars, required)",
    "lastname": "string (min 3 chars )"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (min 3 chars, required)",
    "capacity": "number (required)",
    "vehicleType": "string (min 3 chars, required)"
  }
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
  "password": "securePassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "sedan"
  }
}
```

### Responses
- **201 Created**: Captain registered successfully.
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      "id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC-123",
        "capacity": 4,
        "vehicleType": "sedan"
      }
    }
  }
  ```
- **400 Bad Request**: Validation failed (e.g., missing or invalid fields).
  ```json
  {
    "errors": ["Error details here"]
  }
  ```
- **409 Conflict**: Captain already exists.
  ```json
  {
    "error": "Captain already exists"
  }
  ```

---

## POST `/captains/login`

### Description
Authenticates a captain and returns a JWT token.

### Request Body
Send a JSON object with the following fields:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Responses
- **200 OK**: Captain authenticated successfully.
  ```json
  {
    "token": "JWT_TOKEN",
    "captain": {
      "id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC-123",
        "capacity": 4,
        "vehicleType": "sedan"
      }
    }
  }
  ```
- **400 Bad Request**: Validation failed (e.g., missing or invalid fields).
  ```json
  {
    "errors": ["Error details here"]
  }
  ```
- **401 Unauthorized**: Invalid email or password.
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- **404 Not Found**: Captain not found.
  ```json
  {
    "error": "Captain not found"
  }
  ```

### Notes

- Both fields are required.
- Returns a JWT token on successful authentication.

---

## GET `/captains/profile`

### Description
Retrieves the profile information for the currently authenticated captain.

### Request Headers

-   `Authorization`: `Bearer <token>` (JWT token obtained after login)

### Responses

-   **200 OK**
    -   Successfully retrieved captain profile.
    -   Returns:
        ```json
        {
            "id": "captain_id",
            "email": "captain@example.com",
            "fullname": {
                "firstname": "John",
                "lastname": "Doe"
            },
            "vehicle": {
                "color": "red",
                "plate": "ABC-123",
                "capacity": 4,
                "vehicleType": "sedan"
            },
            "createdAt": "timestamp",
            "updatedAt": "timestamp"
        }
        ```
-   **401 Unauthorized**
    -   Invalid or missing JWT token.
    -   Returns: `{ "message": "Unauthorized" }`

### Notes

-   Requires a valid JWT token in the `Authorization` header.

---

## GET `/captains/logout`

### Description
Logs out the current captain by invalidating the JWT token.

### Request Headers

-   `Authorization`: `Bearer <token>` (JWT token obtained after login)

### Responses

-   **200 OK**
    -   Successfully logged out captain.
    -   Returns:
        ```json
        {
            "message": "Logout successfully"
        }
        ```
-   **401 Unauthorized**
    -   Invalid or missing JWT token.
    -   Returns: `{ "message": "Unauthorized" }`

### Notes

-   Requires a valid JWT token in the `Authorization` header.
-   The JWT token is blacklisted after logout.

---

## POST `/rides/create-ride`
Creates a new ride.

### Request Body
```json
{
  "pickup": "string (min 3 chars, required)",
  "destination": "string (min 3 chars, required)",
  "vehicleType": "string (one of 'auto', 'car', 'bike', required)"
}
```

### Responses
- **201 Created**: Ride created successfully.
- **400 Bad Request**: Validation errors.
- **500 Internal Server Error**: Something went wrong.

## GET `/maps/get-coordinates`
Retrieves geographic coordinates for a given address.

### Query Parameters
- `address`: string (min 3 chars, required)

### Responses
- **200 OK**: Returns the coordinates.
- **400 Bad Request**: Validation errors.

## GET `/maps/get-distance-time`
Retrieves the distance and travel time between two locations.

### Query Parameters
- `origin`: string (min 3 chars, required)
- `destination`: string (min 3 chars, required)

### Responses
- **200 OK**: Returns distance and time.
- **400 Bad Request**: Validation errors.

## GET `/maps/get-suggestions`
Retrieves address suggestions based on user input.

### Query Parameters
- `input`: string (min 3 chars, required)

### Responses
- **200 OK**: Returns address suggestions.
- **400 Bad Request**: Validation errors.

---

## GET `/rides/get-fare`

### Description
Retrieves estimated fare for a ride based on pickup and destination locations.

### Query Parameters
- `pickup`: string (min 3 chars, required)
- `destination`: string (min 3 chars, required)

### Example Request
```
GET /rides/get-fare?pickup=Times Square&destination=Central Park
```

### Responses
- **200 OK**: Returns fare estimates for all vehicle types.
  ```json
  {
    "fare": {
      "auto": 150,
      "car": 250,
      "bike": 100
    }
  }
  ```
- **400 Bad Request**: Validation errors.
  ```json
  {
    "errors": ["Error details here"]
  }
  ```
- **500 Internal Server Error**: Something went wrong.
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- Requires authentication via JWT token
- Fare calculation includes base fare, distance-based rate, and time-based rate
