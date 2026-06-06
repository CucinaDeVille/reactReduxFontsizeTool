import axios from "axios";

function getTextFromAxios(responseObj) {
    let str;
    if (responseObj.query === undefined) return "---";
    const keyVal = Object.keys(responseObj.query.pages);
    str = responseObj.query.pages[keyVal].extract;
    return str;
}

export function fetchWiki() {

    return async (dispatch, getState) => {
        const text = getState().inputText;

        const response = await axios.get(
            `https://de.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=${text}`
        );

        const res = getTextFromAxios(response.data);

        dispatch({
            type: "SET_OUTPUT_TEXT",
            payload: res
        });
    };
}