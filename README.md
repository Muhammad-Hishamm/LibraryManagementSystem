# Very Important Note
I'm .Net Engineer so i was going to implement using asp.net but i thought that it won't match your requirements so I have created this with GPT's help and tried to be the initiator instead of making him do everything as much as i can.
thanks.
#  Library Management System

A simple, modular **Library Management System** built using **Node.js**, **Express.js**, and **MySQL**. It allows managing books, borrowers, and the borrowing process with RESTful API support. It includes advanced features such as CSV exports, rate limiting, authentication, and Docker support.


##  Features

###  Functional Requirements

* Manage **Books** (CRUD)
* Manage **Borrowers** (CRUD)
* Handle **Borrowing & Returning**
* **Overdue Book Detection**

###  Technical Features

* RESTful API with Express.js
* MySQL Database
* Rate Limiting Middleware
* Basic Authentication
* Export to CSV
* Unit Testing with Jest
* Docker & Docker Compose Support

---

##  Project Structure

```bash
library-management-system/
├── config/
│   └── db.js
├── controllers/
│   ├── bookController.js
│   ├── borrowerController.js
│   └── borrowingController.js
├── middlewares/
│   ├── auth.js
│   └── rateLimiter.js
├── models/
│   ├── bookModel.js
│   ├── borrowerModel.js
│   └── borrowingModel.js
├── routes/
│   ├── bookRoutes.js
│   ├── borrowerRoutes.js
│   └── borrowingRoutes.js
├── tests/
│   └── book.test.js
├── .env
├── Dockerfile
├── docker-compose.yml
├── package.json
├── app.js
└── server.js
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library_db
```

### 4. Set Up MySQL Database

```sql
CREATE DATABASE library_db;
USE library_db;

-- books table
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  isbn VARCHAR(20),
  quantity INT,
  shelf_location VARCHAR(100)
);

-- borrowers table
CREATE TABLE borrowers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  registered_date DATE
);

-- borrowings table
CREATE TABLE borrowings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT,
  borrower_id INT,
  borrow_date DATE,
  due_date DATE,
  return_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (borrower_id) REFERENCES borrowers(id)
);
```

### 5. Run the App

```bash
npm start
```

Visit: `http://localhost:3000`

---

##  Run Tests

```bash
npm test
```

---

##  Docker Setup

### 1. Build and Run with Docker

```bash
docker-compose up --build
```

### 2. Run Tests via Docker

```bash
docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build
```

---

##  API Endpoints Documentation

###  Authentication

> Basic Auth required for all endpoints (username: `admin`, password: `password`)

---

###  Books

| Method | Endpoint        | Description    |
| ------ | --------------- | -------------- |
| GET    | /api/books      | List all books |
| GET    | /api/books/\:id | Get book by ID |
| POST   | /api/books      | Add a new book |
| PUT    | /api/books/\:id | Update a book  |
| DELETE | /api/books/\:id | Delete a book  |

###  Borrowers

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | /api/borrowers      | List all borrowers  |
| GET    | /api/borrowers/\:id | Get borrower by ID  |
| POST   | /api/borrowers      | Register a borrower |
| PUT    | /api/borrowers/\:id | Update borrower     |
| DELETE | /api/borrowers/\:id | Delete borrower     |

###  Borrowing

| Method | Endpoint                      | Description             |
| ------ | ----------------------------- | ----------------------- |
| POST   | /api/borrowings/borrow        | Borrow a book           |
| POST   | /api/borrowings/return        | Return a book           |
| GET    | /api/borrowings/overdue       | List overdue borrowings |
| GET    | /api/borrowings/borrower/\:id | Get borrower's books    |
| GET    | /api/borrowings/export        | Export to CSV           |

---

##  ERD (Entity Relationship Diagram)

```
+------------+       +--------------+       +---------------+
|  books     |       |  borrowings  |       |  borrowers    |
+------------+       +--------------+       +---------------+
| id         |<----->| book_id      |       | id            |
| title      |       | borrower_id  |<----->| name          |
| author     |       | borrow_date  |       | email         |
| isbn       |       | due_date     |       | registered_date |
| quantity   |       | return_date  |       +---------------+
| shelf_loc. |       +--------------+
+------------+
```

---

##  Testing

* Tests use **Jest** and **Supertest**
* Located in `/tests` directory

```bash
npm test
```

---

##  CSV Export

* `/api/borrowings/export`: exports borrowings as CSV file
* Can be scheduled via cron (optional)

---

##  Future Enhancements

* Book reservations
* Review system
* User roles & permissions
* Admin dashboard

---

##  Security Notes

* Inputs sanitized to prevent SQL injection
* Basic authentication enforced
* Rate limiting on `/api/books` and `/api/borrowings`

