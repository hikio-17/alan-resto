const ActionType = {
   UPDATE_CARTS: 'UPDATE_CARTS',
   CLEAR_CARTS: 'CLEAR_CARTS'
}

function updateCartsAction(product) {
   return {
      type: ActionType.UPDATE_CARTS,
      payload: {
         product
      }
   }
}

function clearCartsAction() {
   return {
      type: ActionType.CLEAR_CARTS
   }
}

// function asyncUpdateCartsAction() {

// }

export {
   ActionType,
   updateCartsAction,
   clearCartsAction
}