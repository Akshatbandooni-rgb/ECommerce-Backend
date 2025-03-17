# E-Commerce API with Node.js

This project demonstrates the development of a full-fledged backend for an e-commerce application using **Node.js**, **Express.js**, and **MongoDB**. It covers a wide range of features such as user authentication, product management, order processing, and more, to build a scalable and robust e-commerce platform.

## 🚀 Key Features

### 1. **User Authentication & Authorization**
- User registration and login with secure password encryption using **bcrypt**.
- JWT-based authentication and refresh tokens for secure login sessions.
- Admin role verification for restricted access.
- User profile management and password reset functionality with token generation and expiry.

### 2. **Product Management**
- Full CRUD operations to create, update, fetch, and delete products.
- Product filtering, sorting, pagination, and field limitation for efficient data handling.
- **Cloudinary** integration for image upload and resizing functionality.
- User rating system and product wishlist management.

### 3. **Order Management**
- Shopping cart functionality: add/remove products, calculate totals, apply discounts.
- Coupon system to apply product discounts.
- Order creation with order status tracking and payment handling.

### 4. **Blog & Category Management**
- Blog creation and management, with like/dislike functionality for posts.
- CRUD operations for categories and brands associated with products.

### 5. **Address Management**
- Manage multiple addresses per user for shipping purposes.

### 6. **File Upload & Image Management**
- Middleware for handling multi-part form data for product and blog image uploads.

### 7. **Middleware & Error Handling**
- Global error handler to manage common errors across routes.
- Admin authorization checks to ensure only authorized users can access certain resources.

### 8. **Payment Integration**
- Integration with payment methods, including generating payment intents and tracking payment status.
- Order creation also manages payment information and status updates.

## 🛠 Technologies Used
- **Node.js** - Backend server runtime
- **Express.js** - Web framework for building the API
- **MongoDB** - NoSQL database for storing user, product, order, and other application data
- **JWT (JSON Web Tokens)** - Secure user authentication and session management
- **Bcrypt.js** - For password hashing and encryption
- **Cloudinary** - Cloud storage and image management for product and blog images
- **Mongoose** - MongoDB object modeling and schema definition

## 📚 API Endpoints
- **User Authentication**: User registration, login, password reset.
- **User Management**: Admin and user profile management.
- **Product Management**: Full CRUD operations, including filtering, sorting, and pagination.
- **Cart & Order Management**: Add/remove items, calculate total price, apply coupon, and track order status.
- **Wishlist & Rating**: Add products to the wishlist, rate products.
- **Coupon Management**: Create and manage discount coupons.
- **Blog & Category Management**: Create, update, and manage blogs and categories.
  
