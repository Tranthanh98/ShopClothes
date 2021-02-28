import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import {initialState} from '../../reducers/products';
import ItemSearchProduct from '../Common/ItemSearchProduct';

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

function useOnChangeInput(){
  const [value, setValue] = useState("");

  const _onChange = (e) =>{
    setValue(e.target.value);
  }
  return [value, _onChange];
}

export default function SearchModal() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [productList, setProductList] = React.useState([]);
  const [value, _onChange] = useOnChangeInput();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  useEffect(()=> {
    if(value){
      let data = initialState.filter(i => i.name.toLowerCase().includes(value.toLowerCase()));
      setProductList(data);
    }
    else{
      setProductList([]);
    }
  }, [value])

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
                value={value}
                onChange={_onChange}
                placeholder="Nhập tên sản phẩm"
            />
            <SearchIcon/>
        </div>
        <div>
          {productList.map((item, index)=>{
            return (
              <ItemSearchProduct closeModal={toggleDrawer("right", false)} key={item.id} item={item}/>
            )
          })}
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
