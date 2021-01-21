import { call, put } from "redux-saga/effects";
import { CART } from "../actions/type";
import { Cart } from "../api";
import store from "../store";

export function* watchCart(action: any) {
    if (store.getState().cart?._id) {
        let _id = store.getState().cart._id;
        switch (action.type) {
            case CART.ADD_ITEM:
                return Cart.update(_id, { add: action.payload });
            case CART.REMOVE_ITEM:
                return Cart.update(_id, { remove: action.payload });
            case CART.ITEM_DECREMENT:
                return Cart.update(_id, { decrement: action.payload });
            case CART.ITEM_INCREMENT:
                return Cart.update(_id, { increment: action.payload });
            case CART.SHIPPING_OPTION:
                return Cart.update(_id, { shipping: action.payload });
            case CART.PAYMENT_OPTION:
                return Cart.update(_id, { payment: action.payload });
        }
    }

}
