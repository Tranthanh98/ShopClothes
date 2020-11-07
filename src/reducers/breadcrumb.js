import {BREADCRUMB} from '../constants/ActionType';
import  * as types from '../constants/ActionType';

let initStateBreadcrumb = [{
    id: 100,
    name : "Trang chủ",
    link:"/",
    idParent : null,
    items:null
}];

export const BreadCrumb = (state = initStateBreadcrumb, action) =>{
    state = initStateBreadcrumb;
    switch(action.type){
        case BREADCRUMB:{
            let cloneState = [...state, ...action.menuItem];
            return cloneState;
        }
        case types.ONCLICK_HOME:{
            return state;
        }
        default:{
            return state;
        }
    }
    return state;
}