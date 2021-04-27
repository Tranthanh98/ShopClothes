import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyle = makeStyles({
    size:{
        height:40,
        width:40,
        border: "1px solid #f3f3f3",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        margin:5,
        "&:hover":{
            backgroundColor:"gray"
        }
    },
    containerSize: {
        display:"flex",
    },
    active:{
        backgroundColor:"black",
        color:"white"
    },
})

export default function RenderSize(props){
    const classes = useStyle();
    let {listSize, sizeSelected, onChangeSize} = props;
    return (
        <div className={classes.containerSize}>
            {
                listSize.map((i, index)=>{
                    return(
                        <div onClick={()=> onChangeSize(i)} className={`${classes.size} ${sizeSelected == i ? classes.active : null}`} key={index}>
                            {i}
                        </div>
                    )
                })
            }
        </div>
    )
}