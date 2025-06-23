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
  if (!url) return undefined;
  // If already absolute, return as is
  if (url.startsWith("http")) return url;
  // Use local backend in development, deployed backend in production
  const isLocal = window.location.hostname === "localhost";
  const base = isLocal ? "http://localhost:8000" : import.meta.env.VITE_API_BASE_URL;
  return `${base}${url.startsWith("/") ? url : "/" + url}`;
};