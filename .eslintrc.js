/**
 * ESLint Configuration
 *
 * This file configures code linting rules for the project.
 * Extend or customize rules as needed for your team's preferences.
 */

module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest'],
  rules: {
    // Customize your rules here
    'no-console': 'off', // Allow console statements
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // Turn off if not using PropTypes
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
