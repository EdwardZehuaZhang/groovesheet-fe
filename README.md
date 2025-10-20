# DrumScore Frontend

High-quality drum notation generation with AI-powered technology.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
groovesheet-fe/
├── public/                 # Static files
│   ├── icons/             # SVG icons and small graphics
│   ├── images/            # Images and media files
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── ui/           # Reusable UI components
│   │   ├── Hero.js       # Hero section component
│   │   ├── Features.js   # Features section
│   │   ├── Pricing.js    # Pricing section
│   │   ├── Testimonials.js # Testimonials section
│   │   ├── FAQ.js        # FAQ section
│   │   └── ComparePlans.js # Plan comparison
│   ├── contexts/         # React Context providers
│   ├── hooks/            # Custom React hooks
│   │   ├── useScrollPosition.js
│   │   ├── useMediaQuery.js
│   │   └── index.js
│   ├── lib/              # Core utilities and business logic
│   │   ├── constants/   # Application constants
│   │   └── utils.js     # Utility functions
│   ├── styles/           # Global styles and style utilities
│   ├── types/            # Type definitions (JSDoc)
│   ├── utils/            # General utilities
│   ├── App.js            # Main App component
│   ├── App.css           # App-level styles
│   ├── index.js          # Application entry point
│   ├── index.css         # Global styles
│   └── config.js         # Environment configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── CONTRIBUTING.md       # Contribution guidelines
└── README.md             # This file
```

## 📝 Available Scripts

- **`npm start`** - Runs the app in development mode at [http://localhost:3000](http://localhost:3000)
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm run build`** - Builds the app for production to the `build` folder
- **`npm run eject`** - Ejects from Create React App (⚠️ one-way operation)

## 🏗️ Architecture

### Component Organization

Components are organized by function:

- **Layout Components** (`/src/components/layout/`) - Header, Footer, and other layout elements
- **UI Components** (`/src/components/ui/`) - Reusable, generic UI components
- **Feature Components** (`/src/components/`) - Business logic components for specific features

### Custom Hooks

Reusable logic is extracted into custom hooks (`/src/hooks/`):

- `useScrollPosition` - Track window scroll position
- `useMediaQuery` - Responsive design utilities (useIsMobile, useIsTablet, useIsDesktop)

### Utility Functions

Common utilities are in `/src/lib/utils.js`:

- `cn()` - Conditional class name joining
- `formatPrice()` - Currency formatting
- `formatDate()` - Date formatting
- `debounce()` - Function debouncing
- `isValidEmail()` - Email validation
- `truncate()` - Text truncation

### Constants

Application constants are centralized in `/src/lib/constants/`:

- Navigation links
- API endpoints
- Feature flags
- Storage keys

## 🎨 Styling

- **Font**: Hubot Sans (primary font family)
- **Approach**: Component-level CSS files
- **Global Styles**: `/src/index.css` and `/src/App.css`
- **Responsive Design**: Mobile-first approach with custom hooks

## 🔧 Configuration

Environment variables are managed through `.env.local`. Copy `.env.example` to get started:

```bash
cp .env.example .env.local
```

Available environment variables:

- `REACT_APP_API_URL` - Backend API URL
- `REACT_APP_NAME` - Application name
- `REACT_APP_ENABLE_ANALYTICS` - Enable/disable analytics

## 📦 Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder. The build is minified and filenames include hashes.

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## 📄 License

[Add your license here]

---

Built with [Create React App](https://create-react-app.dev/)
