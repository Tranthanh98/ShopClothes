import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState } from 'react';

function StepperComponent(props){
    let {steps, children} = props;
    const [activeStep, setActiveStep]= useState(0);
    const nextStep = ()=>{
        setActiveStep((prevState) => prevState + 1);
    }
    const backStep = () =>{
        setActiveStep((prevState) => prevState - 1);
    }
    const _children = React.Children.map(children, (child, index) =>{
        return React.cloneElement(child, 
            {
                nextStepFunc : nextStep,
                backStepFunc : backStep
            })
    });
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <div>
                {_children[activeStep]}
            </div>
        </div>
    )
}
export default StepperComponent;