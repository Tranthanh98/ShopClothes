import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import AsyncDropDown from '../../general/ConmmonComponent/AsyncDropDown';
import * as httpClient from '../../general/HttpClient';

const useStyle = makeStyles({
    login:{
        color:"blue",
        cursor: "pointer"
    },
    paddingComponent:{
        padding :10
    },
    displayRow:{
        display:"flex"
    },
    title:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    buttonPayment:{
        margin: "12px"
    }
})

function FillInformation(props){
    const classes = useStyle();
    // useEffect(()=>{
    //     ( async ()=>{
    //         let data = await httpClient.sendGet("https://thongtindoanhnghiep.co/api/city");
    //         console.log("data:", data);
    //     })();
    // }, []);
    return (
        <div className={classes.paddingComponent}>
            
            <Typography component="h6" style={{fontWeight:"bold", display:"flex"}}>
                Bạn đã có tài khoản?
                <Typography className={classes.login}>Đăng nhập</Typography>
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={12} lg={6}>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <Typography className={classes.title} align="center">Họ và tên:</Typography>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Họ và tên"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <Typography className={classes.title} align="center">Email:</Typography>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Email"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <Typography className={classes.title} align="center">Số điện thoại:</Typography>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Số điện thoại"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item xs={3}>
                            <Typography className={classes.title} align="center">Thông tin địa chỉ:</Typography>
                        </Grid>
                        <Grid item xs>
                            <AsyncDropDown/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={`${classes.title} ${classes.buttonPayment}`}>
                <Button onClick={props.nextStepFunc} color="primary" variant="contained">
                    Thanh toán
                </Button>
            </div>
        </div>
    )
}
export default FillInformation;