import * as types from '../constants/ActionType';
import * as helper from '../general/helper';

export const actAddToCart = (product, quantity, size) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        size
    }
}
export const selectSize = (product, size) =>{
    return {
        type: types.SELECT_SIZE,
        product,
        size
    }
}
export const actDeleteItem = (product)=>{
    return {
        type: types.DELETE_ITEM,
        product
    }
}
export const actBreadCrumb = (menuItem)=>{
    return {
        type: types.BREADCRUMB,
        menuItem
    }
}
export const actClickHome = () =>{
    return {
        type: types.ONCLICK_HOME
    }
}
export const subQuantity = (product, quantity)=>{
    quantity--;
    return {
        type: types.SUB_QUANTITY,
        product,
        quantity
    }
}
export const plusQuantity = (product, quantity)=>{
    quantity++;
    return {
        type: types.PLUS_QUANTITY,
        product,
        quantity
    }
}
export const getProductById = (id) =>{
    return {
        type: types.GET_PRODUCT_BY_ID,
        id : id
    }
}
export const addAlert=(title, status)=>{
    let id = helper.random(4);
    return {
        type: types.ADD_ALERT,
        content : {
            id : id,
            title : title,
            status: status
        }
    }
}
export const removeAlert = (id)=>{
    return {
        id: id,
        type: types.REMOVE_ALERT
    }
}
export const clearAlert =()=>{
    return {
        type: types.CLEAR_ALERT
    }
}