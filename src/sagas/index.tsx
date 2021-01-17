import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { USER } from '../actions/type'
import { fetchLogin } from '../actions/userAction'
import { watchLogout, watchRegister, watchUpdateProfile, watchUser } from './watchUser'

export default function* mySaga() {

    yield takeLatest(USER.LOGIN, watchUser)

    yield takeLatest(USER.LOGOUT, watchLogout)

    yield takeLatest(USER.UPDATE, watchUpdateProfile)

    yield takeLatest(USER.REGISTER, watchRegister)
}