# Foodie Rice - Food Delivery Web App

Foodie Rice is a full-stack web application for ordering food online. This project is built using the MERN stack, consisting of MongoDB, Express.js, React, and Node.js. It provides users with the ability to browse a variety of food items, add them to the cart, and place orders.

## Features

- **User Authentication and Authorization**: Users can create accounts, log in, and enjoy a personalized experience.
- **Browse by Category**: Food items are categorized for easy navigation.
- **Add to Cart**: Users can add multiple food items to their cart before placing an order.
- **Place and Track Orders**: Users can place orders and track their status.
- **Admin Panel**: Admins have access to manage food items and categories.

## Technologies Used

- **Frontend**: React, React Router, Context API,Redux,React Toastify
- **Backend**: Node.js, Express.js, Mongoose (MongoDB)
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS Modules,Bootstrap
- **Image Upload**: Open Source API
- **Deployment**: Render (Backend), Netlify (Frontend)

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sumitcoder01/food-delivery-app.git
cd food-delivery-app
```

2. Install dependencies for the server:

```bash
cd backend
npm install
```

3. Install dependencies for the client:

```bash
cd ../
npm install
```

### Configuration

1. Create an `.env` file in the `backend` directory with the following variables:

```
PORT=your port address
MONGO=your Mongo URI
SECRET=your Secret Key
ADMIN=Admin Id
```

2. Adjust the frontend API URL in `client/src/utils/api.js` if needed:

```javascript
const API_URL = 'http://localhost:${procees.env.PORT}/api';
```

### Running the Application

1. Start the server (from the `backend` directory):

```bash
npm start
```

2. Start the client (from the `client` directory):

```bash
npm start
```

3. Open your browser and go to `http://localhost:3000` to view the app.

## Deployment

- **Backend**: Deploy the Node.js server on a platform like Render.
- **Frontend**: Deploy the React app on a platform like Netlify. Update the API URL in `/src/constant/constant.js` to the deployed backend URL.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---
