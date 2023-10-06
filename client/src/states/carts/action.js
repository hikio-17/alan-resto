const ActionType = {
   UPDATE_CARTS: 'UPDATE_CARTS',
   CLEAR_CARTS: 'CLEAR_CARTS'
}

function updateCartsActionCreator(productId) {
   return {
      type: ActionType.UPDATE_CARTS,
      payload: {
         productId
      }
   }
}

export {
   ActionType,
   updateCartsActionCreator
}