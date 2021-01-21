import { call, put } from "redux-saga/effects"
import { fetchCartCreate } from "../actions/cartAction"
import { USER } from "../actions/type"
import { fetchLogin, fetchLogout, fetchRegister, fetchUpdateProfile } from "../actions/userAction"
import { Cart } from "../api"
import { LocalStorage } from "../helper"
import { addToken, removeToken } from "../helper/Api"
import { CART, cartAction } from "../redux/cartSlice"
import store from "../store"

export function* watchLogin(action: any) {
    const data = yield call(fetchLogin, action.payload)
    console.log(data)
    if (data?.data?.token) {
        addToken(data.data.token)
        yield put({ type: USER.LOGIN_RECEIVE, payload: data.data })

        if (!store.getState().cart._id) {
            let cart = store.getState().cart;
            cart.list = cart.list.map((e: any) => ({ id: e.id, cart_count: e.cart_count }))
            cart.user = data.data._id
            let result = yield call(fetchCartCreate, cart)
            if (result.data._id) {
                yield put(cartAction.init({ ...result.data }))
            }
            // Cart.create(store.getState().cart);
        }

    } else if (data.error) {
        yield put({ type: USER.LOGIN_FAIL, payload: data.error })
    }
}


export function* watchUpdateProfile(action: any) {
    const data: any = yield call(fetchUpdateProfile, action.payload)
    if (data.data) {
        yield put({ type: USER.RECEIVE_UPDATE, payload: data.data })
    } else {
        yield put({ type: USER.ERROR, payload: data.error })
    }
}


export function* watchRegister(action: any) {
    const data = yield call(fetchRegister, action.payload)
    console.log(data)
    if (data.data) {
        if (data.data.token) {
            addToken(data.data.token)
        }
        yield put({ type: USER.REGISTER_RECEIVE, payload: data.data })
        yield put({ type: USER.LOGIN_RECEIVE, payload: data.data })
    } else {
        yield put({ type: USER.ERROR, payload: data.error })
    }
}

export function* watchLogout(action: any) {
    if (LocalStorage.get('token')?._id) {
        const data = yield call(fetchLogout, action.payload)
    }
    removeToken()
    LocalStorage.remove('login')
    yield put(cartAction.reset())
}