import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CART, USER } from '../actions/type'
import { fetchLogin } from '../actions/userAction'
import { watchCart } from './watchCart'
import { watchLogout, watchRegister, watchUpdateProfile, watchLogin } from './watchUser'

export default function* mySaga() {

    yield takeLatest(USER.LOGIN, watchLogin)

    yield takeLatest(USER.LOGOUT, watchLogout)

    yield takeLatest(USER.UPDATE, watchUpdateProfile)

    yield takeLatest(USER.REGISTER, watchRegister)

    // -------------CART----------

    yield takeLatest([CART.ADD_ITEM, CART.REMOVE_ITEM, CART.ITEM_INCREMENT, CART.ITEM_DECREMENT, CART.PAYMENT_OPTION, CART.SHIPPING_OPTION], watchCart)
}