import React from 'react';
import { useSelector } from 'react-redux';
import LayoutListProduct from '../LayoutListProduct';

function SomiList(props){
    const product = useSelector(state => state.products);
    return (
        <LayoutListProduct
            title="ÁO SƠ MI"
            productList={product}
        />
    )
}
export default SomiList;