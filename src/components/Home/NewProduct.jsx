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
    const db = Firebase.firestore();
    // const _addFireStorage = ()=>{
    //     let sizes = [
    //         {
    //             id:1,
    //             name: "XS"
    //         },
    //         {
    //             id:2,
    //             name: "S"
    //         },
    //         {
    //             id:3,
    //             name: "M"
    //         },
    //         {
    //             id:4,
    //             name: "L"
    //         },
    //         {
    //             id:5,
    //             name: "XL"
    //         },
    //         {
    //             id:6,
    //             name: "XXL"
    //         }
    //     ]
    //     for(let size of sizes){
    //         db.collection("size").doc(size.name).set(size)
    //         .then(() => {
    //             console.log("Document successfully written!");
    //         })
    //         .catch((error) => {
    //             console.error("Error writing document: ", error);
    //         });
    //     }
    // }
    const _updateData = ()=>{

    }
    const rootRef = db.collection("products").where("name", "array-contains", "Vớ")
                    .get()
                    .then((res)=>{
                        console.log("res:", res);
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