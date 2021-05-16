import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Product from '../Product';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme =>({
    title:{
        fontSize:"2.5rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer",
        "&:hover":{
            color:theme.palette.secondary.main
        },
        textAlign:"center",
    },
    horizol : {
        borderTop: "5px solid #f3f3f3",
        margin: 10
    }
}));
function HotSale(props){
    const classes = useStyles();
     return (
         <div>
            <div className={classes.horizol}></div>
            <div className={classes.title}>
                SẢN PHẨM BÁN CHẠY
            </div>
            <Grid container spacing={2}>
                {
                    props.products.map((i,index)=>{
                        return (
                            <Grid item key={i.id} item xs={12} sm={6} md={4} lg={3}>
                                <Product
                                    name={i.name}
                                    image={i.imageLink}
                                    link={i.link}
                                    price={i.price}
                                    data={i}
                                />
                            </Grid>
                        )
                    })
                }
                
            </Grid>
         </div>
     )
 }
 export default HotSale;