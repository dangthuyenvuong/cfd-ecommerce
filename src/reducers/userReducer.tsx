import { USER } from "../actions/type";
import LocalStorage from "../helper/LocalStorage";

let initState = {
    login: LocalStorage.get('login'),
    loading: false,
    error: null
}

export default function userReducer(state = initState, action: any) {


    switch (action.type) {

        case USER.LOGIN:
            return {
                ...state,
                error: false,
                // login: action.payload
            }
        case USER.LOGOUT:
            LocalStorage.remove('login')
            LocalStorage.remove('token')
            return {
                ...state,
                login: null
            }
        case USER.LOADING:
            return state;
        case USER.LOGIN_RECEIVE:
            LocalStorage.set('login', action.payload)
            return {
                ...state,
                login: action.payload,
            }
        case USER.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case USER.REGISTER:
            return {
                ...state,
                loading: true
            }
        case USER.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER.REGISTER_RECEIVE:
            return {
                ...state,
                loading: false,
                login: action.payload
            }
        case USER.UPDATE:
            return {
                ...state,
                loading: true
            }
        case USER.RECEIVE_UPDATE:
            LocalStorage.set('login', action.payload)
            return {
                ...state,
                loading: false,
                login: action.payload
            }
        default: return state;
    }
}