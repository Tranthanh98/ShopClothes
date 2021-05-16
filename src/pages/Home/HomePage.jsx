import React, { useEffect, useState } from 'react';
import CarouselHomePage from '../../components/Home/Carousel';
import HotSale from '../../components/Home/HotSale';
import NewProduct from '../../components/Home/NewProduct';
import * as Firebase from 'firebase';
import * as httpClient from '../../general/HttpClient';
import { useDispatch } from 'react-redux';
import { updateLoading } from '../../actions/progress.action';

function HomePage(){
    const [newProducts, setNewProduct] = useState([]);
    const [hotProducts, setHotProduct] = useState([]);
    const db = Firebase.firestore();
    const dispatch = useDispatch();

    const _getDefaultData = async ()=>{
        dispatch(updateLoading(40, "Đang tải dữ liệu"));
        let response = await httpClient.sendGet("/product/GetHomePageProduct");
        if(!response.data.isSuccess){
            return;
        }
        dispatch(updateLoading(100, "Ứng dụng đã sẵn sàng"));
        setNewProduct(response.data.data.newProductList);
        setHotProduct(response.data.data.hotSaleList);
    }
    useEffect(()=>{
        _getDefaultData();
    },[]);
    return(
        <>
            <CarouselHomePage/>
            <NewProduct products={newProducts}/>
            <HotSale products={hotProducts}/>
        </>
        
    )
}
export default HomePage;