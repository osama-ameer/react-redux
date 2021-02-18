import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "./actions";


const InitialState={
    counter: 0
}

export const counterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1}
        case 'DECREMENT':
            return {...state, counter: state.counter - 1}
        case 'INCREMENT_BY_AMOUNT':
            return {...state, counter: state.counter + action.payload}    
        default:
            return state
    }
}