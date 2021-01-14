import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { USER, USER_FAIL, USER_LOGIN, USER_RECEIVE } from '../actions/type'
import { fetchLogin } from '../actions/userAction'
import { watchUpdateProfile, watchUser } from './watchUser'

export default function* mySaga() {
    yield takeLatest(USER_LOGIN, watchUser)

    yield takeLatest(USER.UPDATE, watchUpdateProfile)
}