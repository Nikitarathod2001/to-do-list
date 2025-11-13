# 📝 To-Do List App

A simple and efficient **To-Do List App** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This app allows users to **add daily tasks**, **mark them as completed or pending**, and **delete** tasks easily.

---
## Project Overview
This project helps users manage their daily tasks effectively by allowing them to add, mark, and delete tasks with real-time status tracking.

---
## Features

- Add new daily tasks  
- Button for changing tasks status as **Completed** or **Pending**  
- Delete tasks instantly  
- Data stored in **MongoDB** for persistence  
- Built with **React** frontend and **Node/Express** backend


---
## Tech Stack

**Frontend:** React.js, Axios, TailwindCSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Version Control:** Git & GitHub   


---
## Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Nikitarathod2001/to-do-list.git

cd to-do-list
```

### 2️⃣ Backend Setup (Server)
```bash
cd backend

npm install express
```

#### Create a .env file in the backend folder and add:
```bash
PORT = 5800
MONGODB_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_string
```

#### Then run:
```bash
npm start server
```

Your backend will run at:- http://localhost:5800

### 3️⃣ Frontend Setup (Client)
```bash
cd frontend

npm install

npm run dev
```

#### Create a .env file in the frontend folder and add:
```bash
VITE_BACKEND_URL=http://localhost:5800
```

Your frontend will run at:-
 http://localhost:5173 (if using Vite)

---
### How It Works

1. The frontend allows users to add, mark, and delete tasks.

2. The backend API handles CRUD operations.

3. Tasks are stored in MongoDB, ensuring data persists.

---

## THANK YOU