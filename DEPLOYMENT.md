# Task Manager - Deployment Guide

## Environment Variables Setup

### Backend (.env)
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_INVITE_TOKEN=your_admin_invite_token
PORT=8000
CLIENT_URL=http://localhost:5173,http://localhost:5174,https://your-frontend-domain.com
```

### Frontend (.env)
```
VITE_API_BASE_URL=https://your-backend-domain.com
VITE_FRONTEND_URL=https://your-frontend-domain.com
```

## Deployment Steps

### 1. Backend Deployment (Render)
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set environment variables in Render dashboard:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `ADMIN_INVITE_TOKEN`
   - `PORT` (usually 8000)
   - `CLIENT_URL` (your frontend URL)

### 2. Frontend Deployment (Render/Netlify/Vercel)
1. Set environment variables:
   - `VITE_API_BASE_URL` (your backend URL)
   - `VITE_FRONTEND_URL` (your frontend URL)

### 3. Update CORS Configuration
Make sure your backend's `CLIENT_URL` includes your frontend deployment URL.

## Troubleshooting CORS Issues

1. **Check Environment Variables**: Ensure `CLIENT_URL` in backend includes your frontend URL
2. **Check API Base URL**: Ensure frontend's `VITE_API_BASE_URL` points to correct backend URL
3. **Health Check**: Visit `https://your-backend-domain.com/health` to verify backend is running
4. **Browser Console**: Check for specific CORS error messages

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend/Task-Manager
npm install
npm run dev
```

## Important Notes

- Never commit `.env` files to Git
- Use `.env.example` files as templates
- Always use HTTPS in production
- Keep sensitive data in environment variables
