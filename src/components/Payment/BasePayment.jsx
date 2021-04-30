import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Step, StepLabel, Stepper } from '@material-ui/core'
import FillInformation from './FillInformation';

export default class BasePayment extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeStep : 0
        }
    }
    static propTypes = {
        prop: PropTypes
    }
    steps = ["Thông tin thanh toán", "Thanh toán đơn hàng"];

    childrenRender = ()=>{
        throw 'implement method "childrenRender"'
    }
    render() {
        return (
            <div>
                <Stepper alternativeLabel activeStep={this.state.activeStep}>
                    {this.steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <div>
                    {
                        this.childrenRender()
                    }
                </div>

            </div>
        )
    }
}
