import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import ErrorIcon from '../../assests/error-page.jpg';

function ErrorPage({title}) {
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
            zIndex={2000}
        >
            <img src={ErrorIcon} width="250px" height="auto"/>
            <Box color="red" fontSize="25px">{title}</Box>
        </Box>
    )
}

ErrorPage.propTypes = {

}

export default ErrorPage

