import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import { Box, CircularProgress, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {initialState} from '../../reducers/products';
import ItemSearchProduct from '../Common/ItemSearchProduct';
import * as httpClient from '../../general/HttpClient';
import { debounce } from 'lodash';

const useStyles = makeStyles({
  rootModal:{
    width:"100vw",
  },
  list: {
    width: 350,
    padding:"10px"
  },
  titleSearch:{
      display:"flex",
      alignItems: "center",
      justifyContent: "center"
  },
  search:{
      marginTop:"10px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
  }
});


export default function SearchModal() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [productList, setProductList] = React.useState([]);
  const [searchText, setSearchText] = React.useState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const _getProduct = async (value)=>{
    if(value){
        let RequestModel = {
          SearchText :  value,
        }
        let response = await httpClient.sendPost('/product/get', {RequestModel})
        if(!response.data.isSuccess){
          return;
        }
        setProductList(response.data.data.data);
      }
      else{
        setProductList([]);
      }
  }
  const _debounceGetData = useCallback(debounce((nextValue)=> _getProduct(nextValue), 600), []);
  const _onChange = (e)=>{
    const {value} = e.target;
    setSearchText(value);
    _debounceGetData(value);
  }
  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
    >
        <div className={classes.titleSearch}>
            <span style={{marginLeft: "5px"}}>TÌM KIẾM SẢN PHẨM</span>
            <ClearIcon onClick={toggleDrawer("right", false)}/>
        </div>
        <div className={classes.search}>
            <TextField
                value={searchText}
                onChange={_onChange}
                placeholder="Nhập tên sản phẩm"
            />
            <SearchIcon/>
        </div>
        <div>
          {productList.length > 0 ? productList.map((item, index)=>{
            return (
              <ItemSearchProduct closeModal={toggleDrawer("right", false)} key={item.id} item={item}/>
            )
          }): (
            <Box display="flex" justifyContent="center">
              {searchText ?<CircularProgress />:null}
            </Box>
          )}
        </div>
    </div>
  );

  return (
    <div>
      <React.Fragment>
          <SearchIcon onClick={toggleDrawer("right", true)}></SearchIcon>
          <Drawer  anchor="right" open={state.right} onClose={toggleDrawer("right", false)}>
            {list("right")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
