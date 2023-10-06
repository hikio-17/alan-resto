/* eslint-disable import/no-extraneous-dependencies */
const asyncHandler = require('express-async-handler');
const cloudinary = require('cloudinary');
const { addProduct, findAllProduct } = require('../services/productService');

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addProductHandler = asyncHandler(async (req, res) => {
  const { name, image, price } = req.body;

  // upload to cloudinary
  const result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: 'auto',
  });

  const product = await addProduct({ name, image: result.secure_url, price });

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