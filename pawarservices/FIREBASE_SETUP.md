# Firebase Realtime Database Setup Guide

## Database URL

Your Firebase Realtime Database is located at:

```
https://pawarsetusuvidha-default-rtdb.asia-southeast1.firebasedatabase.app/
```

## Database Structure

### Users Collection

```
/users/
├── -NxYz1234567890abcdef/
│   ├── name: "John Doe"
│   ├── village: "Mumbai"
│   ├── mobile: "9876543210"
│   └── createdAt: 1703123456789
├── -NxYz1234567890abcdeg/
│   ├── name: "Jane Smith"
│   ├── village: "Pune"
│   ├── mobile: "9876543211"
│   └── createdAt: 1703123456790
└── ...
```

### News Collection

```
/news/
├── -NxYz1234567890abcdeh/
│   └── text: "Welcome to our new service portal!"
├── -NxYz1234567890abcdei/
│   └── text: "Special discount on all services this month!"
└── ...
```

## Firebase Console Access

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `pawarsetusuvidha`
3. Navigate to "Realtime Database" in the left sidebar
4. You'll see your database at the URL: `pawarsetusuvidha-default-rtdb.asia-southeast1.firebasedatabase.app`

## Security Rules

Make sure your Firebase Realtime Database has appropriate security rules. Here's a basic example:

```json
{
  "rules": {
    "users": {
      ".read": true,
      ".write": true
    },
    "news": {
      ".read": true,
      ".write": true
    }
  }
}
```

## Testing the Setup

1. **Start your app**: `npm run dev`
2. **Register a new user**: The modal will appear on first visit
3. **Check Firebase Console**: You should see the user data appear in the `/users` node
4. **Admin Dashboard**: Navigate to `/admin/users` to see all registered users
5. **WhatsApp Integration**: Test the personalized message generation

## Data Flow

1. **User Registration**:

   - User fills out the modal
   - Data is saved to localStorage (prevents modal from showing again)
   - Data is pushed to Firebase Realtime Database under `/users/[auto-generated-id]`

2. **Admin Dashboard**:

   - Fetches all users from `/users` node
   - Displays them in a searchable table
   - Provides WhatsApp messaging functionality

3. **WhatsApp Integration**:
   - Uses localStorage data to personalize messages
   - Generates context-aware messages for each service

## Troubleshooting

### Common Issues:

1. **Database Connection Error**: Check if the `databaseURL` is correct in `firebase.js`
2. **Permission Denied**: Verify Firebase security rules allow read/write access
3. **Data Not Appearing**: Check browser console for Firebase errors
4. **Modal Not Showing**: Clear localStorage to test the registration flow

### Testing Commands:

```bash
# Build the app
npm run build

# Start development server
npm run dev

# Check for build errors
npm run build
```

## Sample Data for Testing

You can manually add test data in Firebase Console:

```json
{
  "users": {
    "test-user-1": {
      "name": "Test User",
      "village": "Test Village",
      "mobile": "9876543210",
      "createdAt": 1703123456789
    }
  },
  "news": {
    "test-news-1": {
      "text": "Welcome to Pawar Services! We're here to help you."
    }
  }
}
```
