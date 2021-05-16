import { addAlert } from ".";
import { LOGIN_FAIL, LOGIN_SUCCESS, REQUESTING } from "../constants/login"
import * as httpClient from '../general/HttpClient';
import { Paths } from "../routes";

export const login = (userName, password, history) => async dispatch =>{
    try{
        dispatch({type: REQUESTING});
        let response = await httpClient.sendPost("/user/LoginUser", {email : userName, password});
        if(!response?.data?.isSuccess){
            throw response.data.messages
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response?.data?.data
        });
        dispatch(addAlert("Đăng nhập thành công", "success"));
        history.push(Paths.homeAdmin);
    }
    catch(e){
        console.log("res:", e);
        dispatch(addAlert(String(e), "error"));
        dispatch({type: LOGIN_FAIL, payload :  String(e)});
    }

}