import { createSlice } from "../core/reduxSlice";
import { LocalStorage } from "../helper";

function returnState(state: any) {
    LocalStorage.set('cart', state)
    return { ...state }
}

let { action, reducer: cartSlice, type } = createSlice({
    name: 'cart',
    initState: {
        list: Array(),
        amount: 0,
        total: 0,
        shippingFee: 15000,
        shippingSelected: 'giao_thuong',
        vat: 0,
        paymentMethod: 'creditCard',
        // ...(LocalStorage.get('cart') || {}),
        open: false,
    },
    reducers: {
        init: (state, action: any) => ({
            ...state,
            ...action.payload
        }),
        open: (state) => {
            state.open = true
        },
        close: (state) => {
            state.open = false
        },
        addItem: (state, action: any) => {
            let { list, total } = state;
            let f: any = list.find((e: any) => e._id === action.payload._id)
            if (f) {
                f.cart_count++;
            } else {
                let data = JSON.parse(JSON.stringify(action.payload))
                data.cart_count = 1;
                list.push(data)
            }
            total++;


            return returnState({
                ...state,
                amount: list.reduce((total: number, current: any) => total + current.cart_count * current.real_price, 0),
                list,
                total
            })
        },
        itemIncrement: (state, action) => {
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
        },
        itemDecrement: (state, action) => {
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
        },
        deleteItem: (state, action) => {
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
        },
        selectShippingOption: (state, action) => {
            return returnState({
                ...state,
                shippingFee: action.payload.price,
                shippingSelected: action.payload.option
            })
        },
        selectPayment: (state, action) => {
            return returnState({
                ...state,
                paymentMethod: action.payload
            })
        },
        fetchCartCreate: (state, action) => {

        },
        reset: (state, action) => returnState({
            list: [],
            amount: 0,
            total: 0,
            shippingFee: 15000,
            shippingSelected: 'giao_thuong',
            vat: 0,
            paymentMethod: 'creditCard',
            open: false,
        })
    }

})

export const CART = type
export const cartAction = action
export default cartSlice
