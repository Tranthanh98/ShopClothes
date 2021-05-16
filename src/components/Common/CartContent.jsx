import { Grid, IconButton, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actDeleteItem, addAlert, plusQuantity, selectSize, subQuantity } from '../../actions/index';
import { formatMoney } from '../../general/helper';
import RenderSize from '../Cart/RenderSize';

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

function CartContent({isRenderSize}) {
    const carts = useSelector(state => state.carts);
    const classes = useStyles();
    const dispatch = useDispatch();
    const totalPrice = carts.reduce((price, item) => {
        return price += (Number(item.product.price) * Number(item.quantity))
    }, 0);
    const _deleteItemFromCart = (item)=>{
        dispatch(actDeleteItem(item.id));
        dispatch(addAlert("Xóa thành công", "success"));
    }
    return (
        <div>
            {
                carts.map((item, index) => {
                    return (
                        <Grid key={item.product.id + index + item.product.name} container>
                            <Grid item xs={4}>
                                <img width="70%" src={item.product.imageLink} />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography>{item.product.name}</Typography>
                                <Typography color="error">{formatMoney(item.product.price, "₫")}</Typography>
                                <Typography>Size: <b>{item.size ? item.product.size.find(i=> i.value == item.size)?.label : "Chưa chọn size"}</b></Typography>
                                {
                                    isRenderSize ? (
                                        <RenderSize 
                                            listSize={item.product.size} 
                                            sizeSelected={item.size} 
                                            onChangeSize={(sizeSelected)=>{
                                                dispatch(selectSize(item.product, sizeSelected.value, carts, item.id))}
                                            }
                                        />
                                    ) : null
                                }
                                <div className={classes.quantity}>
                                    <IconButton>
                                        <RemoveIcon onClick={() => dispatch(subQuantity(item.id, item.quantity))} />
                                    </IconButton>
                                    <Typography>{item.quantity}</Typography>
                                    <IconButton >
                                        <AddIcon onClick={() => dispatch(plusQuantity(item.id, item.quantity))} />
                                    </IconButton>
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <CloseIcon onClick={() => _deleteItemFromCart(item)} />
                            </Grid>
                        </Grid>
                    )
                })
            }
            <div className={classes.totalPrice}>
                        <Grid container>
                            <Grid item xs={6}>Thành tiền:</Grid>
                            <Grid item xs={6}>
                                <b>{formatMoney(totalPrice, "₫")}</b>
                            </Grid>
                        </Grid>
                    </div>
        </div>
    )
}

CartContent.propTypes = {

}

export default CartContent

