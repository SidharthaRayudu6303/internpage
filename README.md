# The Tann Mann Gaadi - Good Morning Web Application 

A modern, responsive web application built for **The Tann Mann Gaadi** - a Not-for-Profit initiative focused on wellness, health, sanitation, and social responsibility.

##  Project Overview

This web application serves as a contact portal for The Tann Mann Gaadi's morning wellness initiative. Built with modern web technologies, it provides an intuitive interface for users to connect with the organization.

##  Key Features

### User Experience
- **Beautiful Morning-Themed Design** - Optimized color palette for morning viewing
- **Responsive Layout** - Seamlessly works on desktop, tablet, and mobile devices
- **Smooth Animations** - Professional transitions and micro-interactions
- **Real-time Form Validation** - Instant feedback on user input
- **Loading States** - Visual feedback during form submission
- **Success Notifications** - Clear confirmation messages

### Technical Features
- **Form Validation** - Client-side validation for all fields
  - Name validation (minimum 2 characters, letters only)
  - Phone number validation (10-14 digits with international format)
  - Email validation (proper email format)
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **TypeScript** - Type-safe code for better maintainability
- **Performance** - Optimized images and lazy loading
- **SEO Ready** - Proper meta tags and semantic HTML

##  Design System

### Color Palette (Wellness & Eco-Friendly Theme)
- **Health Teal** `#00A896` - Primary color for health & wellness
- **Eco Green** `#02C39A` - Represents eco-friendly solutions
- **Sky Blue** `#028090` - Trust and cleanliness
- **Soft Aqua** `#E0F7FA` - Light, clean backgrounds
- **Success Green** `#00B894` - Positive feedback
- **Pure White** `#FFFFFF` - Clean surfaces

### Typography
- Primary Font: System fonts (-apple-system, Segoe UI, Roboto)
- Headings: Bold, 700-800 weight
- Body Text: Regular, 400 weight

##  Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **UI Components**: Custom React components
- **Image Optimization**: Next.js Image component
- **Form Handling**: React Hooks (useState, custom validation)

##  Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone or download the repository

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

##  Project Structure

```
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main page component with form logic
│   └── page.module.css       # Scoped styles for main page
├── public/
│   └── logo.png              # The Tann Mann Gaadi logo
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

##  Key Components

### Form Validation
- Real-time validation on blur and change events
- Custom validation rules for each field
- Clear error messages with visual indicators
- Prevents submission with invalid data

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 480px
  - Tablet: 481px - 768px
  - Desktop: > 768px

### Accessibility Features
- Semantic HTML elements
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatible
- Focus management
- Error announcements

##  Form Fields

1. **Full Name**
   - Required field
   - Minimum 2 characters
   - Letters and spaces only

2. **Phone Number**
   - Required field
   - Indian format (+91)
   - 10-14 digits accepted

3. **Email Address**
   - Required field
   - Valid email format
   - RFC 5322 compliant

##  Best Practices Implemented

-  TypeScript for type safety
-  Component-based architecture
-  CSS Modules for scoped styling
-  Semantic HTML
-  Accessibility (WCAG 2.1)
-  Mobile-first responsive design
-  Performance optimization
-  Clean code principles
-  Proper error handling
-  User feedback mechanisms

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

##  Future Enhancements

- Backend API integration for form submission
- Database storage for contact information
- Email notifications
- Multi-language support (Hindi, English)
- Analytics integration
- Progressive Web App (PWA) features
- Dark mode support

##  License

This project is created for The Tann Mann Gaadi initiative.

##  Development Notes

### Code Quality
- Follows React and Next.js best practices
- TypeScript strict mode enabled
- ESLint ready configuration
- Clean, maintainable code structure

### Performance
- Optimized images with Next.js Image component
- Minimal bundle size
- Efficient re-renders
- CSS-in-JS avoided for better performance

---

**Built with for The Tann Mann Gaadi**  
*Wellness on Wheels - A Not-for-Profit Initiative*
