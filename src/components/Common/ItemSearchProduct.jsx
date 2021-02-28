import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paths } from '../../routes';

const useStyle = makeStyles({
    leftImage:{
        margin:4,
    },
    itemWrap:{
        display:"flex",
        boxShadow: "0 2px 5px #888888",
        margin:8,
        borderRadius:4,
        cursor:"pointer"
    },
    nameProduct:{
        color:"black",
        fontWeight:"bold",
        marginBottom:4
    },
    priceProduct:{
        color:"red",
        fontWeight:"bold",
        marginBottom:4
    }
});

function ItemSearchProduct(props){
    const classes = useStyle();
    const {item, closeModal} = props;
    const history = useHistory();
    const _viewDetailProduct = (event) => {
        let path = Paths.detailProduct.split(":");
        history.push(path[0]+item.id);
        closeModal(event);
    }
    return (
        <div className={classes.itemWrap} onClick={_viewDetailProduct}>
            <div className={classes.leftImage}>
                <img src={item.image} width={100} height="auto"/>
            </div>
            <div>
                <div className={classes.nameProduct}>{item.name}</div>
                <div className={classes.priceProduct}>{item.price}</div>
                <div>{item.description}</div>
            </div>
        </div>
    )
}
export default ItemSearchProduct;