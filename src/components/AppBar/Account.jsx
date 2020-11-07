import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge, Drawer, Popover } from '@material-ui/core';
import SearchModal from './SearchModal';
import CartContainer from '../../containers/CartContainer';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    acc:{
        position:"absolute",
        display:"flex",
        right:"calc(0% + 25px)"
    },
    pd:{
        paddingLeft:"5px",
        paddingRight:"5px"
    }
})

function Account() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const carts = useSelector(state => state.carts)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (callback) => {
      setAnchorEl(null);
      if(typeof(callback) == 'function'){
        callback();
      }
    };
    const length = carts.reduce((total, i)=>{
      return total += i.quantity
    }, 0);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className={classes.acc}>
            <SimpleMenu className={classes.pd}/>
            <SearchModal />
            <Badge badgeContent={length} color="error">
              <ShoppingCartIcon onClick={handleClick} className={classes.pd}/>
            </Badge>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <CartContainer
                closeWhenDirect={handleClose}
              />
            </Popover>
        </div>
    );
};


export function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountCircleIcon onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" className={classes.pd}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default Account;