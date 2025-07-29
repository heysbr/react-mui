// Utility functions
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const formatDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()} ${dateObj.toLocaleDateString("en-US", {
    month: "short",
  })} ${dateObj.getFullYear()}`;
};

export const formatPercentage = (value, showColors = true) => {
  if (value === "-") return "-";
  
  const color = showColors ? (value >= 0 ? "#10B981" : "#EF4444") : "#374151";
  const sign = value >= 0 ? "+" : "";
  
  return {
    value: `${sign}${value}%`,
    color,
  };
};
