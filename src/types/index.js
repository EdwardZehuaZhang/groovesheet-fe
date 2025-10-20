/**
 * Type definitions and interfaces for the application
 *
 * Note: This project is using JavaScript. For better type safety,
 * consider migrating to TypeScript and converting this to index.ts
 */

/**
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} email - User email
 * @property {string} name - User name
 * @property {string} [avatar] - User avatar URL
 * @property {Date} createdAt - Account creation date
 */

/**
 * @typedef {Object} PricingPlan
 * @property {string} id - Plan ID
 * @property {string} name - Plan name
 * @property {string} description - Plan description
 * @property {number} price - Plan price
 * @property {string} interval - Billing interval (monthly, yearly)
 * @property {string[]} features - List of features
 * @property {boolean} popular - Whether this plan is marked as popular
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id - Testimonial ID
 * @property {string} author - Author name
 * @property {string} role - Author role/title
 * @property {string} content - Testimonial content
 * @property {string} [avatar] - Author avatar URL
 * @property {number} rating - Rating (1-5)
 */

/**
 * @typedef {Object} FAQItem
 * @property {string} id - FAQ ID
 * @property {string} question - Question text
 * @property {string} answer - Answer text
 * @property {string} category - FAQ category
 */

// Export an empty object to make this a module
export {};
