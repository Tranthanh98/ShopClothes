import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/styles';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
    pointer: {
        cursor: "pointer",
        "&:hover": {
            color: "#337ab7"
        },
        display: "flex",
        alignItems: "center",
    }
})

function Footer(props) {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} md={3}>
                <Typography className={classes.pointer} variant="h6">Công ty</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Tuyển dụng</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Hệ thống cửa hàng</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Chăm sóc khách hàng</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography variant="h6" className={classes.pointer}>Chính sách khách hàng</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Khách hàng thân thiết</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Chính sách đổi trả</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>Chính sách bảo hành</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography className={classes.pointer} variant="h6">Kết nối</Typography>
                <Typography style={{marginLeft:4}} color="primary" className={classes.pointer}>
                    <FacebookIcon />
                    Facebook
                </Typography>
                <Typography style={{marginLeft:4}} color="secondary" className={classes.pointer}>
                    <InstagramIcon />
                    Instagram
                </Typography >
                <Typography style={{marginLeft:4}} className={classes.pointer}>
                    <MailIcon color="error" />
                    Email
                </Typography>
                <Typography style={{marginLeft:4}} color="error" className={classes.pointer}>
                    <YouTubeIcon />
                    Youtube
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Typography className={classes.pointer} variant="h6">Thông tin cửa hàng</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}>
                    <RoomIcon />
                103 Sư Vạn Hạnh</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}><RoomIcon />408 Điện Biên Phủ</Typography>
                <Typography style={{marginLeft:4}} className={classes.pointer}><RoomIcon />601 Hai Bà Trưng</Typography>
            </Grid>
        </Grid>
    )
}
export default Footer;