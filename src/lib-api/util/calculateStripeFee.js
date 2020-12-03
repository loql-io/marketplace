module.exports = (amount) => {
  const fee = Math.round(amount * 0.02);
  return fee;
};
