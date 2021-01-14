import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducers';
import mySaga from './sagas'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}



const sagaMidleware = createSagaMiddleware()

// function middl(){
//     console.log('1111')
// }


let store = createStore(combineReducers, applyMiddleware(sagaMidleware))

export default store;

sagaMidleware.run(mySaga)