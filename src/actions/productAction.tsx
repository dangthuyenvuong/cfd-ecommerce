import { PRODUCT_FINISH } from './type'

export function fetchProduct(data: any) {
    return {
        type: PRODUCT_FINISH,
        payload: data
    }
}