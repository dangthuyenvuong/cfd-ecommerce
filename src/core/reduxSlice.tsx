import { create } from "domain";

export function createSlide<T extends { [key in string]: (state: any, action: any) => any }>(slice: { name: string, initState: any, reducers: T }) {
    let { reducers } = slice;

    let action: any = {}
    for (let i in reducers) {

    }


    return { action, reducers }
}



let a = createSlide({
    name: 'demo',
    initState: [],
    reducers: {
        demo: () => {

        }
    }
})
