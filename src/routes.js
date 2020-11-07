import HomePage from './pages/HomePage';
import ProductContainer from './containers/ProductContainer';
import DetailProduct from './pages/DetailProduct';
import SomiList from './components/AoSoMi/SomiList';
import Payment from './components/Payment/Payment';

function createRoute(path, component){
    return {
        path,
        component
    }
}

export const Paths = {
    home: "/",
    productContainer: "/ao-so-mi",
    detailProduct: "/detail-product/:id",
    payment: "/payment"
}
export default [
    createRoute(Paths.home, HomePage),
    createRoute(Paths.productContainer, SomiList),
    createRoute(Paths.detailProduct, DetailProduct),
    createRoute(Paths.payment, Payment)
];