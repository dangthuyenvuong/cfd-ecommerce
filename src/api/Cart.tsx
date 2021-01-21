import { Api } from "../helper"


export default {
    cart: (data: any) => {
        return Api('ecommerce/v1/cart').post({
            body: data
        })
    },
    update: (_id: string, data: any) => {
        return Api(`ecommerce/v1/update-cart/${_id}`).post({
            body: data
        })
    },
}