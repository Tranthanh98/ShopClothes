import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectMenu } from '../../actions/admin-menu.action';
import Chart from '../../components/Common/Chart';

function DashboardPage(props){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(selectMenu({name:"Dashboard", path:"/admin"}));
    }, []);
    return (
        <Container>
            <Chart/>
        </Container>
    )
}
export default DashboardPage;