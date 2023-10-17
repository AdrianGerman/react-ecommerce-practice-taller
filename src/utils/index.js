/**
 * This function calculates total price of a new order
 * @param {Array} products CartProduct: Array of objects
 * @returns {numer} Total price
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;
};
