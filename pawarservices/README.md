# Pawar Services

A modern web application for managing and providing various services with user registration and admin capabilities.

## Features

### 🎯 **User Registration System**

- **First-time Modal**: Appears when users first visit the site
- **Required Fields**: Name, Village/City, Mobile Number
- **Data Storage**: Saves to both localStorage and Firebase Realtime Database
- **One-time Setup**: Modal only appears once per user

### 🚀 **Enhanced WhatsApp Integration**

- **Smart Messages**: Pre-fills WhatsApp messages with user details
- **Personalized Content**: Includes name, village, and mobile number
- **Service-specific**: Tailored messages for each service

### 👨‍💼 **Admin Dashboard**

- **User Management**: View all registered users in a table
- **Real-time Data**: Live data from Firebase Realtime Database
- **Search & Filter**: Find users by name, village, or mobile
- **WhatsApp Communication**: Direct messaging to users
- **Statistics**: Total users, today's registrations, active users

### 🎨 **Modern UI/UX**

- **Responsive Design**: Works on all devices
- **Tailwind CSS**: Modern styling with utility classes
- **Framer Motion**: Smooth animations and transitions
- **Professional Layout**: Clean, modern interface

## Routes

- `/` - Home page with services
- `/service/:id` - Service details page
- `/admin/users` - Admin dashboard for user management

## WhatsApp Message Format

### Service Inquiry (User to Admin)

```
Hello, my name is [Name], from [Village]. My mobile number is [Mobile]. I want to apply for [ServiceName]. Please guide me.
```

### Admin to User

```
Hello [Name], thank you for your interest in our services. How can we help you today?
```

## Technical Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **Database**: Firebase Realtime Database
- **Authentication**: Firebase
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## Setup

1. Install dependencies: `npm install`
2. Configure Firebase credentials in `src/firebase.js`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Firebase Configuration

The app uses Firebase Realtime Database at:
```
https://pawarsetusuvidha-default-rtdb.asia-southeast1.firebasedatabase.app/
```

### Database Structure

```
pawarsetusuvidha-default-rtdb/
├── users/
│   ├── [auto-generated-id-1]/
│   │   ├── name: "User's full name"
│   │   ├── village: "User's village or city"
│   │   ├── mobile: "User's mobile number"
│   │   └── createdAt: "Timestamp of registration"
│   └── [auto-generated-id-2]/
│       └── ...
└── news/
    └── [news-items]
```

## Local Storage

User data is stored in localStorage under the key `userData` to prevent the registration modal from appearing again.

## Admin Access

Navigate to `/admin/users` to access the admin dashboard where you can:

- View all registered users
- Search and filter users
- Send WhatsApp messages directly to users
- Monitor user statistics

## Data Flow

1. **User Registration**: Data saved to both localStorage and Firebase Realtime Database
2. **Admin Dashboard**: Fetches user data from Realtime Database in real-time
3. **WhatsApp Integration**: Uses localStorage data to personalize messages
4. **Persistence**: Data persists across browser sessions via Firebase
