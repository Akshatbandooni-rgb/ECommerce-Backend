# API Documentation

This document outlines the endpoints required for a professional-grade e-commerce backend application. These endpoints ensure robust user management, security, and activity tracking.

## **API Endpoints**

### **Profile Management**
| Endpoint | HTTP Method | Authentication |
|----------|------------|----------------|
| `/api/v1/profile` | `GET` | Required |
| `/api/v1/profile` | `PUT` | Required |
| `/api/v1/profile` | `DELETE` | Required |
| `/api/v1/profile/change-password` | `PUT` | Required |

### **Password Management**
| Endpoint | HTTP Method | Authentication |
|----------|------------|----------------|
| `/api/v1/auth/forgot-password` | `POST` | Not Required |
| `/api/v1/auth/reset-password` | `POST` | Not Required |

### **Admin User Management** (Admin-only)
| Endpoint | HTTP Method | Authentication |
|----------|------------|----------------|
| `/api/v1/admin/users` | `GET` | Admin-only |
| `/api/v1/admin/users/:id` | `GET` | Admin-only |
| `/api/v1/admin/users/:id` | `DELETE` | Admin-only |
| `/api/v1/admin/users/:id/roles` | `PUT` | Admin-only |

### **User Activity**
| Endpoint | HTTP Method | Authentication |
|----------|------------|----------------|
| `/api/v1/users/:id/orders` | `GET` | Required |
| `/api/v1/users/:id/wishlist` | `GET` | Required |
| `/api/v1/users/:id/wishlist` | `POST` | Required |
| `/api/v1/users/:id/wishlist/:productId` | `DELETE` | Required |

### **Notifications**
| Endpoint | HTTP Method | Authentication |
|----------|------------|----------------|
| `/api/v1/users/:id/notifications` | `GET` | Required |
| `/api/v1/users/:id/notifications/:notificationId` | `PUT` | Required |
| `/api/v1/users/:id/notifications/:notificationId` | `DELETE` | Required |

## **Conventions & Improvements**
- **Profile endpoints** are moved to `/api/v1/profile` instead of `/api/v1/users/profile`, making it clear they relate to the logged-in user.
- **Admin-only user management** is under `/api/v1/admin/users`, keeping it distinct from self-service user actions.
- **Wishlist & Orders** are scoped under `/api/v1/users/:id/`, ensuring user-specific actions.
- **Notification deletion** is now explicitly supported.

This API structure follows RESTful best practices and enhances maintainability and clarity.
