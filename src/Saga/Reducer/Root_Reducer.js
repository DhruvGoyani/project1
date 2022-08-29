import { combineReducers } from "redux";
import { alertReducer } from "./Alert.Reducer";
import { authReducer } from "./Auth_Reducer";



export const rootReducer = combineReducers({ 
    auth: authReducer,
    alert : alertReducer
});