import * as ActionType from '../ActionTypes'

export const signupAction = (values) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP, payload: values});
}

export const signinAction = (values) => (dispatch) => {
    dispatch({type : ActionType.SIGN_IN, payload: values});
}

export const GoogleSigninAction = (values) => (dispatch) => {
    dispatch({type : ActionType.GOOGLE_SIGN_IN, payload: values});

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

export const ForgatePasswordAction = (values) => (dispatch) => {
    dispatch({type : ActionType.FORGATE_PASSWORD , payload: values})
}

export const ForgatedPasswordAction = (values) => (dispatch) => {
    dispatch({type : ActionType.FORGATED_PASSWORD , payload: values})
}


