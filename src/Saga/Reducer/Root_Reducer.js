import { combineReducers } from "redux";
import { authReducer } from "./Auth_Reducer";



export const rootReducer = combineReducers(authReducer);