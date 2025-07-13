<b>Snipify - A Reels Upload & Showcase Platform<b>
A modern Next.js application for managing and selling video content using ImageKit integration. This project provides a full-featured platform with user authentication, video upload capabilities.
<br>
Features
🔐 User Authentication (NextAuth.js)
📹 Video Upload and Management (ImageKit)
🎨 Modern UI with Tailwind CSS and DaisyUI
📱 Fully Responsive Design
🔒 Secure API Routes
📧 Email Notifications (Nodemailer)
🗄️ MongoDB Database Integration
<br>
Tech Stack
Frontend: Next.js 15, React 19, TypeScript <br>
Styling: Tailwind CSS, DaisyUI <br>
Authentication: NextAuth.js, JWT <br>
Database: MongoDB with Mongoose <br>
File Storage: ImageKit <br>
Email: Nodemailer  <br>
Form Handling: React Hook Form <br>
Prerequisites <br>
Node.js (Latest LTS version) <br>
MongoDB Database <br>
ImageKit Account <br>
SMTP Server (for email notifications) <br>
Getting Started <br>
Clone the repository: <br>
git clone <repository-url> <br>
cd imagekit-video-main <br>
Install dependencies: <br>
npm install <br>
Configure environment variables: <br>

Copy .env.example to .env <br>
Fill in the required environment variables <br>
Run the development server: <br>

npm run dev <br>
Open http://localhost:3000 in your browser <br>
Environment Variables <br>
Create a .env file with the following variables: <br>

# Database
MONGODB_URI= <br>

# Authentication
NEXTAUTH_SECRET= <br>
NEXTAUTH_URL= <br>

# ImageKit
IMAGEKIT_PUBLIC_KEY= <br>
IMAGEKIT_PRIVATE_KEY= <br>
IMAGEKIT_URL_ENDPOINT= <br>

# Email (SMTP)
SMTP_HOST= <br>
SMTP_PORT= <br>
SMTP_USER= <br>
SMTP_PASS= <br>
Available Scripts <br>
npm run dev - Start development server <br>
npm run build - Build production application <br>
npm run start - Start production server <br>
npm run lint - Run ESLint <br>
npm run seed - Seed the database v
npm run mailtrap - Test email configuration <br>
Project Structure <br>
├── app/                  # Next.js app directory<br>
│   ├── api/             # API routes <br>
│   ├── components/      # Reusable components <br>
│   ├── login/          # Login page <br>
│   ├── register/       # Registration page <br>
│   └── upload/         # Video upload page <br>
├── lib/                # Utility functions <br>
├── models/             # MongoDB models <br>
├── public/            # Static assets <br>
└── types.d.ts         # TypeScript declarations <br>
