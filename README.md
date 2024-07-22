# Pizza-Ordering-App

Pizza Ordering App is a full-featured application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). This app allows users to sign up, log in, manage their account, add pizzas to their menu cart, and place orders using PayPal or debit cards. It also provides functionality for viewing previous orders and managing the menu cart.

## Features

- User Authentication: Sign up, log in, and log out using email and password.
- Account Management: Update user information, change password, and delete account.
- Menu Management: Add, update, and delete pizzas from the menu cart.
- Order Management: Place orders using PayPal or debit cards and view previous orders.
- Session Management: JSON Web Tokens (JWT) are used to maintain user sessions. Re-login is required after session expiration.

## Technologies Used

- **MongoDB**: Database for storing user information, pizza menu, and orders.
- **Express.js**: Backend framework for building the RESTful API.
- **Angular**: Frontend framework for building the client-side application.
- **Node.js**: JavaScript runtime for running the backend server.
- **JSON Web Tokens (JWT)**: For secure user authentication and session management.

## Installation

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Angular CLI](https://angular.io/cli)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ShamilNirash/Pizza-Ordering-App.git
   ```

2. Install backend dependencies:

```bash
npm install
```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
    cd ..web
   ```

2. Install frontend dependencies:

```bash
  npm install
```

### Start the application

    ```bash
    npm run start
    ```
