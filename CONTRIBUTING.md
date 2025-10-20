# Project Documentation

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
│   │   ├── ui/           # Reusable UI components (Button, Input, etc.)
│   │   └── ...           # Feature-specific components
│   ├── contexts/         # React Context providers
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Core utilities and business logic
│   │   ├── constants/   # Application constants
│   │   └── utils.js     # Utility functions
│   ├── styles/           # Global styles and style utilities
│   ├── types/            # Type definitions (JSDoc or TypeScript)
│   ├── utils/            # General utilities
│   ├── App.js            # Main App component
│   ├── App.css           # App-level styles
│   ├── index.js          # Application entry point
│   ├── index.css         # Global styles
│   └── config.js         # Environment configuration
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create environment file:

   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open at [http://localhost:3000](http://localhost:3000).

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🏗️ Architecture

### Component Organization

- **Layout Components**: Reusable layout components like Header and Footer
- **UI Components**: Generic, reusable UI components
- **Feature Components**: Business logic components for specific features

### State Management

- React Context for global state (see `/src/contexts`)
- Local state with useState for component-specific state

### Custom Hooks

Custom React hooks are located in `/src/hooks` and provide reusable logic:

- `useScrollPosition` - Track scroll position
- `useMediaQuery` - Responsive design utilities

### Utilities

Utility functions are organized in `/src/lib/utils.js`:

- `cn()` - Conditional class names
- `formatPrice()` - Currency formatting
- `formatDate()` - Date formatting
- `debounce()` - Function debouncing
- `isValidEmail()` - Email validation

## 🎨 Styling

The project uses:

- **CSS Modules** or **CSS-in-JS** for component styles
- **Hubot Sans** as the primary font family
- Responsive design principles

## 🔧 Configuration

Environment variables are managed through `.env.local` (copy from `.env.example`).

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

[Add your license here]
