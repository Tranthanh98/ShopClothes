export const formatMoney = (number, unit = "")=>{
    return String(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + unit; 
}
export function sleep(time){
    return new Promise(resolve => setTimeout((resolve), time));
}
export function random(length, str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"){
    let data = "";
    for(let i=0; i< length; i++){
        let ran = Math.floor(Math.random() * (str.length-1));
        data += str[ran];
    }
    return data;
}

export function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }