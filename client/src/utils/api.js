import axios from "axios"

const api = (() => {
   const BASE_URL = 'http://localhost:8080/api'

   async function addProduct({ name, image, price }) {
      const { data } = await axios.post(`${BASE_URL}/products`, {
         name,
         image,
         price,
      })

      const { status, message } = data

      if (status !== 'success') {
         throw new Error(message)
      }

      const { data: { product } } = data

      return product;
   }

   async function getProducts() {
      const { data } = await axios.get(`${BASE_URL}/products`)

      const { status, message } = data

      if (status !== 'success') {
         throw new Error(message)
      }

      const { data: { products } } = data;

      return products
   }

   return  {
      addProduct,
      getProducts
   }
})()

export default api;