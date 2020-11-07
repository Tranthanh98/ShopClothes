import { Grid, Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import StepperComponent from '../../general/ConmmonComponent/Stepper';
import FillInformation from './FillInformation';

const useStyle = makeStyles({
    sliderWrapper:{
        display: "flex",
        justifyContent:"center"
    },
    slider:{
        width: "60vw"
    },
    wrapper:{
        margin :"10px",
        border: "1px solid #3f51b5",
        borderRadius: "10px"
    }
})

function _getLabelSlider(e){
    switch(e){
        case 1:{
            return "Điền thông tin";
        }
        case 2:{
            return "Xác nhận đơn hàng";
        }
        default: return "Thanh toán";
    }
}

function Payment(props){
    const [step, setStep] = useState(1);
    const classes = useStyle();
    const _onChangeStep = (e, newValue)=>{
        if(newValue < step){
            setStep(newValue);
        }
    }
    const _getComponent = ()=>{
        switch(step){
            case 1:
                return <FillInformation/>
        }
    }
    return (
        <div>
            <Typography style={{fontSize: "25px", fontWeight:"bold"}} component="h4">{_getLabelSlider(step)}</Typography>
            <div className={classes.wrapper}>
                {/* {_getComponent()} */}
                <StepperComponent
                    steps={["Thông tin thanh toán", "Thanh toán đơn hàng"]}
                >
                    <FillInformation/>
                    <div>
                        Thành
                    </div>
                </StepperComponent>
            </div>
        </div>
    )
}
export default Payment;