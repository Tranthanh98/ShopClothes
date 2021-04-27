import { useState } from "react"
import { isNumeric } from "./helper";

export const useInputText = (initValue, validate = null, isNumber = false)=>{
    const [value, setValue] = useState(initValue);
    function onChange(e){
        var val = e.target.value;
        if(isNumber){
            if(isNumeric(val)){
                setValue(val);
            }
        }
        else{
            setValue(e.target.value);
        }
    }
    return {
        value,
        onChange,
        setValue
    }
}