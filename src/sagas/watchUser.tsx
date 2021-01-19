import { call, put } from "redux-saga/effects"
import { fetchCartCreate } from "../actions/cartAction"
import { CART, USER } from "../actions/type"
import { fetchLogin, fetchLogout, fetchRegister, fetchUpdateProfile } from "../actions/userAction"
import { Cart } from "../api"
import { LocalStorage } from "../helper"
import store from "../store"

export function* watchLogin(action: any) {
    const data = yield call(fetchLogin, action.payload)
    if (data?.data?._id) {
        yield put({ type: USER.LOGIN_RECEIVE, payload: data.data })




        if (!store.getState().cart._id) {
            let cart = store.getState().cart;
            cart.list = cart.list.map((e: any) => ({ id: e.id, cart_count: e.cart_count }))
            cart.user = data.data._id
            let result = yield call(fetchCartCreate, cart)
            if (result.data._id) {
                yield put({ type: CART.INIT, payload: { ...result.data } })
            }
            // Cart.create(store.getState().cart);
        }

    } else {
        yield put({ type: USER.LOGIN_FAIL, payload: 'Username hoặc password không đúng' })
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
    if (data.data) {
        yield put({ type: USER.REGISTER_RECEIVE, payload: data.data })
        yield put({ type: USER.LOGIN_RECEIVE, payload: data.data })
    } else {
        yield put({ type: USER.ERROR, payload: data.error })
    }
}

export function* watchLogout(action: any) {
    const data = yield call(fetchLogout, action.payload)
    LocalStorage.remove('login')
    LocalStorage.remove('token')
    yield put({ type: CART.DELETE_ALL })
}