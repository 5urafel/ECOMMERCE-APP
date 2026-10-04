# 🛒 Full-Stack E-Commerce Application (MERN)

A modern, full-stack e-commerce web application featuring a customer storefront, a RESTful API backend, and a dedicated admin management dashboard.

![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Styles-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-339933?style=for-the-badge&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)

---

## 📌 Features

### 🛍️ Customer Storefront
* **Product Discovery:** Browse products with category, sub-category, and price filtering.
* **Instant Search:** Dynamic search bar to find products quickly.
* **Shopping Cart & Checkout:** Persistent shopping cart with item quantity adjustments and checkout options.
* **Payment Gateways:** Support for Cash on Delivery (COD) and integrations for Stripe & Razorpay.
* **User Authentication:** Secure user registration, sign-in, and order history view using JWT.

### 🛡️ Admin Dashboard
* **Product Management:** Add new products with multi-image upload capabilities powered by Cloudinary.
* **Inventory Control:** View, list, and delete existing inventory items.
* **Order Tracking:** Monitor customer orders and update shipping/fulfillment statuses.

---

## 🛠️ Tech Stack

* **Frontend:** React 19 (Vite), Tailwind CSS, React Router DOM, Axios, React Toastify
* **Admin Portal:** React 19 (Vite), Tailwind CSS, React Router DOM
* **Backend:** Node.js, Express.js, MongoDB (Mongoose ORM)
* **Storage & Auth:** Cloudinary (Image Hosting), Multer, JSON Web Tokens (JWT), Bcrypt

---

## 📂 Project Structure

```text
ECOMMERCE-APP/
├── admin/        # React + Vite Admin Dashboard
├── backend/      # Express API & MongoDB Models
└── frontend/     # React + Vite Customer Storefront
