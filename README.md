# Swaraj Exim - Agricultural Export Company Website

A modern, responsive React website for Swaraj Exim, showcasing agricultural export services and products.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Modular, maintainable code structure
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Elements**: Hover effects, animations, and transitions
- **Modern UI/UX**: Clean, professional design with green theme

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Hero.jsx         # Hero section with image carousel
│   ├── Section.jsx      # Reusable section wrapper
│   ├── AboutUs.jsx      # Company information section
│   ├── Products.jsx     # Product grid display
│   ├── OurProcess.jsx   # Export process steps
│   ├── GlobalReach.jsx  # International markets section
│   ├── Certifications.jsx # Company certifications
│   ├── Contact.jsx      # Contact form
│   ├── Footer.jsx       # Site footer with navigation
│   └── ScrollToTop.jsx  # Scroll to top button
├── data/
│   └── mockData.js      # Centralized data management
├── App.jsx              # Main application component
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## 🧩 Components Overview

### Core Components
- **Header**: Responsive navigation with transparent/white background states
- **Hero**: Full-screen hero section with auto-rotating slides
- **Section**: Reusable wrapper for consistent section styling
- **Footer**: Comprehensive footer with contact info and social links

### Content Components
- **AboutUs**: Company description and mission
- **Products**: Grid display of agricultural products
- **OurProcess**: 4-step export process visualization
- **GlobalReach**: International markets and logistics info
- **Certifications**: Company certifications and associations
- **Contact**: Contact form for inquiries

### Utility Components
- **ScrollToTop**: Floating button to scroll to top
- **Section**: Reusable section wrapper with consistent spacing

## 📊 Data Management

All mock data is centralized in `src/data/mockData.js`:
- Product information
- Hero slides content
- Process steps
- Navigation links
- Certification details

## 🎨 Styling

- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach with breakpoints
- **Color Scheme**: Green theme representing agriculture and growth
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Navigate to project directory
cd swaraj

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Customization

### Adding New Components
1. Create component file in `src/components/`
2. Import and use in `App.jsx`
3. Add to navigation if needed

### Modifying Data
- Edit `src/data/mockData.js` for content changes
- Update component props as needed

### Styling Changes
- Modify Tailwind classes in components
- Add custom CSS in `src/index.css`
- Update `tailwind.config.js` for theme customization

## 📱 Responsive Breakpoints

- **Mobile**: Default (320px+)
- **Small**: `sm:` (640px+)
- **Medium**: `md:` (768px+)
- **Large**: `lg:` (1024px+)
- **Extra Large**: `xl:` (1280px+)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary to Swaraj Exim.

## 👥 Team

- **Frontend**: React + Tailwind CSS
- **Design**: Modern, responsive UI/UX
- **Architecture**: Component-based, maintainable code

---

**Swaraj Exim** - Exporting nature's bounty. Building global trust.
