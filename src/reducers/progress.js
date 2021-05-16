import { UPDATE_PROGRESS } from "../constants/progress";

const initState = {
    value :0,
    title:"ĐANG KHỞI ĐỘNG ỨNG DỤNG"
}

export const progress = (state = initState, action)=>{
    switch(action.type){
        case UPDATE_PROGRESS:   
            return {
                value: action.payload.value,
                title: action.payload.title
            };
        default: return state;
    }
}