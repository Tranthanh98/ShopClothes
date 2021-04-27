import { SELECT_MENU_ADMIN } from "../constants/admin-menu";

const initState = {
    name:null,
    path:null
};

export const adminMenu = (state = initState, action) => {
    switch(action.type){
        case SELECT_MENU_ADMIN:{
            const newState = {...state};
            newState.name = action.payload.name;
            newState.path = action.payload.path;
            return newState;
        }
        default : return state;
    }
}