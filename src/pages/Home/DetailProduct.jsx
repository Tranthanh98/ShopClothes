import { Grid, makeStyles, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddToCart, addAlert } from '../../actions';
import RenderSize from '../../components/Cart/RenderSize';
import { formatMoney } from '../../general/helper';

const useStyles = makeStyles({
    container: {
        borderBottom : "1px dotted black",
        marginBottom : 5,
        marginTop: 5

    },
    
    formQuantity : {
        display :"flex"
    },
    btn: {
        width:25,
        height:25,
        backgroundColor:"#f3f3f3",
        cursor:"pointer",
        "&:hover":{
            backgroundColor:"black",
            color:"white"
        },
        margin:"0 4px 0 4px"
    },
    inputText : {
        width: 70,
        textAlign: "center",
        height:18
    },
    btnAddCart : {
        width:"100%",
        height: 40,
        backgroundColor: "#bfc7c7",
        color:"#fff",
        marginTop:20,
        fontFamily:"'Quicksand', sans-serif!important",
        transition:"all 1s",
        cursor:"pointer",
        "&:hover":{
            backgroundColor: "#fff",
            color:"black",
        },
        border : "1px solid gray"
    }
})

function useQuantity(defaultValue){
    const [quantity, setQuantity]= useState(defaultValue);
    const increaseQuantity = ()=>{
        if(quantity <= 0){
            setQuantity(1);
        }
        else{
            setQuantity(quantity + 1);
        }
        
    }
    const decreaseQuantity = ()=>{
        if(quantity - 1 <= 0){
            setQuantity(1);
        }
        else{
            setQuantity(quantity - 1);
        }
        
    }
    const onChangeQuantity = (e)=>{
        let _value = e.target.value;
        _value = parseFloat(_value.toString().replace(/[\,\s]/g, ""));
        if(isNaN(_value)) _value = 1; 
        setQuantity(_value);
    }
    return [quantity, increaseQuantity, decreaseQuantity, onChangeQuantity];
}

function DetailProduct(props){
    const classes = useStyles();
    const [product, setProduct] = useState();
    const [sizeSelected, setSizeSelected] = useState();
    const [isMatch, setIsMatch] = useState(true);
    const stateProduct = useSelector(state => state.products);
    const [quantity, increaseQuantity, decreaseQuantity, onChangeQuantity] = useQuantity(1);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        window.scrollTo(0,0);
        let proD = stateProduct.find(i=> i.id == props.match.params.id);
        setProduct(proD);
        
    },[]);
    const _handleSetSize = (sizeSelected)=>{
        setSizeSelected(sizeSelected);
    }
    const _handleAddCart = ()=>{
        if(sizeSelected){
            dispatch(actAddToCart(product, quantity, sizeSelected));
            dispatch(addAlert("Thêm vào giỏ thành công", "success"));
        }
        else{
            dispatch(addAlert("Bạn phải chọn size trước", "error"))
        }
    }
    return (
        <div>
            {product ? (
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <img width="100%" src={product.image}/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography className={classes.container} color="error">{formatMoney(product.price)}đ</Typography>
                        <div className={classes.container}>{
                            product.description.split("-").map((m, index)=>{
                                return <Typography key={index}>-{m}</Typography>
                            })
                            
                        }</div>
                        <RenderSize
                            listSize={product.size}
                            sizeSelected={sizeSelected}
                            onChangeSize={_handleSetSize}
                        />
                        <div className={classes.formQuantity}>
                            <div className={classes.btn}>
                                <RemoveIcon onClick={decreaseQuantity}/>
                            </div>
                            <div>
                                <input value={quantity} onChange={onChangeQuantity} className={classes.inputText}/>
                            </div>
                            <div className={classes.btn}>
                                <AddIcon onClick={increaseQuantity}/>
                            </div>
                        </div>
                        
                        <button onClick={_handleAddCart} className={classes.btnAddCart}>THÊM VÀO GIỎ</button>
                        
                    </Grid>
                </Grid>
            ):null}
        </div>
    )
}
export default DetailProduct;