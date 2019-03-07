import * as actionType from './actionType';

export const addToCart = (id) => {
    return {
      type: actionType.ADD_TO_CART,
      id: id
    }
  };

export const removeFromCart = (id) => {
    return {
        type: actionType.REMOVE_FROM_CART,
        id: id
    }
}

export const addShipping = (id) => {
  return {
      type: actionType.ADD_SHIPPING,
      id: id
  }
};

export const subQuantity = (id) => {
  return {
      type: actionType.SUB_QUANTITY,
      id: id
  }
}

export const addQuantity = (id) => {
  return {
    type: actionType.ADD_QUANTITY,
    id: id
  }
};
