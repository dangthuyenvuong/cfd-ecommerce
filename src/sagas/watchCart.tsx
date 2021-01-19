import { call, put } from "redux-saga/effects";
import { CART } from "../actions/type";
import { Cart } from "../api";
import store from "../store";

export function* watchCart(action: any) {
    if (store.getState().cart._id) {
        console.log('change')
        switch (action.type) {
            case CART.ADD_ITEM:
            // Cart.update({_id: store.getState().cart._id, list: })
            case CART.REMOVE_ITEM:
            case CART.ITEM_DECREMENT:
            case CART.ITEM_INCREMENT:
            case CART.SHIPPING_OPTION:
            case CART.PAYMENT_OPTION:
        }
    }

}
