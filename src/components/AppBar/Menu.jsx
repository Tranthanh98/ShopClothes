import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { actBreadCrumb, actClickHome } from '../../actions/index';
import logo from '../../assests/brand_logo.jpg';
import { GetDistionatyMenu } from '../../general/DistionaryMenuTree';
import { Paths } from '../../routes';
import Account from './Account';
import $ from 'jquery';


const useStyles = makeStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Quicksand', sans-serif!important"
    },
    dropDown: {
        paddingLeft: "5px",
        paddingRight: "5px",
        display: "flex",
        alignItems: "center",
        "&:hover > div": {
            display: "block",
        },
        "&:hover .MuiSvgIcon-root": {
            transform: "rotate(180deg)",
        },
        position: "relative",
    },
    dropdownContent: {
        display: "flex",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        padding: "8px 8px",
        zIndex: 1,
        minWidth: "170px",
        alignItems: "center",
        justifyContent: "center",
        transition: "display 0.5s",
        "&:hover > div": {
            display: "block"
        },
        "&:hover .MuiSvgIcon-root": {
            transform: "rotate(-90deg)",
        },
        "&:hover":{
            backgroundColor:"#d8d6d6"
        },
        borderBottom: "1px solid #d8d6d6"
    },
    iconDropDown: {
        transition: "transform 0.5s",
    },
    fixedMenu: {
        position: "fixed",
        top: "15px",
        backgroundColor: "#f3f3f3",
        boxShadow: "0px 8px 8px 0px rgba(0,0,0,0.2)",
        width: "100%",
        zIndex: 2,
        transition: "all 1s",
        height: 45
    },
    menuItemCss: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: "0 8px 0 8px",
    },
    menuWrapper: {
        display: "flex",
        alignItems: "center"
    },
    childMenuWrapper: {
        display: "none",
        position: "absolute",
        top: 0,
        zIndex:10
    }
})

function GetBreadCrumb(breadCrumb, mapMenu, menuItem) {
    breadCrumb.unshift(menuItem);
    if (mapMenu.get(menuItem) != null) {
        GetBreadCrumb(breadCrumb, mapMenu, mapMenu.get(menuItem))
    }
}


function Menu() {
    let history = useHistory();
    const refMenu = useRef();
    const refAccount = useRef();
    const refImg = useRef();
    const [mapMenu, SetMapMenu] = useState(new Map());
    const classes = useStyles();
    const menuTrees = useSelector(state => state.menuTrees);
    const dispatch = useDispatch();
    useEffect(() => {
        //dispatch(GetMenu());
        let testMap = GetDistionatyMenu(mapMenu, menuTrees);
        SetMapMenu(testMap);
        window.addEventListener("scroll", _handleScroll)
    }, []);
    const _handleScroll = () => {
        let currPosition = window.scrollY;
        if(currPosition > 102){
            $(refMenu.current).css({
                position: "fixed",
                top: "15px",
                "background-color": "#f3f3f3",
                "box-shadow": "0px 8px 8px 0px rgba(0,0,0,0.2)",
                width: "100%",
                "z-index": 2,
                transition: "all 1s",
                height: 45
            });
            $(refAccount.current).css({
                "display": "block",
                "margin-bottom":"23px"
            });
            $(refImg.current).css("display", "block")
        }
        else{
            $(refMenu.current).css({
                position: "",
                top: "",
                "background-color": "",
                "box-shadow": "",
                width: "",
                "z-index": "",
                transition: "",
                height: ""
            });
            $(refAccount.current).css("display", "none");
            $(refImg.current).css("display", "none")
        }

    }

    const _handleRedirect = (menuItem) => {
        let breadCrumbMenu = [];
        GetBreadCrumb(breadCrumbMenu, mapMenu, menuItem)

        dispatch(actBreadCrumb(breadCrumbMenu));
        history.push(menuItem.link);
    }
    const onClickLogo = () => {
        dispatch(actClickHome());
        history.push(Paths.home);
    }

    const RenderTreeMenu = (menuTrees, isChild = false) => {
        return (
            <div className={classes.childMenuWrapper} style={{ top: isChild ? "0px" : 20, left: isChild ? "186px" : 0 }}>
                {
                    menuTrees.map((menuItem, index) => {
                        return (
                            <div key={index} className={classes.dropdownContent}>
                                <span onClick={() => _handleRedirect(menuItem)} style={{ cursor: "pointer" }}>{menuItem.name}</span>
                                {menuItem.items ? <ExpandMoreIcon classes={{
                                    root: classes.iconDropDown
                                }} /> : null}
                                {
                                    menuItem.items ? (
                                        RenderTreeMenu(menuItem.items, true)
                                    ) : null

                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div ref={refMenu} className={classes.root}>
            <img ref={refImg}
                 style={{ display: "none" }} 
                 onClick={onClickLogo} src={logo} width="100px" />
            <div className={classes.menuWrapper}>
                {
                    menuTrees.map((menuItem, index) => {
                        return (
                            <div className={classes.dropDown} key={index}>
                                <span onClick={() => _handleRedirect(menuItem)} className={classes.menuItemCss}>{menuItem.name}
                                    {menuItem.items ? <ExpandMoreIcon classes={{
                                        root: classes.iconDropDown
                                    }} /> : null}

                                </span>
                                {
                                    menuItem.items ? (
                                        RenderTreeMenu(menuItem.items)
                                    ) : null

                                }
                            </div>
                        )
                    })
                }
            </div>
            <div style={{display:"none"}} ref={refAccount}>
                <Account/>
            </div>
            {/* {
                scrPosition > 102 ? (
                    <Account />
                ) : null
            } */}

        </div>
    )
};

export default Menu;