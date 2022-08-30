import * as ActionType from '../ActionTypes';


const initVal = {
    isloading: false,
    user : null,
    error : ''
}


export const authReducer = (state=initVal , action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionType.SIGNED_IN :
            return {
                ...state,
                isloading: false,
                user : action.payload,
                error : ''
            }
        default :
            return state
    }
}