
import { makeStyles } from '@material-ui/styles';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actClickHome } from '../../actions';
import { Paths } from '../../routes';
import $, { isPlainObject } from 'jquery';
import { Grid, Typography } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';


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
    }
})
const MenuItem = (props) => {
    const {menu} = props;
    const refMenu = useRef();
    const refIcon = useRef();
    const classes = useStyles();
    let isOpen = false;
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
                <div>
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
                            RenderMenuMobile(menu.items, props, true)
                        }
                    </div>
                ) : null
            }
        </>
    )
}

const RenderMenuMobile = (menus, props, isChild = false) => {
    const [showMenu, setShowMenu] = useState(0);
    const refMenu = useRef();
    const classes = useStyles();
    const _openMenu = (idMenu) => {
        setShowMenu(idMenu);
    }
    const history = useHistory();
    const _gotoMenu = (event, link) => {
        props.closeModal(event)
        history.push(link);
    }
    return (
        <div className={classes.menuWrapper}>
            {
                menus.map((menu, index) => {
                    return (
                        <div key={menu.id}>
                            <MenuItem menu={menu}/>
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
    const _gotoHome = (event) => {
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
            <div onClick={_gotoHome} className={classes.menuItem}>
                Trang chủ
            </div>
            <div>
                {
                    RenderMenuMobile(props.menuList, props)
                }
            </div>
            <div>
                <Grid item xs={12} md={3}>
                    <Typography className={classes.pointer} variant="h6">Thông tin cửa hàng</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}>
                        <RoomIcon />
                    103 Sư Vạn Hạnh</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}><RoomIcon />408 Điện Biên Phủ</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}><RoomIcon />601 Hai Bà Trưng</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography className={classes.pointer} variant="h6">Công ty</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}>Tuyển dụng</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}>Hệ thống cửa hàng</Typography>
                    <Typography style={{marginLeft:4}} className={classes.pointer}>Chăm sóc khách hàng</Typography>
                </Grid>
            </div>
        </div>
    )
}
export default MenuMobile;