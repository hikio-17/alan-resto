import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'
import productsReducer from './products/reducer'
import cartsReducer from './carts/reducer'

const store = configureStore({
   reducer: {
      products: productsReducer,
      carts: cartsReducer
   }
})

export default store