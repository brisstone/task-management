

# Task Management API

This is a RESTful API for managing tasks. It provides endpoints for user authentication, CRUD operations for tasks, and real-time data streaming using WebSockets.

## Features

- User Authentication with JWT tokens
- CRUD Operations for tasks (Create, Read, Update, Delete)
- Real-time data streaming for task events

## Technologies Used

- [Nest.js](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing task data.
- [JWT](https://jwt.io/): JSON Web Tokens for user authentication.
- [Socket.IO](https://socket.io/): A library for real-time web applications using WebSockets.
- [Jest](https://jestjs.io/): A delightful JavaScript testing framework.

## Requirements
Node.js >= 16.20.1
npm >= 8.19.4


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brisstone/task-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and configure the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=<mongodb-uri>
   JWT_SECRET=<jwt-secret>
   ```

4. Start the server:

   ```bash
   npm start
   ```
   use this for development [local machine]
```bash
   npm run start:dev
   ```
   

## API Endpoints

### Authentication

- `POST /auth/login`: User login with username and password.

### Tasks

- `POST /tasks`: Create a new task.
- `GET /tasks`: Get all tasks.
- `GET /tasks/:id`: Get a task by ID.
- `PATCH /tasks/:id`: Update a task by ID.
- `DELETE /tasks/:id`: Delete a task by ID.
- `GET /tasks/user/:id`: Get a tasks by user ID.

## Real-time Data Streaming

Real-time updates for tasks are provided through WebSocket connections. The following events are emitted:

- `taskCreated`: Emitted when a new task is created.
- `taskUpdated`: Emitted when a task is updated.
- `taskDeleted`: Emitted when a task is deleted.

## Tests

Tests are written using Jest. To run the tests, use the following command:

  ```bash
   npm test
   ```

## Usage

1. Ensure the API server is running.
2. Use [Swagger UI](https://swagger.io/tools/swagger-ui/) to interact with the API endpoints using this route; Documentation: [http://localhost:3000/api](http://localhost:3000/api)
3. Connect to the WebSocket server to receive real-time updates for tasks.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Possible::
Utilize Model repository pattern