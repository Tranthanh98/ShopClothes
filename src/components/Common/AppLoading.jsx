import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core';
import LoadingImg from '../../assests/shop-loading.jpg';
import CircleLoading from './CircleLoading';

function AppLoading(props) {
    return (
        <Box 
            style={{backgroundColor:"white" }}
            display="flex" 
            flexDirection="column" 
            justifyContent="center" 
            alignItems="center" 
            width="100vw" 
            height="100vh"
            position="fixed"
            top={0}
            left={0}
            zIndex={999}
        >
            <img src={LoadingImg} width="250px" height="auto" />
            <Box margin="16px">
                <CircleLoading/>
            </Box>
        </Box>
    )
}

AppLoading.propTypes = {

}

export default AppLoading

