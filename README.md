# StudiKompas - Your Intelligent Guide to Finding Study Programs

StudiKompas is a comprehensive web platform designed to help prospective students discover and evaluate study programs from universities worldwide. The platform leverages intelligent recommendation algorithms, live support, and consultation booking to guide students through their educational journey.

## 🌟 Key Features

### Smart Wizard
- Interactive quiz-based program recommendation engine
- Personalized recommendations based on interests, skills, and career goals
- Match scoring to help students prioritize options

### Program Exploration
- Browse thousands of programs from worldwide universities
- Advanced filtering by field, duration, tuition, and more
- Detailed program information including requirements and career outcomes
- Save favorite programs for later comparison

### Live Support
- Real-time chat with academic counselors
- Consultation ticket system for structured requests
- Expert guidance on program selection

### User Dashboards
- Personalized student dashboard with quick access to key features
- Counselor dashboard for managing student interactions
- Saved programs and recommendations tracking

### Accessibility
- WCAG 2.1 AA compliant interface
- Screen reader optimized with semantic HTML
- High contrast color schemes for better readability
- Keyboard navigation support

## 🏗️ Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js Server Actions, Node.js
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth with email/password
- **UI Components**: shadcn/ui

## 📁 Project Structure

```
app/
├── (public)/              # Public pages (landing page)
├── student/               # Student-specific routes
│   ├── wizard/           # Smart Wizard quiz
│   ├── search/           # Program search and browsing
│   ├── recommendations/  # Personalized recommendations
│   ├── chat/            # Live chat support
│   ├── bookings/        # Consultation bookings
│   ├── saved/           # Saved programs
│   └── profile/         # User profile management
├── counselor/            # Counselor-specific routes
│   ├── tickets/         # Consultation ticket management
│   ├── chat/            # Active conversations
│   ├── programs/        # Program database access
│   └── profile/         # Counselor profile
├── api/
│   └── auth/            # Better Auth handler
├── actions/             # Server actions for data operations
│   ├── wizard.ts       # Wizard and recommendations
│   ├── chat.ts         # Chat and consultations
│   └── programs.ts     # Program data operations
├── sign-in/            # Sign-in page
├── sign-up/            # Sign-up page
└── page.tsx            # Main dashboard (authenticated)

lib/
├── auth.ts             # Better Auth configuration
├── auth-client.ts      # Client-side auth utilities
└── db/
    ├── index.ts        # Drizzle client
    └── schema.ts       # Database schema

components/
├── ui/                 # shadcn/ui components
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── label.tsx
└── auth-form.tsx       # Shared auth form component
```

## 🗄️ Database Schema

### Core Tables

- **user** - Better Auth users
- **session** - Better Auth sessions
- **account** - Better Auth linked accounts
- **verification** - Better Auth verification tokens

### Application Tables

- **userProfile** - Extended user information with role and academic details
- **universities** - University information and contacts
- **programs** - Study programs offered by universities
- **wizardResponses** - User quiz responses for recommendations
- **recommendations** - Generated program recommendations for users
- **chatConversations** - Chat sessions between students and counselors
- **chatMessages** - Individual messages in conversations
- **consultationTickets** - Structured consultation requests
- **savedPrograms** - User bookmarked programs

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- pnpm (or npm/yarn)
- Neon PostgreSQL database
- Better Auth Secret (generate with `openssl rand -base64 32`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   # DATABASE_URL (provided by Neon integration)
   # BETTER_AUTH_SECRET (generate with: openssl rand -base64 32)
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open http://localhost:3000 in your browser

### Database Setup

The database tables are created through the Neon MCP. To seed data:

```bash
pnpm exec ts-node scripts/seed-db.ts
```

## 👥 User Roles

### Students
- Access Smart Wizard for personalized recommendations
- Browse and search study programs
- Save favorite programs
- Chat with counselors
- Book consultation appointments
- Manage their profile and preferences

### Counselors
- View student consultation requests
- Respond to student inquiries via live chat
- Access program database for recommendations
- Manage their availability and expertise profile

### Admins
- Manage universities and programs database
- Monitor platform activity
- Manage user accounts and access
- Analytics and reporting

## 🔐 Security

- Email/password authentication via Better Auth
- Session-based security with secure cookies
- Per-user data scoping with server actions
- Input validation and sanitization
- CSRF protection

## ♿ Accessibility

The platform is built with accessibility as a core principle:

- **WCAG 2.1 Level AA** compliance
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color schemes
- Screen reader optimization
- Focus management

## 📊 Data Privacy

- User data is scoped by userId in all queries
- No data sharing between users
- GDPR-compliant data handling
- User can request data export
- Secure password hashing

## 🎨 Design

- Modern, professional interface with dark theme
- Gradient accents (blue to red) for visual interest
- Responsive design for mobile, tablet, and desktop
- Consistent spacing and typography
- Clear information hierarchy

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📝 License

This project is proprietary and confidential.

## 📞 Support

For issues or questions, please contact the development team or open an issue in the repository.

---

Built with ❤️ for students seeking their perfect study path.
