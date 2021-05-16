import React, { useEffect, useState } from 'react';
import { EnumType } from '../../general/enum';
import * as httpClient from '../../general/HttpClient';
import LayoutListProduct from '../LayoutListProduct';

function SomiList(props){
    const [products, setProducts] = useState([]);
    const _getData = async()=>{
        const RequestModel = {
            Type: EnumType.AoSoMiNam
        } 
        let response = await httpClient.sendPost('/product/get', {RequestModel});
        if(!response.data.isSuccess){
            return;
        }
        setProducts(response.data.data.data);
    }
    useEffect(()=>{
        _getData();
    },[])
    return (
        <LayoutListProduct
            title="ÁO SƠ MI"
            productList={products}
        />
    )
}
export default SomiList;