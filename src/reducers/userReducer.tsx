import { USER_FAIL, USER_LOADING, USER_LOGIN, USER_RECEIVE } from "../actions/type";
import LocalStorage from "../helper/LocalStorage";

let initState = {
    login: LocalStorage.get('login'),
    loading: false,
    error: null
}

export default function userReducer(state = initState, action: any) {


    switch (action.type) {

        case USER_LOGIN:
            return {
                ...state,
                error: false,
                // login: action.payload
            }
        case USER_LOADING:
            return state;
        case USER_RECEIVE:
            LocalStorage.set('login', action.payload)
            return {
                ...state,
                login: action.payload,
            }
        case USER_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}