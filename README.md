# Validatr360

A full-stack application with Express backend and React frontend.

## Project Structure

- `backend/`: Express.js API with JWT authentication
- `frontend/`: React application with Vite

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FRONTEND_URL=http://localhost:5173
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/users` - Register a new user
- `POST /api/users/auth` - Login a user
- `POST /api/users/logout` - Logout a user
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

## Technologies Used

- **Backend**: Express.js, MongoDB, JWT Authentication
- **Frontend**: React, Vite, Zustand, React Router, Shadcn UI 