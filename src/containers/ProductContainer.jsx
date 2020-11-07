import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import { Grid } from '@material-ui/core';


function ProductContainer(props){
   const trousers = useSelector(state => state.products);
   return (
       <Grid container spacing={3}>
           {
               trousers.map((i, index)=>{
                return (
                    <Grid key={i.id} item xs={12} sm={6} md={3} lg={3}>
                        <Product
                            name={i.name}
                            image={i.image}
                            link={i.link}
                            price={i.price}
                            data={i}
                        />
                    </Grid>
                    
                )
            })
           }
       </Grid>
   )
}
export default ProductContainer;