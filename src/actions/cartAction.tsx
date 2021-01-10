import { CART_ADD_ITEM, CART_CLOSE, CART_OPEN } from "./type";

export function openCart() {
    return {
        type: CART_OPEN
    }
}

export function closeCart() {
    return {
        type: CART_CLOSE
    }
}

export function cartAddItem(data: any) {
    data = JSON.parse(JSON.stringify(data))

    return {
        type: CART_ADD_ITEM,
        payload: data
    }
}