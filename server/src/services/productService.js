const { nanoid } = require('nanoid');
const { Product } = require('../models');

const addProduct = async ({ name, image, price }) => {
  const id = `product-${nanoid()}`;

  const product = await Product.create({
    id,
    name,
    image,
    price,
  });

  return product;
};

const findAllProduct = () => Product.findAll();

module.exports = {
  addProduct,
  findAllProduct,
};