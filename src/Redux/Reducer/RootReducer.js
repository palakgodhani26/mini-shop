import { combineReducers } from "redux";
import { loginReducer } from "./LoginReducer";

export const rootReducer= combineReducers({
    auth : loginReducer,
})