import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actClickHome } from '../../actions';
import logo from '../../assests/brand_logo.jpg';
import { Paths } from '../../routes';
import BaseModal from '../BaseModal';
import Account from './Account';
import BreadCrumb from './BreadCrumb';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

const useStyle = makeStyles({
    root: {
        backgroundColor: "#f3f3f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 2
    },
    brandShop: {
        marginTop: "20px",
        display: "flex",
        height: "20%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    breadCrumb: {
        borderTop: "2px solid #f3f3f3",
        borderBottom: "2px solid #f3f3f3",
    },
    rootMobile: {
        display: "flex",
        position: "fixed",
        zIndex: "10",
        background: "white",
        padding: "20px 20px 0px 20px"
    }
})

function AppBarTop(props) {
    let history = useHistory();
    const classes = useStyle();
    const breadCrumbList = useSelector(state => state.breadCrumb);
    const menuTrees = useSelector(state => state.menuTrees);

    const dispatch = useDispatch();

    const onClickLogo = () => {
        dispatch(actClickHome());
        history.push(Paths.home);
    }
    return (
        props.isMobile ? (
            <div className={classes.rootMobile}>
                <div style={{ flexGrow: 1 }}>
                    <BaseModal
                        modalBody={<MenuMobile menuList={menuTrees} />}
                        iconClassName="fas fa-bars fa-2x"
                        dir="left"
                        width="70vw"
                    />
                </div>
                <div style={{ flexGrow: 3, justifyContent: "center" }}>
                    <img onClick={onClickLogo} src={logo} width="15%" />
                </div>
                <div style={{ flexGrow: 1 }}>
                    <Account />
                </div>
            </div>
        ) : (
            <>
                <div className={classes.root}>
                    Mua mọi thứ tại Avatar. Hotline: <b style={{ fontFamily: "monospace" }}>0986056412</b>. Email : <b style={{ color: "red", fontFamily: "monospace" }}>trantienthanh2412@gmail.com</b>
                </div>
                <div className={classes.brandShop}>
                    <img onClick={onClickLogo} src={logo} width="12%" />
                    <Account />
                </div>
                <Menu />
                <div className={classes.breadCrumb}>
                    <BreadCrumb arrayBreadCrumb={breadCrumbList} />
                </div>
            </>
        )
    );
};

export default AppBarTop;