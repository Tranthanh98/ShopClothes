
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    rootMenu:{
        padding:"8px"
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

const RenderMenuMobile = (menus, isChild = false)=>{
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
    const _gotoMenu = (link)=>{
        history.push(link);
    }
    return (
        menus.map((menu, index) => {
            return (
                <div className={showMenu.includes(menu.id) || !isChild ? classes.showSubMenu : classes.hideSubMenu}>
                    <div key={index} className={classes.menuWrapper}>
                        <div onClick={()=>_gotoMenu(menu.link)} style={{marginRight:4, fontFamily:"monospace", fontSize:15}}>
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
                            RenderMenuMobile(menu.items, true)
                        : null}
                </div>
            )
        })
    )
}

function MenuMobile(props){
    const classes = useStyles();
    return (
        <div className={classes.rootMenu}>
            <div className={classes.titleMenu}>
                MENU
            </div>
            <div>
                {
                    RenderMenuMobile(props.menuList)
                }
            </div>
        </div>
    )
}
export default MenuMobile;