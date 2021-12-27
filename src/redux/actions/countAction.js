export function increaseCounter(payload) {
    return {
        type: "INCREMENT",
        payload
    }
}
export function decreaseCounter(payload) {
    return {
        type: "DECREMENT",
        payload
    }
}