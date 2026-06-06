import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import reducer from "./reducer";

// incoming request wanting to update a variable -> forward to reducer to execute
// incoming request wanting to read a variable -> handled by store itself

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;