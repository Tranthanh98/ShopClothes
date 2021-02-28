import * as types from '../constants/ActionType';

let initCart = [];
let cartsLocal = localStorage.getItem('persist:carts');
let temp = JSON.parse(cartsLocal);
if(temp){
    let tempCart = JSON.parse(temp.carts);
    initCart = tempCart;
}

export const reducerCart = (state = initCart, action)=>{
    let cart
    switch(action.type){
        // case REHYDRATE:{
        //     return [...state];
        // }
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
            if(action.quantity <= 0){
                newState.splice(index, 1);
                return newState;
            }

            newState[index].quantity = action.quantity;
            return newState;
        }
        case types.PLUS_QUANTITY:{
            let newState = [...state];
            let index = state.findIndex(i=> i.product == action.product);
            newState[index].quantity = action.quantity;
            return newState;
        }
        case types.SELECT_SIZE:{
            let newState = [...state];
            let index = state.findIndex(i=> i.product == action.product);
            if(index == -1){
                index = state.findIndex(i=> i.product == action.product);
            }
            newState[index].size = action.size;
            return newState;
        }
        default:
            return [...state];
        
    }
    return state;
}