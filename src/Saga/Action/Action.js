import * as ActionType from '../ActionTypes'

export const signupAction = (values) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP, payload: values});
}

export const signinAction = (values) => (dispatch) => {
    dispatch({type : ActionType.SIGN_IN, payload: values});
}

export const signedinAction = (values) => (dispatch) => {
    dispatch ({type : ActionType.SIGNED_IN, payload: values});
}

export const logOutAction = () => (dispatch) => {
    dispatch({type: ActionType.LOG_OUT})
}

export const loggedOutAction = () => (dispatch) => {
    dispatch({type: ActionType.LOGGED_OUT})

}