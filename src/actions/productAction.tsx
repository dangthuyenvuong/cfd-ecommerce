import { PRODUCT_FINISH, PRODUCT_LOADING } from './type'

export function fetchProduct(data: any) {
    return {
        type: PRODUCT_FINISH,
        payload: data
    }
}

export function loadingProduct() {
    return {
        type: PRODUCT_LOADING
    }
}