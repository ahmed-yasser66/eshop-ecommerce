function formatTitle(title) {
  return title?.match(
    /\b\w+[^a-z|0-9|\s]?\w+\b\s\w+[^a-z|0-9|\s]?\w+\s\b\w+[^a-z|0-9|\s]?\w+/,
  )[0];
}
function formatCurrency(price) {
  if (!price) return;
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(price);
}
export { formatTitle, formatCurrency };
