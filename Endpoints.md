# User-Related Endpoints

This document outlines the user-related endpoints for the e-commerce backend application. These endpoints cover user authentication, profile management, account management, and activity tracking.

---

## **1. Profile Management**

### **Get User Profile**

- **Endpoint**: `GET /api/v1/users/profile`
- **Description**: Retrieves the authenticated user's profile details.
- **Authentication**: Required.

### **Update User Profile**

- **Endpoint**: `PUT /api/v1/users/profile`
- **Description**: Allows users to update their profile details (e.g., name, email, password).
- **Authentication**: Required.

---

## **2. Password Management**

### **Forgot Password**

- **Endpoint**: `POST /api/v1/auth/forgot-password`
- **Description**: Sends a password reset link or token to the user's email.
- **Authentication**: Not required.

### **Reset Password**

- **Endpoint**: `POST /api/v1/auth/reset-password`
- **Description**: Resets the user's password using a valid token.
- **Authentication**: Not required.

### **Change Password**

- **Endpoint**: `PUT /api/v1/users/change-password`
- **Description**: Allows authenticated users to change their password.
- **Authentication**: Required.

---

## **3. Account Management**

### **Delete User Account**

- **Endpoint**: `DELETE /api/v1/users/profile`
- **Description**: Allows users to delete their account permanently.
- **Authentication**: Required.

### **Admin: Get All Users**

- **Endpoint**: `GET /api/v1/users`
- **Description**: Retrieves a list of all users (admin-only).
- **Authentication**: Admin-only.

### **Admin: Get User by ID**

- **Endpoint**: `GET /api/v1/users/:id`
- **Description**: Retrieves details of a specific user by their ID (admin-only).
- **Authentication**: Admin-only.

### **Admin: Update User Role**

- **Endpoint**: `PUT /api/v1/users/:id/role`
- **Description**: Updates the role of a specific user (e.g., promote to admin).
- **Authentication**: Admin-only.

### **Admin: Delete User**

- **Endpoint**: `DELETE /api/v1/users/:id`
- **Description**: Deletes a specific user account (admin-only).
- **Authentication**: Admin-only.

---

## **4. User Activity**

### **Get User Orders**

- **Endpoint**: `GET /api/v1/users/orders`
- **Description**: Retrieves a list of orders placed by the authenticated user.
- **Authentication**: Required.

### **Get User Wishlist**

- **Endpoint**: `GET /api/v1/users/wishlist`
- **Description**: Retrieves the authenticated user's wishlist.
- **Authentication**: Required.

### **Add to Wishlist**

- **Endpoint**: `POST /api/v1/users/wishlist`
- **Description**: Adds a product to the authenticated user's wishlist.
- **Authentication**: Required.

### **Remove from Wishlist**

- **Endpoint**: `DELETE /api/v1/users/wishlist/:productId`
- **Description**: Removes a product from the authenticated user's wishlist.
- **Authentication**: Required.

---

## **5. Notifications**

### **Get User Notifications**

- **Endpoint**: `GET /api/v1/users/notifications`
- **Description**: Retrieves notifications for the authenticated user.
- **Authentication**: Required.

### **Mark Notification as Read**

- **Endpoint**: `PUT /api/v1/users/notifications/:id`
- **Description**: Marks a specific notification as read.
- **Authentication**: Required.

---

## **Summary**

This document outlines the endpoints required for a professional-grade e-commerce backend application. These endpoints ensure robust user management, security, and activity tracking.

| **Category**            | **Endpoint**                        | **HTTP Method** | **Authentication** |
| ----------------------- | ----------------------------------- | --------------- | ------------------ |
| **Profile Management**  | `/api/v1/users/profile`             | `GET`           | Required           |
|                         | `/api/v1/users/profile`             | `PUT`           | Required           |
| **Password Management** | `/api/v1/auth/forgot-password`      | `POST`          | Not Required       |
|                         | `/api/v1/auth/reset-password`       | `POST`          | Not Required       |
|                         | `/api/v1/users/change-password`     | `PUT`           | Required           |
| **Account Management**  | `/api/v1/users/profile`             | `DELETE`        | Required           |
|                         | `/api/v1/users`                     | `GET`           | Admin-only         |
|                         | `/api/v1/users/:id`                 | `GET`           | Admin-only         |
|                         | `/api/v1/users/:id/role`            | `PUT`           | Admin-only         |
|                         | `/api/v1/users/:id`                 | `DELETE`        | Admin-only         |
| **User Activity**       | `/api/v1/users/orders`              | `GET`           | Required           |
|                         | `/api/v1/users/wishlist`            | `GET`           | Required           |
|                         | `/api/v1/users/wishlist`            | `POST`          | Required           |
|                         | `/api/v1/users/wishlist/:productId` | `DELETE`        | Required           |
| **Notifications**       | `/api/v1/users/notifications`       | `GET`           | Required           |
|                         | `/api/v1/users/notifications/:id`   | `PUT`           | Required           |
