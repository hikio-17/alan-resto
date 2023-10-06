const asyncHandler = require('express-async-handler');
const { addProduct, findAllProduct } = require('../services/productService');

const addProductHandler = asyncHandler(async (req, res) => {
  const { name, image, price } = req.body;
  const product = await addProduct({ name, image, price });

  res.status(200).json({
    status: 'success',
    message: 'Product created',
    data: {
      product,
    },
  });
});

const getAllProductHandler = asyncHandler(async (req, res) => {
  const products = await findAllProduct();

  res.status(200).json({
    status: 'success',
    message: 'Products retrieved',
    data: {
      products,
    },
  });
});

module.exports = {
  addProductHandler,
  getAllProductHandler,
};