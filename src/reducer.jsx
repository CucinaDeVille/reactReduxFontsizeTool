const initialState = {
    size: 16,
    text: "!"
}

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case "SET_SIZE":
            return {
                ...state,
                size: action.payload
            }

        case "SET_TEXT":
            return {
                ...state,
                text: action.payload
            }

        case "RESET":
            return initialState

        default:
            return state
    }
}