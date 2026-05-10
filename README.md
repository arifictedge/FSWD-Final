# ProductDB - Full Stack Product Management System

A clean, minimalistic, and professional full-stack MERN (MongoDB, Express, React, Node.js) application for managing product inventory.

## 🚀 Features

- **Product Management**: Add, view, and delete products from a cloud-based inventory.
- **Dynamic Details**: View full product specifications on dedicated detail pages.
- **Cloud Database**: Fully integrated with MongoDB Atlas for reliable data persistence.
- **Premium UI**: Clean, responsive light-mode interface built with modern CSS and Lucide icons.
- **Smart Notifications**: Interactive alerts using SweetAlert2 for success and deletion confirmations.
- **Mobile Optimized**: Fully responsive layout with a compact mobile navigation menu.

## 🛠️ Technology Stack

- **Frontend**: React (Vite), React Router DOM, Axios, SweetAlert2, Lucide React.
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB Atlas.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0.0 or higher)
- [npm](https://www.npmjs.com/) (v7.0.0 or higher)

## ⚙️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arifictedge/FSWD-Final.git
   cd FSWD-Final
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**:
   ```bash
   cd ../frontend
   npm install
   ```

## 🔐 Environment Variables

Create a `.env` file in the `backend/` directory and add the following variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/productDB?retryWrites=true&w=majority
```

> **Note**: Replace `<username>` and `<password>` with your actual MongoDB Atlas credentials.

## 🏃 Running the Application

### Start the Backend
```bash
cd backend
npm run dev
```
The server will start at: `http://localhost:5000`

### Start the Frontend
```bash
cd frontend
npm run dev
```
The application will be available at: `http://localhost:5173`

## 📁 Project Structure

```text
FSWD-Final/
├── backend/
│   ├── src/
│   │   ├── config/      # Database connection
│   │   ├── controllers/ # Business logic
│   │   ├── models/      # Mongoose schemas
│   │   ├── routes/      # API endpoints
│   │   ├── app.js       # Express setup
│   │   └── index.js     # Entry point
│   ├── .env             # Environment variables (not in git)
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/  # Reusable UI components
    │   ├── pages/       # Page components (Add, List, Details)
    │   ├── App.jsx      # Main routing
    │   └── index.css    # Modern CSS design system
    └── package.json
```

---
Built for the **FSWD Final Practical Demo**.
