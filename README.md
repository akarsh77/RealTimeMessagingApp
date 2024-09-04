# RealTimeMessagingApp

#### Overview:
This project is a containerized **Real-Time Messaging Application** developed using **Node.js**, **Express.js**, and **Socket.io**. The application allows users to communicate with each other in real-time, sending messages back and forth instantly as they are typed. It is an example of a web application that leverages WebSocket technology to provide a seamless, live messaging experience.

#### Key Features:
- **Real-Time Messaging**: Users can send and receive messages in real time without needing to refresh the page.
- **Socket.io Integration**: The application uses Socket.io to handle real-time, bidirectional communication between the server and the client.
- **Express.js Framework**: The server-side of the application is built with Express.js, a fast, unopinionated, and minimalist web framework for Node.js.

#### Technology Stack:
- **Node.js**: JavaScript runtime environment that executes server-side code.
- **Express.js**: Web application framework for Node.js, used to build the server.
- **Socket.io**: A library that enables real-time, bidirectional, and event-based communication between web clients and servers.
- **Docker**: The application is Dockerized, making it easy to deploy and run in any environment.

#### Project Structure:
- **index.js**: The main entry point of the application where the Express server is set up and Socket.io is configured.
- **public/**: A directory for serving static files like HTML, CSS, and client-side JavaScript.
- **package.json**: A file that lists the dependencies required by the application, such as Express and Socket.io.

#### Dockerization:
The application is fully containerized using Docker, which ensures consistent behavior across different environments. The Docker setup allows developers to easily run the application on any machine with Docker installed, without worrying about environment-specific dependencies.

- **Dockerfile**: Defines how the application is containerized. It uses the Node.js 16-alpine image, installs the necessary dependencies, and runs the application.
- **docker-compose.yml**: Simplifies the process of setting up the application, allowing it to be run with a single command (`docker-compose up`).

#### How to Run:
1. **Clone the Repository**: Clone the project repository from GitHub.
2. **Build and Run with Docker**: Use Docker to build and run the application.
   ```bash
   docker-compose up --build
   ```
3. **Access the Application**: Once the container is up and running, the application can be accessed from a web browser at `http://localhost:3000`.
