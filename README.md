Snipify - A Reels Upload & Showcase Platform
A modern Next.js application for managing and selling video content using ImageKit integration. This project provides a full-featured platform with user authentication, video upload capabilities.

Features
🔐 User Authentication (NextAuth.js)
📹 Video Upload and Management (ImageKit)
🎨 Modern UI with Tailwind CSS and DaisyUI
📱 Fully Responsive Design
🔒 Secure API Routes
📧 Email Notifications (Nodemailer)
🗄️ MongoDB Database Integration
Tech Stack
Frontend: Next.js 15, React 19, TypeScript
Styling: Tailwind CSS, DaisyUI
Authentication: NextAuth.js, JWT
Database: MongoDB with Mongoose
File Storage: ImageKit
Payment: Razorpay
Email: Nodemailer
Form Handling: React Hook Form
Prerequisites
Node.js (Latest LTS version)
MongoDB Database
ImageKit Account
SMTP Server (for email notifications)
Getting Started
Clone the repository:
git clone <repository-url>
cd imagekit-video-main
Install dependencies:
npm install
Configure environment variables:

Copy .env.example to .env
Fill in the required environment variables
Run the development server:

npm run dev
Open http://localhost:3000 in your browser
Environment Variables
Create a .env file with the following variables:

# Database
MONGODB_URI=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# ImageKit
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

# Email (SMTP)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
Available Scripts
npm run dev - Start development server
npm run build - Build production application
npm run start - Start production server
npm run lint - Run ESLint
npm run seed - Seed the database
npm run mailtrap - Test email configuration
Project Structure
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── components/      # Reusable components
│   ├── login/          # Login page
│   ├── register/       # Registration page
│   └── upload/         # Video upload page
├── lib/                # Utility functions
├── models/             # MongoDB models
├── public/            # Static assets
└── types.d.ts         # TypeScript declarations
