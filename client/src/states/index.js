import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'
import productsReducer from './products/reducer'

const store = configureStore({
   reducer: {
      products: productsReducer
   }
})

export default store