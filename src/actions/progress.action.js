import { UPDATE_PROGRESS } from "../constants/progress"

export const updateLoading = (value, title)=>{
    return {
        type : UPDATE_PROGRESS,
        payload: {value, title}
    }
}