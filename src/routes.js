import DashboardIcon from '@material-ui/icons/Dashboard';
import SomiList from './components/AoSoMi/SomiList';
import NotContent from './components/Common/NotContent';
import Payment from './components/Payment/Payment';
import CreateProduct from './pages/Admin/CreateProduct';
import DashboardPage from './pages/Admin/DashBoard';
import DetailProduct from './pages/Home/DetailProduct';
import HomePage from './pages/Home/HomePage';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import StoreManagement from './pages/Admin/StoreManagement';
import StoreIcon from '@material-ui/icons/Store';
import ConfirmOrder from './components/Payment/ConfirmOrder';

function createRoute(path, component, name, icon){
    return {
        path,
        component,
        name,
        icon
    }
}

export const Paths = {
    //client
    home: "/",
    productContainer: "/ao-so-mi",
    detailProduct: "/detail-product/:id",
    payment: "/payment",
    confirmOrder:"/payment/confirm-order",

    //admin
    createProduct:"/admin/create-product",
    homeAdmin:"/admin",
    storeManagement:"/admin/store-management",
    loginAdmin:"/admin/login",

    notContent:"*",
}
export const adminRoute = [
    createRoute(Paths.homeAdmin, DashboardPage, "Dashboard", DashboardIcon),
    createRoute(Paths.createProduct, CreateProduct, "Thêm sản phẩm mới", AddToPhotosIcon),
    createRoute(Paths.storeManagement, StoreManagement, "Quản lý cửa hàng", StoreIcon),
];
export default [
    createRoute(Paths.home, HomePage),
    createRoute(Paths.productContainer, SomiList),
    createRoute(Paths.detailProduct, DetailProduct),
    createRoute(Paths.payment, Payment),
    createRoute(Paths.confirmOrder, ConfirmOrder),

    //not found
    createRoute(Paths.notContent, NotContent),
];