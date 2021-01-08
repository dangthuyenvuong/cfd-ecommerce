import { FETCH_FINISH, FETCHING } from './type'

export function loadCategories(data: any) {
    return {
        type: FETCH_FINISH,
        payload: data
    }
}