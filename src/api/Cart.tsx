import { Api } from "../helper"


export default {
    update: (data: any) => {
        return Api('update-cart').post({
            body: data
        })
    },
    create: (data: any) => {
        return Api('cart').post({
            body: data
        })
    }
}