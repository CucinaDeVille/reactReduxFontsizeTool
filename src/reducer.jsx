const initialState = {
    size: 16,
    inputText: "!",
    outputText: "!"
}

export default function reducer(state = initialState, action) {

    switch(action.type) {

        case "SET_SIZE":
            return {
                ...state,
                size: action.payload
            }

        case "SET_INPUT_TEXT":
            return {
                ...state,
                inputText: action.payload, outputText: action.payload
            }

        case "SET_OUTPUT_TEXT":
            return {
                ...state,
                outputText: action.payload
            }

        case "RESET":
            return initialState

        default:
            return state
    }
}