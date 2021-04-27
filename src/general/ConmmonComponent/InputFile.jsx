import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import * as httpClient from '../HttpClient';


function InputFile(props) {
    const { title } = props;
    const [file, setFile] = useState();
    const [urlImage, setUrlImg] = useState();
    const _onFileChange = (e) => {
        var file = e.target.files[0];
 
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = async function(eve){
            setUrlImg([reader.result]);

            var formData = new FormData();

            formData.append("file", file);
            let response = await httpClient.upload("/file/UploadFile", formData);
            if(response.data.isSuccess){
                setFile(response.data.data);
            }
        }
    }
    useEffect(()=>{
        if(file){
            console.log("formData:", file);
            props.getFile(file, urlImage);
        }
    }, [file]);
    let key = (new Date()).getTime();
    return (
        <>
            <input style={{display:"none"}} type="file" onChange={_onFileChange} id={`file-upload${key}`} />
            <label for={`file-upload${key}`}>
                <div style={{
                border:"1px solid gray",
                borderRadius:"4px",
                height:"40px",
                width:"fit-content",
                display:"flex",
                alignItems:"center",
                backgroundColor:"#3176b1",
                padding:"8px",
                color:"white"
            }}>
                    {
                        title ? title : "Up load file"
                    }
                </div>
            </label>
        </>
    )
}
export default InputFile;