import { USER_LOADING, USER_LOGIN } from "../actions/type";

let initState = {
    login: null,
    loading: false,
    cart: null
}


export default function userReducer(state = initState, action: any) {



    switch (action.type) {

        case USER_LOGIN:
            return state;
        case USER_LOADING:
            return state;

        default: return state;
    }
}