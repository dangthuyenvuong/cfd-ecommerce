import { Cart } from "../api";
import { CART } from "./type";

export function openCart() {
    return {
        type: CART.OPEN
    }
}

export function closeCart() {
    return {
        type: CART.CLOSE
    }
}

export function cartAddItem(_id: string) {
    // data = JSON.parse(JSON.stringify(data))

    return {
        type: CART.ADD_ITEM,
        payload: _id
    }
}

export function itemIncrement(index: number) {
    return {
        type: CART.ITEM_INCREMENT,
        payload: index
    }
}

export function itemDecrement(id: any) {
    return {
        type: CART.ITEM_DECREMENT,
        payload: id
    }
}

export function deleteItem(id: any) {
    return {
        type: CART.REMOVE_ITEM,
        payload: id
    }
}

export function selectShippingOption(data: {
    price: number,
    option: 'giao_thuong' | 'giao_nhanh'
}) {
    return {
        type: CART.SHIPPING_OPTION,
        payload: data
    }
}

export function selectPayment(data: any) {
    return {
        type: CART.PAYMENT_OPTION,
        payload: data
    }
}

export function fetchCartCreate(data: any) {
    return Cart.cart(data);
}