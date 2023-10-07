import { ActionType } from './action';

function cartsReducer(carts = [], action = {}) {
  switch (action.type) {
    case ActionType.CLEAR_CARTS:
      return [];
    case ActionType.UPDATE_CARTS:
      const { product } = action.payload;

      const existingProductIndex = carts.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCarts = carts.map((item, index) => {
          if (index === existingProductIndex) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });

        return updatedCarts;
      } else {
        return [...carts, { ...product, count: 1 }];
      }
    default:
      return carts;
  }
}

export default cartsReducer;
