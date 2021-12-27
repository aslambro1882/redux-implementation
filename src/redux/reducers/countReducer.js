// const initialState = {
//     counter: 0,
//     discove: []
// }
function countReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT": {
            const newState = state + 1
            return newState;
        }
        case "DECREMENT": {
            const newState = state - 1
            return newState;
        }

        default:
            return state;
    }
}

export default countReducer;