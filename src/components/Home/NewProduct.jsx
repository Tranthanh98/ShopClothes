import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Product from '../Product';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SelectInput from '@material-ui/core/Select/SelectInput';
import {sleep} from '../../general/helper';
import product from '../../reducers/products';

const useStyles = makeStyles({
    root:{
        position: "relative"
    },
    title:{
        fontSize:"2.5rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer",
        "&:hover":{
            color:"#337ab7"
        }
    },
    containerItem:{
        display:"flex",
        overflowX:"hidden",
        width:"100%",
        
        
    },
    item:{
        width:"315px",
        marginLeft:"5px",
        marginRight:"5px"
    },
    btnIconArrow:{
        backgroundColor: "rgba(123,243,243, 0.3)",
        borderRadius:"50%",
        position:"absolute",
        width:40,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:99,
        top:"calc(50% - 25px)"
    },
    leftIcon:{
        left:"calc(2%)"
    },
    rightIcon:{
        right:"calc(2%)"
    }
});
export default function NewProduct(props){
    const classes = useStyles();
    const allProducts = useSelector(state => state.products);
    const products = allProducts.filter(i=> i.isNew == true);
    let ref = React.createRef();
    const nextSlider = async ()=>{
        for(let i = 0; i< 265; i+=10){
            await sleep(1);
            ref.current.scrollLeft +=10;
        }
    }
    const prevSlider = async() =>{
        for(let i = 0; i< 265; i+=10){
            await sleep(1);
            ref.current.scrollLeft -=10;
        }
    }
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                SẢN PHẨM MỚI
            </div>
            <div onClick={prevSlider} className={`${classes.btnIconArrow} ${classes.leftIcon}`}>
                <ChevronLeftIcon/>
            </div>
            <div ref={ref} className={classes.containerItem}>
                
                {
                    products.map((i,index)=>{
                        return (
                            <div key={index} className={classes.item}>
                                <Product
                                    name={i.name}
                                    image={i.image}
                                    link={i.link}
                                    price={i.price}
                                    data={i}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div onClick={nextSlider} className={`${classes.btnIconArrow} ${classes.rightIcon}`}>
                <ChevronRightIcon/>
            </div>
            
        </div>
    )
}