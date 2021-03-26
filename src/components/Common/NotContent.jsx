import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
    pageRoot:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textTransform:"uppercase"
    }
})

function NotContent(props){
    const classes = useStyles();
    return (
        <div className={classes.pageRoot}>
            Trang này hiện đang bảo trì
        </div>
    )
}
export default NotContent;