import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import AsyncDropDown from '../../general/ConmmonComponent/AsyncDropDown';
import * as httpClient from '../../general/HttpClient';
import { Paths } from '../../routes';
import CartContent from '../Common/CartContent';

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
    const history = useHistory();
    const _gotoPay = ()=>{
        history.push(Paths.confirmOrder);
    }
    return (
        <Card>
            <CardContent>
                <Box display="flex" justifyContent="center">
                    <Typography style={{fontSize: "25px", fontWeight:"bold", textTransform:"uppercase"}} component="h4">Điền thông tin</Typography>
                </Box>

                <Typography component="h6" style={{fontWeight:"bold", display:"flex"}}>
                    Bạn đã có tài khoản?
                    <Typography className={classes.login}>Đăng nhập</Typography>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <CardContent>
                                <Box margin="16px 0">
                                    <TextField fullWidth variant="outlined" label="Họ tên" />
                                </Box>
                                <Box margin="16px 0">
                                    <TextField multiline rows={4} fullWidth variant="outlined" label="Địa chỉ" />
                                </Box>
                                <Box width="100%" margin="16px 0" display="flex">
                                    <Box width="100%" margin="0 8px 0 0">
                                        <TextField fullWidth variant="outlined" label="Email" />
                                    </Box>
                                    <Box>
                                        <TextField fullWidth variant="outlined" label="Số điện thoại" />
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Card>
                            <CardContent>
                                <CartContent/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions className={`${classes.title} ${classes.buttonPayment}`}>
                <Button onClick={_gotoPay} color="primary" variant="contained">
                    Thanh toán
                </Button>
            </CardActions>
        </Card>
    )
}
export default FillInformation;