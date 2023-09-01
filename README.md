# REST API for Student Management

This repository contains a Node.js REST API for managing student data. It includes functionality to retrieve a list of students, get a student by their ID, add a new student, update an existing student's name, and remove a student. This API is built using Express.js and interacts with a PostgreSQL database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **PostgreSQL**: You need a PostgreSQL database up and running. Make sure you have the necessary connection details.

---

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

---

## Configuration

### Environment Variables

The API uses environment variables to configure database connections. Create a `.env` file in the root directory of the project and define the following variables:

```plaintext
DB_HOST=your-database-host
DB_PORT=your-database-port
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password
```

Make sure to replace `your-database-host`, `your-database-port`, `your-database-name`, `your-database-user`, and `your-database-password` with your actual database connection details.

### Database Schema

The API has a PostgreSQL database with a table named `students`. db.js file

---

## Usage

To start the API server, run the following command:

```bash
npm start
```

The server will start on port 3000 by default. You can access it by opening a web browser and navigating to `http://localhost:3000`.

---

## Endpoints

The API provides the following endpoints:

- `GET /api/v1/students`: Get a list of all students.
- `GET /api/v1/students/:id`: Get a student by their ID.
- `POST /api/v1/students`: Add a new student.
- `PUT /api/v1/students/:id`: Update a student's name by their ID.
- `DELETE /api/v1/students/:id`: Remove a student by their ID.

### Example Usage

#### Get a List of Students

```http
GET /api/v1/students
```

#### Get a Student by ID

```http
GET /api/v1/students/1
```

#### Add a New Student

```http
POST /api/v1/students

Request Body:
{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 20,
    "dob": "2003-01-15"
}
```

#### Update a Student's Name

```http
PUT /api/v1/students/1

Request Body:
{
    "name": "Jane Doe"
}
```

#### Remove a Student

```http
DELETE /api/v1/students/1
```

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make your changes and test thoroughly.

3. Ensure your code follows the existing coding style.

4. Create a pull request with a clear description of your changes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
