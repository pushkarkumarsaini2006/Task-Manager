export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const getFullImageUrl = (url) => {
  if (!url) return "";
  // If already absolute, return as is
  if (url.startsWith("http")) return url;
  // Always use the deployed backend URL for production
  return `https://task-manager-g01e.onrender.com${url.startsWith("/") ? url : "/" + url}`;
};