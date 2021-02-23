import {combineReducers} from 'redux';
import product from './products';
import menuTree from './menu-tree';
import {reducerCart} from './cart';
import {BreadCrumb} from './breadcrumb';
import {recuderNewProduct} from './new-product';
import {recuderHotSale} from './hot-sale-product';
import {alert} from './alert';
import apiReducer from './Menu/menu-reducer';

const appReducers = combineReducers({
    products : product,
    menuTrees: menuTree,
    carts: reducerCart,
    breadCrumb : BreadCrumb,
    recuderNewProduct: recuderNewProduct,
    productHotSales : recuderHotSale,
    alert: alert,
    apiReducer: apiReducer
});
export default appReducers;