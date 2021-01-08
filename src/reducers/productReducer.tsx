import { PRODUCT_FINISH } from "../actions/type";

let initState: any = {
    list: [],
    paginate: null
}

export default function (state = initState, action: any) {
    switch (action.type) {
        case PRODUCT_FINISH:
            return { list: action.payload.data, paginate: action.payload.paginate }
        default: return state;
    }

    return state;
}