export default function slice(options: { name: string, initState: any, reducers: any }) {

    let { initState, reducers, name } = options

    let actions: any = {}

    for (let i in reducers) {
        let type = `${name}/${i}`

        actions[i] = (...ref: any) => {
            return {
                type,
                payload: ref
            }
        }
    }



    function reducer(state = initState, action: any) {

        for (let i in reducers) {
            let { type } = action

            type = type.split('/')[1]

            if (type in reducers) {
                return reducers[type](state, action)
            }
        }

        return state;
    }


    return {
        actions,
        reducer
    }
}