import { Box } from '@material-ui/core';
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function DescriptionList(props){
    const {descriptionList} = props;
    
    return (
        <Box>
            <Box fontWeight="bold">Mô tả sản phẩm:</Box>
            {
                descriptionList.map((d, index)=>{
                    return (
                        <Box display="flex" alignItems="center" key={index}>
                            <Box cursor="pointer" onClick={() => props.remove(d)} margin="0 2px 0 8px">
                                <HighlightOffIcon/>
                            </Box>
                            <Box>{d.title}</Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}