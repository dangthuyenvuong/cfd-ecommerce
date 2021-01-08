import { PRODUCT_FINISH, PRODUCT_LOADING } from "../actions/type";

let initState: any = {
    list: [],
    paginate: null,
    loading: true
}

export default function (state = initState, action: any) {
    switch (action.type) {
        case PRODUCT_FINISH:
            return { ...state, list: action.payload.data, paginate: action.payload.paginate, loading: false }
        case PRODUCT_LOADING:
            return { ...state, loading: true }
        default: return state;
    }

    return state;
}