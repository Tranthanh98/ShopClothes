import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, IconButton, TextField, Button } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { actDeleteItem, addAlert, getProductSize, plusQuantity, selectSize, subQuantity } from '../actions/index';
import { formatMoney } from '../general/helper';
import RenderSize from '../components/Cart/RenderSize';
import { useHistory } from 'react-router-dom';
import { Paths } from '../routes';
import * as Firebase from 'firebase';
import CartContent from '../components/Common/CartContent';

const useStyles = makeStyles({
    rootCart: {
        padding: 10,
        maxWidth: "300px",
        zIndex: 99
    },
    quantity: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    totalPrice: {
        borderTop: "3px #f3f3f3 solid"
    },
    payment: {
        display: "flex",
        justifyContent: "flex-end",
        
    }
})

const CartContainer = (props) => {
    const carts = useSelector(state => state.carts);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const totalPrice = carts.reduce((price, item) => {
        return price += (Number(item.product.price) * Number(item.quantity))
    }, 0);
    const _handlePayment = ()=>{
        for(let cart of carts){
            if(!cart.size){
                dispatch(addAlert("Còn sản phẩm chưa chọn size", "error"));
                return;
            }
        }
        props.closeWhenDirect(()=>{
            history.push(Paths.payment);
        })
    }
    const _deleteItemFromCart = (item)=>{
        dispatch(actDeleteItem(item.id));
        dispatch(addAlert("Xóa thành công", "success"));
    }
    return (
        <div className={classes.rootCart}>
            {
                carts.length == 0 ? (
                    <div>Không có sản phẩm nào trong giỏ</div>
                ) : (
                        <CartContent isRenderSize={true}/>
                    )
            }
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {
                        carts.length != 0 ? (
                            <div className={classes.payment}>
                                <Button onClick={_handlePayment} color="secondary">Thanh toán</Button>
                            </div>
                        ) : null
                    }
                </Grid>
            </Grid>

        </div>
    );
};

export default CartContainer;