# ☀️ SunCart – Summer Products E-Commerce Website

SunCart is a modern summer-themed e-commerce web application built with Next.js, Tailwind CSS, DaisyUI/HeroUI, and BetterAuth.  
Users can browse summer products, view product details, authenticate securely, and manage their profile information.

---

## 🌐 Live Website

🔗 Live URL:

## 🎯 Project Purpose

The main goal of this project is to create a responsive and user-friendly summer products e-commerce platform using modern web technologies.

This project demonstrates:

- Authentication system using BetterAuth
- Protected routes
- Dynamic product rendering
- User profile management
- Responsive UI design
- Modern Next.js App Router architecture

---

# 🚀 Features

## 🔝 Navbar
- Website Logo
- Navigation Links:
  - Home
  - Products
  - My Profile
  - BLogs
  - Wishlist 
  - Contact
- Authentication-based UI:
  - Logged in → Avatar + Logout button (Login with Google)
  - Logged out → Login/Register buttons

---

## 🔻 Footer
- Contact Information
- Social Media Links
- Privacy Policy

---

## 🏠 Home Page

### 🌅 Hero Section
- Summer Sale Banner
- Promotional Offers
  - Summer Sale 50% OFF
  - Hot Deals 🔥

### 🔥 Popular Products
- Displays 3 featured products
- Product Card Includes:
  - Product Image
  - Product Name
  - Rating
  - Price
  - View Details Button

### ➕ Extra Sections
- Summer Care Tips
- Top Brands Showcase

---

## 📦 Products
- Static JSON-based product data
- Minimum 6 summer-related products

---

## 🔒 Protected Product Details Page
- Accessible only for authenticated users
- Redirects unauthenticated users to Login page
- Redirects back after successful login

---

## 🔐 Authentication System (BetterAuth)

### Login Features
- Email & Password Login
- Google Authentication
- Error Handling with Toast Messages
- Redirect to Home after successful login

### Register Features
- Name
- Email
- Photo URL
- Password
- Google Authentication
- Redirect to Login page after successful registration

---

## 👤 My Profile
- Displays:
  - User Name
  - User Email
  - User Photo

---

## ✏️ Update Profile Feature
- Update:
  - User Name
  - User Image
- Uses BetterAuth Update User API

Documentation:
https://better-auth.com/docs/concepts/users-accounts#update-user

---

# 🛠️ Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- DaisyUI / HeroUI
- BetterAuth
- MongoDB
- React Icons

---

# 📦 NPM Packages Used

Lottie
