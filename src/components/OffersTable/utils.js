/**
 * Unified utility functions for all table variants
 */

/**
 * Format a number as currency (USD)
 */
export const formatCurrency = (value) => {
  if (value === null || value === undefined) return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

/**
 * Format a date from string/Date object to display format
 */
export const formatDate = (dateInput) => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
  return `${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "short",
  })} ${date.getFullYear()}`;
};

/**
 * Get color for percentage values
 */
export const getPercentageColor = (value) => {
  return value >= 0 ? "#4caf50" : "#f44336";
};

/**
 * Format percentage with color
 */
export const formatPercentage = (value) => {
  if (value === null || value === undefined || value === "-") return "-";
  return {
    value: `${value >= 0 ? "+" : ""}${value}%`,
    color: getPercentageColor(value)
  };
};

/**
 * Debounce function for performance optimization
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
