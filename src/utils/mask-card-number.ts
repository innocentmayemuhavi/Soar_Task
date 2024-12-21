const maskCardNumber = (cardNumber: string): string => {
  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);
  const maskedSection = cardNumber.slice(4, -4).replace(/\d/g, "*");
  const maskedCardNumber = `${firstFour}${maskedSection}${lastFour}`;

  return maskedCardNumber.replace(/(.{4})/g, "$1 ").trim();
};

export default maskCardNumber;
