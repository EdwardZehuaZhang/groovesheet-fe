/**
 * Application-wide constants
 */

// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Application metadata
export const APP_NAME = 'DrumScore';
export const APP_DESCRIPTION = 'High-quality drum notation generation with AI-powered technology';

// Navigation links
export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/drumscore',
  facebook: 'https://facebook.com/drumscore',
  instagram: 'https://instagram.com/drumscore',
  linkedin: 'https://linkedin.com/company/drumscore',
};

// Pricing tiers (example - update with actual data)
export const PRICING_TIERS = {
  FREE: 'free',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
};

// Feature flags
export const FEATURES = {
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_CHAT: process.env.REACT_APP_ENABLE_CHAT === 'true',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  AUTH_TOKEN: 'auth_token',
};
