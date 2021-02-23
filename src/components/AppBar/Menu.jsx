import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import { GetDistionatyMenu } from '../../general/DistionaryMenuTree';
import {actBreadCrumb, actClickHome} from '../../actions/index';
import { useHistory } from "react-router-dom";
import Account from './Account';
import logo from '../../assests/brand_logo.jpg';
import { Paths } from '../../routes';
import { GetMenu } from '../../actions/GetMenu/CallApi';
import menuTree from '../../reducers/menu-tree';


const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily :"'Quicksand', sans-serif!important"
    },
    dropDown: {
        position: "relative",
        "&:hover > div": {
            display: "block",
        },
        "&:hover .MuiSvgIcon-root":{
            transform: "rotate(180deg)",
        },
        paddingLeft: "5px",
        paddingRight: "5px",
        display: "flex",
        alignItems:"center"
    },
    dropdownContent: {
        display: "none",
        position: "absolute",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        padding: "12px 16px",
        zIndex: 1,
        minWidth: "170px",
        alignItems: "center",
        justifyContent: "center",
        top : "20px",
        transition :"display 0.5s",
        "&:hover > div":{
            display:"block"
        },
    },
    selectItem: {
        margin: "5px",
        display: "flex",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "#f3f3f3"
        },
        borderBottom: "1px solid gray"
    },
    iconDropDown:{
        transition: "transform 0.5s",
    },
    subMenuPosition:{
        left: "50px"
    },
    fixedMenu:{
        position: "fixed",
        top : "15px",
        backgroundColor: "#f3f3f3",
        boxShadow:"0px 8px 8px 0px rgba(0,0,0,0.2)",
        width: "100%",
        zIndex:2,
        transition: "all 1s",
        height:45
    }
})

function GetBreadCrumb(breadCrumb, mapMenu, menuItem){
    breadCrumb.unshift(menuItem);
    if(mapMenu.get(menuItem) != null){
        GetBreadCrumb(breadCrumb, mapMenu, mapMenu.get(menuItem))
    }
}


function Menu() {
    let history = useHistory();
    const [scrPosition, setScrPosition] = useState(0);
    const [mapMenu, SetMapMenu] = useState(new Map());
    const classes = useStyles();
    const menuTrees = useSelector(state => state.menuTrees);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetMenu())
        console.log("menu trees:", menuTrees);
        //let mapMenu = GetDistionatyMenu(mapMenu, menuTrees.data ? menuTrees.data.data.data : []);
        //let mapMenu = menuTree();
        //SetMapMenu(mapMenu);
        window.addEventListener("scroll", _handleScroll)
    }, []);
    const _handleScroll = () =>{
        setScrPosition(window.pageYOffset);

    }

    const _handleRedirect = (menuItem) =>{
        let breadCrumbMenu = [];
        GetBreadCrumb(breadCrumbMenu, mapMenu, menuItem)
        
        dispatch(actBreadCrumb(breadCrumbMenu));
        history.push(menuItem.link);
    }
    const onClickLogo =()=>{
        dispatch(actClickHome());
        history.push(Paths.home);
    }

    const RenderTreeMenu = (menuTrees, isChild = false) => {
        return menuTrees.map((menuItem, index) => {
            return (
                <div key={menuItem.id} className={classes.dropDown}>
                    <span onClick={()=>_handleRedirect(menuItem)} style={{cursor:"pointer"}} className={isChild ? classes.selectItem : ""} >{menuItem.name}</span>
                    {menuItem.items ? <ExpandMoreIcon classes={{
                        root: classes.iconDropDown
                    }}/> : null}
                    {
                        menuItem.items ? (
                            <div className={classes.dropdownContent}>{RenderTreeMenu(menuItem.items, true)}</div>
                        ) : null
    
                    }
                    
                </div>
            )
        })
    }
    
    return (
        <div className={`${classes.root} ${scrPosition > 102 ? classes.fixedMenu :null}`}>
            <img style={{display : scrPosition > 102 ? "block" : "none"}} onClick={onClickLogo} src={logo} width="100px"/>
            {
                menuTrees ? 
                RenderTreeMenu(menuTrees): null
            }
            {
                scrPosition > 102 ? (
                    <Account/>
                ):null
            }

        </div>
    )
};

export default Menu;