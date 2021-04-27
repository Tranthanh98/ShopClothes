import DashboardIcon from '@material-ui/icons/Dashboard';
import SomiList from './components/AoSoMi/SomiList';
import NotContent from './components/Common/NotContent';
import Payment from './components/Payment/Payment';
import CreateProduct from './pages/Admin/CreateProduct';
import DashboardPage from './pages/Admin/DashBoard';
import DetailProduct from './pages/Home/DetailProduct';
import HomePage from './pages/Home/HomePage';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

function createRoute(path, component, name, icon){
    return {
        path,
        component,
        name,
        icon
    }
}

export const Paths = {
    home: "/",
    productContainer: "/ao-so-mi",
    detailProduct: "/detail-product/:id",
    payment: "/payment",
    createProduct:"/admin/create-product",
    homeAdmin:"/admin",

    notContent:"*",
}
// function createAdminRoute(path, component){
//     let adminPath = `/amdin${path}`;
//     return createRoute(adminPath, component);
// }
export const adminRoute = [
    createRoute(Paths.homeAdmin, DashboardPage, "Dashboard", DashboardIcon),
    createRoute(Paths.createProduct, CreateProduct, "Thêm sản phẩm mới", AddToPhotosIcon)
];
export default [
    createRoute(Paths.home, HomePage),
    createRoute(Paths.productContainer, SomiList),
    createRoute(Paths.detailProduct, DetailProduct),
    createRoute(Paths.payment, Payment),
    createRoute(Paths.notContent, NotContent),
    
];