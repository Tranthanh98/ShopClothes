import React, { useEffect, useState } from 'react';
import { makeStyles, Grid, Hidden } from '@material-ui/core';
import logo from '../../assests/brand_logo.jpg'
import Account from './Account';
import Menu from './Menu';
import BreadCrumb from './BreadCrumb';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actClickHome } from '../../actions';
import { Paths } from '../../routes';

const useStyle = makeStyles({
    root: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        position:"fixed",
        width: "100%",
        top: 0,
        zIndex:2
    },
    brandShop:{
        marginTop:"20px",
        display:"flex",
        height:"20%",
        alignItems: "center",
        justifyContent:"center",
        position:"relative"
    },
    breadCrumb:{
        borderTop:"2px solid #f3f3f3",
        borderBottom:"2px solid #f3f3f3",
    }
})

function AppBarTop() {
    let history = useHistory();
    const classes = useStyle();
    const [state, setState] = useState({slide: 0, lastScrollY: 0});
    const breadCrumbList = useSelector(state=> state.breadCrumb);

    const dispatch = useDispatch();

    const onClickLogo =()=>{
        dispatch(actClickHome());
        history.push(Paths.home);
    }
    return (
        <div>
            <div className={classes.root}>
                Mua mọi thứ tại Avatar. Hotline: <b style={{ fontFamily: "monospace" }}>0986056412</b>. Email : <b style={{ color: "red", fontFamily: "monospace" }}>trantienthanh2412@gmail.com</b>
            </div>
            <div className={classes.brandShop}>
                <img onClick={onClickLogo} src={logo} width="12%"/>
                <Account/>
            </div>
            <Menu/>
            <div className={classes.breadCrumb}>
                <BreadCrumb arrayBreadCrumb={breadCrumbList}/>
            </div>
        </div>
    );
};

export default AppBarTop;