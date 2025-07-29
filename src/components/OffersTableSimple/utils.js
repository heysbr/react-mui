/**
 * Utility functions for formatting data in the offers table
 */

/**
 * Format a number as currency (USD)
 * @param {number} value - The numeric value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

/**
 * Format a date from string to display format
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`;
};

/**
 * Get color for percentage values (positive = green, negative = red)
 * @param {number} value - The percentage value
 * @returns {string} Color hex code
 */
export const getPercentageColor = (value) => {
  return value >= 0 ? "#4caf50" : "#f44336";
};
