import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';


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

  const [value, _onChange] = useOnChangeInput();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
    >
        <div className={classes.titleSearch}>
            <span style={{marginRight: "5px"}}>TÌM KIẾM SẢN PHẨM</span>
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
