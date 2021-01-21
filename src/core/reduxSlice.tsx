import { create } from "domain";
import { LocalStorage } from "../helper";

export function createSlice<Y, T extends { [key in string]: (state: Y, action: any) => any }>(slice: { name: string, initState: Y, reducers: T }): { action: { [key in keyof T]: (data?: any) => { type: string, payload: any } }, reducer: Function, type: { [key in keyof T]: string } } {
    let { reducers, initState, name } = slice;

    let action: any = {}


    let typeTemp: any = {}
    for (let i in reducers) {
        let type = `${name}/${i}`;
        typeTemp[i] = type
        action[i] = (data: any) => ({ type, payload: data })
    }

    function reducer(state: Y = initState, action: any) {
        let type = action.type.split('/')[1]

        // Default action
        if (typeof reducers[type] === 'undefined') return state;

        // call action when have
        let stateReturn = reducers[type](state, action)

        // check if reducer item have return item
        if (stateReturn && stateReturn !== state) return stateReturn;
        return { ...state }
    }

    let types: { [key in keyof T]: string } = typeTemp


    return { action, reducer, type: types }
}
