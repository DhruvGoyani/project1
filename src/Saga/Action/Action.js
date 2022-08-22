import * as ActionType from '../ActionTypes'

export const signupAction = (values) => (dispatch) => {
    dispatch({type : ActionType.SIGN_UP, payload: values});
}