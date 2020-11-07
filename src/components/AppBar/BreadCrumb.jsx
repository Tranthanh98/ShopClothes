import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetDistionatyMenu } from '../../general/DistionaryMenuTree';
import { actBreadCrumb, actClickHome } from '../../actions';

const useStyles = makeStyles({
    rootBreadCrumb : {
        //backgroundColor:"#d8d6d6",
        display:"flex",
        paddingLeft:"20px",
        paddingRight:"20px",
        margin: "5px"
    },
    divItems:{
        backgroundColor:"#d8d6d6",
        paddingRight:"2px",
        paddingLeft:"2px",
        fontFamily :"'Quicksand', sans-serif!important",
        cursor:"pointer",
        alignItems: "center"
    },
    triangle: {
        color: "#d8d6d6",
        borderLeft: "13px solid",
        borderTop: "13px solid transparent",
        borderBottom:"13px solid transparent"
    },
    beforeTriangle:{
        backgroundColor:"#d8d6d6",
        borderLeft: "13px white solid",
        borderTop: "13px solid #d8d6d6",
        borderBottom:"13px solid #d8d6d6"
    }
})
function GetBreadCrumb(breadCrumb, mapMenu, menuItem){
    breadCrumb.unshift(menuItem);
    if(mapMenu.get(menuItem) != null){
        GetBreadCrumb(breadCrumb, mapMenu, mapMenu.get(menuItem))
    }
}


function BreadCrumb(props){

    let history = useHistory();
    const [mapMenu, SetMapMenu] = useState(new Map());
    const classes = useStyles();
    const menuTrees = useSelector(state => state.menuTrees);
    useEffect(()=>{
        let testMap = GetDistionatyMenu(mapMenu, menuTrees);
        SetMapMenu(testMap);
    }, []);

    

    const dispatch = useDispatch();

    const _handleRedirect = (menuItem) =>{
        if(menuItem.link == "/"){
            dispatch(actClickHome());
        }else{
            let breadCrumbMenu = [];
            GetBreadCrumb(breadCrumbMenu, mapMenu, menuItem);
            dispatch(actBreadCrumb(breadCrumbMenu));
        }
        history.push(menuItem.link);
    }
    return (
        <div className={classes.rootBreadCrumb}>
            {
                props.arrayBreadCrumb.map((i, index)=>{
                    return (
                        <Fragment key={index}>
                            <div className={classes.beforeTriangle}></div>
                            <div onClick={()=>_handleRedirect(i)} key={index} className={classes.divItems}>
                                {i.name}
                            </div>
                            <div className={classes.triangle}></div>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default BreadCrumb;