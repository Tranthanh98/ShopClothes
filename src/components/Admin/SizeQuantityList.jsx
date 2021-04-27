import { Box } from '@material-ui/core';
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function SizeQuantityList(props){
    const {sizeList} = props;
    
    return (
        <Box>
            <Box fontWeight="bold">Kích thước:</Box>
            {
                sizeList.map((d, index)=>{
                    return (
                        <Box display="flex" alignItems="center" key={index}>
                            <Box cursor="pointer" onClick={() => props.remove(d)} margin="0 2px 0 8px">
                                <HighlightOffIcon/>
                            </Box>
                            <Box margin="0 4px">{d.sizeName}</Box>
                            <Box margin="0 4px"> - Số lượng: {d.quantity}</Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}