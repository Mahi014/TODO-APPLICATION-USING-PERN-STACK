# PERN Stack Todo Application

This is a Todo application built with the **PERN** stack (PostgreSQL, Express.js, React.js, Node.js).

# THIS IS HOW THE PROJECT LOOKS AFTER RUNNING:

## Screenshot 1
![Screenshot 1](images/Screenshot%20(26).png)

## Screenshot 2
![Screenshot 2](images/Screenshot%20(27).png)

## Getting Started

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahi014/TODO-APPLICATION-USING-PERN-STACK.git
   cd TODO-APPLICATION-USING-PERN-STACK
   ```

2. Navigate to the server directory and install dependencies:
   ```bash
    cd server
    npm install
   ```
3.Create a .env file in the server directory with your database configuration:
```bash
    PG_USER=Your_PostgreSQL_UserName
    PG_HOST=localhost
    PG_PASSWORD=Your_PostgreSQL_password
    PG_DATABASE=pernstack_todo
    PG_PORT=5432
```
4.Start the server:
```bash
    nodemon server.js
```
5.In a new terminal, navigate to the client directory and install dependencies:
```bash
    cd TODO-APPLICATION-USING-PERN-STACK
    cd client
    npm install
```

6.Start the client:
```bash
    npm start
```

7.Database Setup:
    To set up the database, refer to the SQL commands in server/database.sql.

Developed By:
Mahender Singh
