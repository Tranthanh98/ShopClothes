import { ADD_ALERT, CLEAR_ALERT, REMOVE_ALERT } from "../constants/ActionType";
let initState = []

export const alert = (state = initState, action)=>{
    // debugger;
    switch (action.type){
        case ADD_ALERT:{
            let newState = [...state];
            newState.push(action.content);
            return newState;
        }
        case REMOVE_ALERT:{
            let newState = [...state];
            let index = newState.findIndex(i => i.id == action.id);
            newState.splice(index, 1);
            // newState.pop();
            return newState;
        }
        case CLEAR_ALERT: {
            let newState = [...state];
            newState.pop();
            return newState;
        }
        default:
            return state;
    }
}