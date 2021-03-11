
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actClickHome } from '../../actions';
import { Paths } from '../../routes';

const useStyles = makeStyles({
    rootMenu:{
        padding:"75px 8px 8px 8px"
    },
    titleMenu:{
        textTransform:"uppercase",
        fontFamily: "monospace",
        fontSize:"30px",
        marginBottom:"16px"
    },
    menuWrapper:{
        display:"flex",
        marginTop:"8px",
        marginBottom:"8px"
    },
    showSubMenu:{
        display:"block"
    },
    hideSubMenu:{
        display:"none"

    }
})

const RenderMenuMobile = (menus, props, isChild = false)=>{
    const [showMenu, setShowMenu] = useState([]);
    const classes = useStyles();
    const _openMenu =(idMenu)=>{
        let cloneData = [...showMenu];
        if(cloneData.includes(idMenu)){
            let index = cloneData.findIndex(i=> i == idMenu);
            cloneData.splice(index, 1);
        }
        else{
            cloneData.push(idMenu);
        }
        setShowMenu(cloneData);
    }
    const history = useHistory();
    const _gotoMenu = (event, link)=>{
        props.closeModal(event)
        history.push(link);
    }
    return (
        menus.map((menu, index) => {
            return (
                <div className={showMenu.includes(menu.id) || !isChild ? classes.showSubMenu : classes.hideSubMenu}>
                    <div key={index} className={classes.menuWrapper}>
                        <div onClick={(event)=>_gotoMenu(event, menu.link)} style={{marginRight:4, fontFamily:"monospace", fontSize:15}}>
                            {menu.name}
                        </div>
                        <div>
                            {menu.items ? (
                                <div onClick={() => _openMenu(menu.id)}>
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            ): null}
                        </div>
                    </div>
                    {menu.items ? 
                            RenderMenuMobile(menu.items,props, true)
                        : null}
                </div>
            )
        })
    )
}

function MenuMobile(props){
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const _gotoHome = (event)=>{
        props.closeModal(event);
        dispatch(actClickHome());
        history.push(Paths.home);
    }
    return (
        <div className={classes.rootMenu}>
            <div className={classes.titleMenu}>
                MENU
            </div>
            <div onClick={_gotoHome} style={{marginRight:4, fontFamily:"monospace", fontSize:15}}>
                Trang chủ
            </div>
            <div>
                {
                    RenderMenuMobile(props.menuList, props)
                }
            </div>
        </div>
    )
}
export default MenuMobile;