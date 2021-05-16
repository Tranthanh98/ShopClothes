import { LOGIN_FAIL, LOGIN_SUCCESS, REQUESTING } from "../constants/login"

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

export const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case REQUESTING:{
            let cloneState = {...state};
            cloneState.requesting =  true;
            return cloneState;
        }
        case LOGIN_SUCCESS:{
            let cloneState = {...state};
            cloneState.requesting = false;
            cloneState.success = true;
            cloneState.data = action.payload;
            localStorage.setItem('token', action.payload.token);
            var userInfor = {userName: action.payload.userName, fullName: action.payload.fullName}
            localStorage.setItem('userInfor', JSON.stringify(userInfor));
            return cloneState; 
        }
        case LOGIN_FAIL:{
            let cloneState = {...state};
            cloneState.requesting = false;
            cloneState.success = false;
            cloneState.message = action.payload;
            localStorage.removeItem('token');
            return cloneState;
        }
        default: return state;
    }
}