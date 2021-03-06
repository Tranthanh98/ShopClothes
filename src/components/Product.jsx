import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Typography, Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import {actAddToCart} from '../actions';
import {formatMoney} from '../general/helper';
import { useHistory } from 'react-router-dom';
import { Paths } from '../routes';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
      minWidth: 250,
      minHeight : 315,
      cursor:"pointer",
      position:"relative",
      "&:hover > div":{
        opacity:1
      },
      padding:theme.spacing(1)
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: theme.typography.pxToRem(14),
    },
    pos: {
      marginBottom: 12,
    },
    iconPositionShop:{
      position:"absolute",
      right: "15px",
      top : "15px",
      height: "40px",
      width: "40px",
      backgroundColor : "rgba(255,12,1,0.1)",
      borderRadius : "50%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      transition : "top 0.5s",
      opacity: 0,
      "&:hover":{
        top : "10px"
      }
    }
}));

function Product(props){
    let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const viewDetailProduct = (id)=>{
      let path = Paths.detailProduct.split(":");
      history.push(path[0]+id);
    }
    return (
        <Card className={classes.root} variant="outlined">
             <Tooltip title="Thêm vào giỏ hàng">
              <div className={classes.iconPositionShop}>
                  <ShoppingCartIcon onClick={() => dispatch(actAddToCart(props.data, 1, null))}/>
              </div>
            </Tooltip>
            <Typography onClick={()=>viewDetailProduct(props.data.id)} align="center">
                <img src={props.image} alt="" width="200px"/>
            </Typography>
            <Typography align="center">
                {props.name}
            </Typography>
            <Typography align="center" color="error">
                {formatMoney(props.price, "₫")}
            </Typography>
        </Card>
    )
}
export default Product;