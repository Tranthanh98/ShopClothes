import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState } from 'react';
import routes from '../../routes';
import { Route, Switch } from 'react-router';

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
            <Switch>
                
                {_children[activeStep]}
            </Switch>
        </div>
    )
}
export default StepperComponent;