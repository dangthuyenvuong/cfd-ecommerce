import { call, put } from "redux-saga/effects"
import { USER, USER_FAIL, USER_RECEIVE } from "../actions/type"
import { fetchLogin, fetchUpdateProfile } from "../actions/userAction"

export function* watchUser(action: any) {
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


export function* watchUpdateProfile(action: any) {
    try {
        const data = yield call(fetchUpdateProfile, action.payload)
        if (data.insertCount) {
            yield put({ type: USER.RECEIVE_UPDATE, payload: data.data })
        } else {
            yield put({ type: USER_FAIL, payload: 'Cập nhật thông tin thất bại' })
        }
    } catch (er) {

    }
}