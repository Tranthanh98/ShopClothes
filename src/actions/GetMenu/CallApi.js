import {
    FETCH_POST_ERROR,
    FETCH_POST_SUCCESS,
    FETCH_POST_REQUEST
}
from '../../constants/ActionType';
import * as httpClient from '../../general/HttpClient';

export const GetMenu = () => async (dispatch) =>{
    try{
        dispatch(startGetMenu());

        let response = await httpClient.sendGet("/Product/GetTreeMenu");

        dispatch(apiSuccess(response));

    }catch(err){
        dispatch(apiError(err));
    }
}

const startGetMenu = () =>{
    console.log("request");
    return {
        type: FETCH_POST_REQUEST,
        data: "request"
    }
}

const apiSuccess = (response)=>{
    console.log("success");

    return{
        type: FETCH_POST_SUCCESS,
        data : response
    }
}
const apiError = (err) =>{
    console.log("error");

    return {
        type: FETCH_POST_ERROR,
        data: err
    }
}