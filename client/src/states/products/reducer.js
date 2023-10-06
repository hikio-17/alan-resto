import {ActionType } from './action'

function productsReducer(products = [], action = {}) {
   switch (action.type) {
      case ActionType.RECEIVE_TALKS:
         return action.payload.products;
      case ActionType.ADD_PRODUCT:
         return [action.payload.product, ...products];
      default:
         return products;
   }
}

export default productsReducer