import * as types from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem("CART"));

const initCart = [
    
];

export const reducerCart = (state = initCart, action)=>{
    switch(action.type){
        case types.ADD_TO_CART:{
            let newProduct = {
                product: action.product,
                quantity: action.quantity,
                size: action.size
            }
            let index = state.findIndex(i=> i.product == action.product);
            if(index == -1){
                return [
                    ...state,
                    newProduct
                ]
            }
            else{
                let newState = [...state];
                newState[index].quantity++;
                return newState;
            }
            
        }
        case types.DELETE_ITEM:{
            let newState = [...state];
            let index = state.findIndex(i=> i.product == action.product);
            newState.splice(index,1);
            return newState;
        }
        case types.SUB_QUANTITY:{
            let newState = [...state];
            let index = state.findIndex(i=> i.product == action.product);
            newState[index].quantity = action.quantity;
            return newState;
        }
        case types.PLUS_QUANTITY:{
            let newState = [...state];
            let index = state.findIndex(i=> i.product == action.product);
            newState[index].quantity = action.quantity;
            return newState;
        }
        
    }
    return state;
}