
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actClickHome } from '../../actions';
import { Paths } from '../../routes';
import $, { isPlainObject } from 'jquery';
import { Grid, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import {selecteMenuItem} from '../../actions/index';
import { ContentFooterHOC } from '../Footer/Footer';
import { COMPANY, POLICY } from '../Footer/footer-content';


const useStyles = makeStyles({
    rootMenu: {
        padding: "0px 8px 8px 8px",
    },
    titleMenu: {
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontSize: "30px",
        marginBottom: "16px"
    },
    menuWrapper: {
        // display:"flex",
        marginTop: "8px",
        marginBottom: "8px"
    },
    menuItem: {
        display: "flex",
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontSize: "20px",
        margin: "8px 0 8px 0",
        cursor:"pointer"
    },
    showSubMenu: {
        display: "block"
    },
    hideSubMenu: {
        display: "none"

    },
    logoMenuMobile: {
        textTransform: "uppercase",
        fontFamily: "cursive",
        fontSize: "40px",
        marginBottom: "16px"
    },
    pointer: {
        cursor: "pointer",
        "&:hover": {
            color: "#337ab7"
        },
        display: "flex",
        alignItems: "center",
    },
    selectedMenu:{
        color:"#fcd15c"
    }
})
const MenuItem = (props) => {
    const {menu} = props;
    const refMenu = useRef();
    const refIcon = useRef();
    const classes = useStyles();
    let isOpen = false;
    const history = useHistory();
    const _gotoMenu = (event, menu) => {
        props.setMenu(menu.id)
        props.closeModal(event)
        history.push(menu.link);
    }
    const _openSubMenu = () =>{
        if(isOpen === true){
            $(refMenu.current).css("display", "none");
            $(refIcon.current).css("transform", "rotate(0deg)")
            isOpen = false;
        }
        else{
            $(refMenu.current).css({"display": "block"});
            $(refIcon.current).css("transform", "rotate(90deg)")
            isOpen = true;
        }
    }
    return (
        <>
            <div className={classes.menuItem}>
                <div className={props.isSelected ? classes.selectedMenu : null} onClick={(e) => _gotoMenu(e, menu)}>
                    {menu.name}
                </div>
                {
                    menu.items ? (
                        <div onClick={_openSubMenu} style={{ marginLeft: 12 }}>
                            <i style={{transition: "transform 0.5s"}} ref={refIcon} className="fas fa-chevron-right"></i>
                        </div>
                    ) : null
                }
            </div>
            {
                menu.items ? (
                    <div ref={refMenu} style={{ paddingLeft: 8, display:"none", borderLeft:"1px solid gray", transition: "display 0.5s" }}>
                        {
                            RenderMenuMobile(menu.items, props)
                        }
                    </div>
                ) : null
            }
        </>
    )
}

const RenderMenuMobile = (menus, props) => {
    const classes = useStyles();
    const {closeModal} = props;
    const selectedMenu = useSelector(state => state.selectMenu);
    const dispatch = useDispatch();
    const setMenu = (id)=>{
        dispatch(selecteMenuItem(id));
    }
    return (
        <div className={classes.menuWrapper}>
            {
                menus.map((menu, index) => {
                    return (
                        <div key={menu.id}>
                            <MenuItem isSelected={selectedMenu == menu.id} setMenu={setMenu} closeModal={closeModal} menu={menu}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

function MenuMobile(props) {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const menuSeleted = useSelector(state => state.selectMenu);
    const _gotoHome = (event) => {
        dispatch(selecteMenuItem(-1));
        props.closeModal(event);
        dispatch(actClickHome());
        history.push(Paths.home);
    }
    return (
        <div className={classes.rootMenu}>
            <div onClick={_gotoHome} className={classes.logoMenuMobile}>
                Avatar
            </div>
            <div className={classes.titleMenu}>
                MENU
            </div>
            <div onClick={_gotoHome} className={`${classes.menuItem} ${menuSeleted == -1 ? classes.selectedMenu : null}`}>
                Trang chủ
            </div>
            <div>
                {
                    RenderMenuMobile(props.menuList, props)
                }
            </div>
            <div>
                {
                    ContentFooterHOC(COMPANY.title)(COMPANY.content)
                }
                {
                    ContentFooterHOC(POLICY.title)(POLICY.content)
                }
            </div>
        </div>
    )
}
export default MenuMobile;