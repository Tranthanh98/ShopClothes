import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import React from 'react';
import { adminRoute } from '../../routes';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../actions/admin-menu.action';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
    colorWhite:{
        color:"white"
    },
    active:{
        backgroundColor:"#223442"
    }
})
function MenuList(props) {
    const classes = useStyle();
    const history = useHistory();
    const dispatch =useDispatch();
    const menuSelected = useSelector(state => state.adminMenu);
    const _onClickMenu = (menu)=>{
        dispatch(selectMenu(menu));
        history.push(menu.path);
    }
    return (
        <div>
            {
                adminRoute.map((route, index) =>{
                    return (
                        <Tooltip key={index} title={route.name}>
                            <ListItem className={menuSelected.name == route.name ? classes.active :""} onClick={()=>_onClickMenu(route)} button>
                                <ListItemIcon className={classes.colorWhite}>
                                    <route.icon/>
                                    {/* <i size="5x" className={route.icon}></i> */}
                                </ListItemIcon>
                                <ListItemText className={classes.colorWhite} primary={route.name} />
                            </ListItem>
                        </Tooltip>
                    )
                }
                )
            }
        </div>
    )
}
export default MenuList;