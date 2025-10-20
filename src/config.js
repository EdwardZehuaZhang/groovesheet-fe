/**
 * Environment Configuration
 *
 * This file provides access to environment variables with fallbacks.
 * For local development, create a .env.local file in the root directory.
 */

const config = {
  // API Configuration
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',

  // Application Configuration
  appName: process.env.REACT_APP_NAME || 'DrumScore',
  appUrl: process.env.REACT_APP_URL || 'http://localhost:3000',

  // Feature Flags
  enableAnalytics: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  enableDebug: process.env.NODE_ENV === 'development',

  // Third-party Services (add as needed)
  // stripePublicKey: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
  // googleAnalyticsId: process.env.REACT_APP_GA_ID,
};

export default config;
