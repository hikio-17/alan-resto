import api from "../../utils/api"

const ActionType = {
   ADD_PRODUCT: 'ADD_PRODUCT',
   RECEIVE_TALKS: 'RECEIVE_TALKS'
}

function addProductActionCreator(product) {
   return {
      type: ActionType.ADD_PRODUCT,
      payload: {
         product
      }
   }
}

function receiveProductsActionCreator(products) {
   return {
      type: ActionType.RECEIVE_TALKS,
      payload: {
         products
      }
   }
}

function asyncAddProduct({ name, image, price }) {
   return async (dispatch) => {
      try {
         const product = await api.addProduct({ name, image, price })
         dispatch(addProductActionCreator(product))
      } catch (error) {
         alert(error.message)
      }
   }
}

function asyncGetProducts() {
   return async (dispatch) => {
      try {
         const products = await api.getProducts()
         dispatch(receiveProductsActionCreator(products))
      } catch (error) {
         alert(error.message)
      }
   }
}

export {
   ActionType,
   asyncAddProduct,
   asyncGetProducts
}