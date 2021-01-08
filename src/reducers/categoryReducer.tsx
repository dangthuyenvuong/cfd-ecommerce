import { FETCH_FINISH } from '../actions/type'


let initState: any = {
    categories: []
}





export default function(state: any = initState, action: any){

    switch (action.type) {
        case FETCH_FINISH:
            return { categories: action.payload }
        default: return state;
    }
    return state;
}