import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Product from '../Product';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SelectInput from '@material-ui/core/Select/SelectInput';
import {sleep} from '../../general/helper';
import * as Firebase from 'firebase'


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
        overflowX:"auto",
        width:"100%",
        '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            borderRadius:"8px"
          }
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
    let ref = React.createRef();
    const nextSlider = ()=>{
        let currPosition = ref.current.scrollLeft;
        let nextPosition;
        if(currPosition % 265 == 0){
            nextPosition =  currPosition + 265;
        }
        else{
            nextPosition = Math.ceil(currPosition / 265) * 265;
        }
        ref.current.scrollTo({left: nextPosition, behavior: "smooth"});
    }
    const prevSlider = async() =>{
        let currPosition = ref.current.scrollLeft;
        let nextPosition;
        if(currPosition % 265 == 0){
            nextPosition =  currPosition - 265;
        }
        else{
            nextPosition = Math.floor(currPosition/265) * 265;
        }
        ref.current.scrollTo({left: nextPosition, behavior: "smooth"});
    }
    const db = Firebase.firestore();
    const _updateData = ()=>{

    }
    const rootRef = db.collection("products").where("name", "array-contains", "Vớ")
                    .get()
                    .then((res)=>{
                        res.forEach(i=>{
                            console.log("i", i.data())
                        })
                    })
                    .catch(e => console.log("err:",e))
    return (
        <div className={classes.root}>
            {/* <Button onClick={_addFireStorage}>Thêm data</Button> */}
            <div className={classes.title}>
                SẢN PHẨM MỚI
            </div>
            <div onClick={prevSlider} className={`${classes.btnIconArrow} ${classes.leftIcon}`}>
                <ChevronLeftIcon/>
            </div>
            <div ref={ref} className={classes.containerItem}>
                
                {
                    props.products.map((i,index)=>{
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