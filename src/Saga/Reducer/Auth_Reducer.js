import * as ActionType from '../ActionTypes';


const initVal = {
    isloading: false,
    user : null,
    error : ''
}


export const authReducer = (state=initVal , action) => {
    // console.log(action.type, action.payload);
    switch (action.type) {
        default :
            return state
    }
}