import { CART_ADD_ITEM, CART_CLOSE, CART_OPEN } from "../actions/type";

const initState = {
    open: false,
    list: [],
    total: 0
}

interface stateInit {
    open: Boolean,
    list: any[],
    total: number
}

export default (state: stateInit = initState, action: any) => {
    switch (action.type) {
        case CART_OPEN:
            return {
                ...state,
                open: true
            }
        case CART_CLOSE:
            return {
                ...state,
                open: false
            }
        case CART_ADD_ITEM:
            let { list, total } = state;
            let f: any = list.find((e: any) => e._id === action.payload._id)
            if (f) {
                f.cart_count++;
            } else {
                action.payload.cart_count = 1;
                list.push(action.payload)
            }
            total++;

            return {
                ...state,
                list,
                total
            }
        default:
            return state;
    }
}