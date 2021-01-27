import { LocalStorage } from '../helper';
// import slice from './slice'
import { createSlice } from '@reduxjs/toolkit'
// 

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

function returnState(state: any) {
    LocalStorage.set('cart', state)
    return { ...state }
}

let { actions, reducer } = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        init: (state: any, action: any) => {
            return returnState({
                ...state,
                ...action.payload
            })
        },
        openCart: (state: any) => {
            return {
                ...state,
                open: true
            }
        },
        closeCart: (state: any) => {
            return {
                ...state,
                open: false
            }
        },
        addItem: (state: any, action: any) => {
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

            })
        },
        itemDecrement: (state: any, action: any) => {
            let { list, total } = state;

            let f = list.findIndex((e: any) => e._id === action.payload)
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
        itemIncrement: (state: any, action: any) => {
            let { list, total } = state;

            let f = list.findIndex((e: any) => e._id === action.payload)
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
        removeItem: (state: any, action: any) => {
            let { list, total } = state;
            let f = list.findIndex((e: any) => e._id === action.payload)
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
        shipping: (state: any, action: any) => {
            return returnState({
                ...state,
                shippingFee: action.payload.price,
                shippingSelected: action.payload.option
            })
        },
        payment: (state: any, action: any) => {
            return returnState({
                ...state,
                paymentMethod: action.payload
            })
        },
        deleteAll: (state: any, action: any) => {
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
        }

    }
})


export const openCart = actions.openCart
export const closeCart = actions.closeCart
export const addItem = actions.addItem
export const itemDecrement = actions.itemDecrement
export const itemIncrement = actions.itemIncrement
export const removeItem = actions.removeItem
export const payment = actions.payment
export const deleteAll = actions.deleteAll
export default reducer;



