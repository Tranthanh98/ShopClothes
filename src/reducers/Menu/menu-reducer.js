import {FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR} from '../../constants/ActionType';

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

function apiReducer(state = initialState, action){
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case FETCH_POST_SUCCESS:
            console.log("action:", action.data);
            return {
                ...state,
                requesting: false,
                success: true,
                data: action.data
            };
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: action.message
            }
        default:
            return state;
    }
}
export default apiReducer;