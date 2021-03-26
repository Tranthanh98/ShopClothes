import { SELECT_MENU } from "../../constants/ActionType";

export const selectMenu = (state = -1, action)=>{
    switch(action.type){
        case SELECT_MENU:{
            state = action.selected
            return state;
        }
        default: return state;
    }
}