import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { USER_FAIL, USER_LOGIN, USER_RECEIVE } from '../actions/type'
import { fetchLogin } from '../actions/userAction'

function* watchLogin(action: any) {
    console.log(action)
    try {
        const data = yield call(fetchLogin, action.payload)
        if (data._id) {
            yield put({ type: USER_RECEIVE, payload: data })
        } else {
            yield put({ type: USER_FAIL, payload: 'Username hoặc password không đúng' })
        }
    } catch (err) {

    }
}

export default function* mySaga() {
    yield takeLatest(USER_LOGIN, watchLogin)
}