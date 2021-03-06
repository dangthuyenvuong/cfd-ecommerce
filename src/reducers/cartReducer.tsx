import { CART } from "../actions/type";
import LocalStorage from "../helper/LocalStorage";

const initState = {
    list: [],
    amount: 0,
    total: 0,
    shippingFee: 15000,
    shippingSelected: 'giao_thuong',
    vat: 0,
    paymentMethod: 'creditCard',
    ...(LocalStorage.get('cart') || {}),
    open: false,
}
interface stateInit {
    open: Boolean,
    list: any[],
    total: number
}


export default (state: stateInit = initState, action: any) => {
    function returnState(state: any) {
        LocalStorage.set('cart', state)
        return { ...state }
    }

    switch (action.type) {
        case CART.INIT:
            return returnState({
                ...state,
                ...action.payload
            })
        case CART.OPEN:

            return {
                ...state,
                open: true
            }
        case CART.CLOSE:
            return {
                ...state,
                open: false
            }
        case CART.ADD_ITEM:
            {
                let { list, total } = state;
                let f: any = list.find((e: any) => e._id === action.payload._id)
                if (f) {
                    f.cart_count++;
                } else {
                    action.payload.cart_count = 1;
                    list.push(action.payload)
                }
                total++;


                return returnState({
                    ...state,
                    amount: list.reduce((total: number, current: any) => total + current.cart_count * current.real_price, 0),
                    list,
                    total
                })
            }
        case CART.ITEM_DECREMENT:
            {
                let { list, total } = state;

                let f = list.findIndex(e => e._id === action.payload)
                console.log(f)
                if (f !== -1) {
                    list[f].cart_count--
                    if (list[f].cart_count === 0) {
                        list.splice(f, 1)
                    }
                    total--;
                    return returnState({
                        ...state,
                        list,
                        amount: list.reduce((total: number, current: any) => total + current.cart_count * current.real_price, 0),
                        total
                    })
                }

                return state;


            }
        case CART.ITEM_INCREMENT:
            {
                let { list, total } = state;

                let f = list.findIndex(e => e._id === action.payload)
                if (f !== -1) {
                    list[f].cart_count++
                    total++;
                    return returnState({
                        ...state,
                        list,
                        amount: list.reduce((total: number, current: any) => total + current.cart_count * current.real_price, 0),
                        total
                    })
                }

                return state;
            }
        case CART.REMOVE_ITEM:
            let { list, total } = state;
            let f = list.findIndex(e => e._id === action.payload)
            if (f !== -1) {
                total -= list[f].cart_count;
                list.splice(f, 1)
                return returnState({
                    ...state,
                    list,
                    amount: list.reduce((total: number, current: any) => total + current.cart_count * current.real_price, 0),
                    total
                })
            }
            return state;

        case CART.SHIPPING_OPTION:

            return returnState({
                ...state,
                shippingFee: action.payload.price,
                shippingSelected: action.payload.option
            })

        case CART.PAYMENT_OPTION:

            return returnState({
                ...state,
                paymentMethod: action.payload
            })

        case CART.DELETE_ALL:
            return returnState({
                list: [],
                amount: 0,
                total: 0,
                shippingFee: 15000,
                shippingSelected: 'giao_thuong',
                vat: 0,
                paymentMethod: 'creditCard',
                open: false,
            })

        default:
            return state;
    }
}