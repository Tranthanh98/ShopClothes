import * as types from '../constants/ActionType';
import * as helper from '../general/helper';

export const actAddToCart = (product, quantity, size) =>{
    let id = helper.random(4);
    return {
        type: types.ADD_TO_CART,
        product,
        quantity,
        size,
        id: id
    }
}
export const selectSize = (product, size, carts, idItem) =>{
    let index = carts.findIndex(i=> i.product.id == product.id && i.size == size);
    // console.log("index action:", index);
    if(index != -1){
        let id = helper.random(4);
        return {
            type: types.ADD_ALERT,
            content : {
                id : id,
                title : `Sản phẩm này đã có size ${size} trong giỏ hàng`,
                status: "error"
            }
        }
    }
    return {
        type: types.SELECT_SIZE,
        product,
        size,
        id: idItem,
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
export const subQuantity = (id, quantity)=>{
    quantity--;
    return {
        type: types.SUB_QUANTITY,
        id,
        quantity
    }
}
export const plusQuantity = (id, quantity)=>{
    quantity++;
    return {
        type: types.PLUS_QUANTITY,
        id,
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
export const selecteMenuItem = (id)=>{
    return {
        type: types.SELECT_MENU,
        selected: id
    }
}