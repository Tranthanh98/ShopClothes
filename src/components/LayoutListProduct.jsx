import { Grid, MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { ListOrderBy } from '../general/enum';
import Product from './Product';

const useStyle = makeStyles({
    titlePage : {
        fontWeight : 700,
        fontSize : 24,
        fontFamily: "'Quicksand', sans-serif !important"
    },
    header:{
        display:"flex",
        justifyContent: "space-between",
        marginBottom: 20,
        // marginTop:20
    },
    orderBy:{
        width:150
    }
})

function LayoutListProduct(props){
    const classes = useStyle();
    const [orderBy, setOrderBy] = React.useState(ListOrderBy[0].value);

    const handleChangeOrderBy = (event) => {
        setOrderBy(event.target.value);
    };
    let {title, productList} = props;
    return (
        <>
            <div className={classes.header}>
                <div className={classes.titlePage}>
                    {title}
                </div>
                <Select
                    value={orderBy}
                    onChange={handleChangeOrderBy}
                    defaultValue={ListOrderBy[0].value}
                    className={classes.orderBy}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {
                            ListOrderBy.map(i=>{
                                return (
                                    <MenuItem key={i.value} value={i.value}>{i.label}</MenuItem>
                                )
                            })
                        }
                </Select>
            </div>
            <Grid container spacing={3}>
                {
                    productList.map((i, index)=>{
                        return (
                            <Grid key={i.id} item xs={12} sm={6} md={4} lg={3}>
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
        </>
    )
}
export default LayoutListProduct;