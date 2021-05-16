import { Box, Button } from '@material-ui/core';
import React from 'react';
import InputFile from '../../general/ConmmonComponent/InputFile';
import * as httpClient from '../../general/HttpClient';

export default function GetMainImage(props) {
    const _deleteFile = async (file)=>{
        console.log("file", file);
        let response = await httpClient.sendGet("/file/deleteFile?id="+ file.id);
        if(response.data.isSuccess){
            props.setFile({ file: null, url: "" })
        }
    }
    return (
        <>
                <Box>
                    <Box fontWeight="bold" marginRight="16px">Hình ảnh chính:</Box>
                    <InputFile
                        title="Tải ảnh lên"
                        getFile={props.getFile}
                        id="titleImg"
                    />
                    {
                        props.file.url ? (
                            <Button onClick={() => _deleteFile(props.file.file)}>Xóa ảnh</Button>
                        ) : null
                    }
                </Box>
                <Box margin="8px" width="400px" height="360px" border={props.file.url ? null : "1px dashed gray"}>
                    <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={props.file.url} />
                </Box>
        </>
    )
}