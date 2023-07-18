# MERN ATTIRE AVENUE

![ATTIRE AVENUE](/frontend/public/images/ATTIRE AVENUE.jpg)

# React Tutorial - Build ECommerce

Welcome to our e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## You Will Learn

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Context API: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/Attire-Avenue-Online-Store/Attire-Avenue.git
$ cd Attire-Avenue
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/amazona
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

# Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. craete message component
    4. create utils.js to define getError fuction
14. Create React Context For Add Item To Cart

    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler

15. Complete Add To Cart

    1. check exist item in the cart
    2. check count in stock in backend

16. Create Cart Screen

    1. create 2 columns
    2. display items list
    3. create action column

17. Complete Cart Screen

    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout

18. Create Signin Screen

    1. create sign in form
    2. add email and password
    3. add signin button

19. Connect To MongoDB Database

    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database

20. Seed Sample Products

    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product

21. Seed Sample Users

    1. create user model
    2. seed sample users

22. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
23. Complete Signin Screen

    1. handle submit action
    2. save token in store and local storage
    3. show user name in header

24. Create Shipping Screen

    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar

25. Create Sign Up Screen

    1. create input forms
    2. handle submit
    3. create backend api

26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
