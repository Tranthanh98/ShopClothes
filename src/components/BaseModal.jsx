import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
  rootModal:{
    width:"100vw",
  },
  list: {
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

export default function BaseModal(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    right:false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const _closeModal = ()=>{
    console.log("props:", props.dir);
    toggleDrawer(props.dir, false);
  }
  let body = React.cloneElement(
    props.modalBody,
    {
      closeModal: _closeModal
    }
  )

  const list = (anchor) => (
    <div
      className={classes.list}
      style={{width:props.width}}
      role="presentation"
    >
        {body}
    </div>
  );

  
  return (
    <div>
      <React.Fragment>
          <div onClick={toggleDrawer(props.dir, true)}>
            <i className={props.iconClassName}></i>
          </div>
          <Drawer anchor={props.dir} open={state[props.dir]} onClose={toggleDrawer(props.dir, false)}>
            {list(props.dir)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
