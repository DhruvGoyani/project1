import { all } from "redux-saga/effects";
import { authsaga } from "./Auth.Saga";



export default function* rootsaga(){
    yield all([
        authsaga()
    ])
}