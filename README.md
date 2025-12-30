# 🍽️ PakkaSwad – Recipe Book Application

PakkaSwad is a full-stack **Recipe Book web application** where users can register, log in, create recipes, and explore delicious dishes.  
The project is built using the **MERN stack** and deployed on **Render**.

---

## 🔗 Live Project Links

- **Frontend:**  
  https://recipebook-frontend-fknx.onrender.com/

- **Backend API:**  
  https://recipebook-nlcw.onrender.com/

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Create and view recipes
- Protected routes for authenticated users
- Responsive UI
- MongoDB database integration
- Deployed frontend and backend on Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js

### Deployment
- Render (Frontend – Static Site)
- Render (Backend – Node Web Service)
- MongoDB Atlas

---

## 📂 Project Structure

```text
Recipebook/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Recipe.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
│
└── README.md

▶️ Run Locally
1️⃣ Clone the repository
git clone https://github.com/TejaNagaSri13/Recipebook.git

2️⃣ Backend setup
cd backend
npm install
npm start

3️⃣ Frontend setup
cd frontend
npm install
npm start

🧪 API Endpoints (Sample)
Method    Endpoint    Description
POST     /register    Register new user
POST     /login       Login user
GET      /recipes     Get all recipes
POST     /recipes     Add new recipe (protected)
📌 Future Enhancements

Edit & delete recipes

Save favorite recipes

Profile page

Image upload support

Better UI animations

👩‍💻 Author

Teja Naga Sri Kola
📍 Tanuku, India
📧 Email: tejanagasri3@gmail.com

⭐ Acknowledgements

MongoDB Atlas

Render Platform

React Documentation
