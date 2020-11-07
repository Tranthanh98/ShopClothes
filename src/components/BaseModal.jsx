import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles({
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

export default function BaseModal(props) {
  const classes = useStyles();
  const [right, setState] = React.useState(false);

  const [value, _onChange] = useOnChangeInput();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const rightModal = () => (
    <div
      className={classes.list}
      role="presentation"
    >
        {
            props.modalBody
        }
    </div>
  );

  return (
    <div>
      <React.Fragment>
          <SearchIcon onClick={toggleDrawer(true)}></SearchIcon>
          {
              props.right ? (
                <Drawer anchor="right" open={right} onClose={toggleDrawer("right", false)}>
                    {rightModal()}
                </Drawer>
              ) : (
                <Modal
                    open={right}
                    onClose={toggleDrawer(true)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {props.modalBody}
                </Modal>
              )
          }
          
        </React.Fragment>
    </div>
  );
}
