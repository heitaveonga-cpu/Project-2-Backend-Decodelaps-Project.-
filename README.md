# Student Management API

Backend API for managing student records. Built as an assignment using Node.js, Express, and MongoDB.

## Tech Stack
- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB + Mongoose
- Other: dotenv, cors

## Installation

1. Clone the repository
```bash
git clone https://github.com/heitaveonga-cpu/Project-2-Backend-Decodelaps-Project.git

npm install

PORT=5000
MONGO_URI=your_mongodb_connection_str
npm start
Server runs on: http://localhost:5000

   ## API Endpoints

   | Method | Endpoint | Description |
   | --- | --- | --- |
   | GET | / | Test route |
   | GET | /students | Get all students |
   | POST | /students | Create new student |

   ### Example POST body:
   ```json
   {
     "name": "Andreas",
     "age": 22
   }
