import React from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

function CircleLoading(props) {
    const progress = useSelector(state => state.progress);
    return (
        <>
        <Box display="flex" justifyContent="center">
            <Box position="relative" display="inline-flex">
                <CircularProgress variant="static" value={progress.value} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                        progress.value,
                    )}%`}</Typography>
                </Box>
            </Box>
            </Box>
            <Box>{progress.title}</Box>
        </>
    );
}

CircleLoading.propTypes = {

}

export default CircleLoading

