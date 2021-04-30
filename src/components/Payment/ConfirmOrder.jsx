import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BasePayment from './BasePayment'

export default class ConfirmOrder extends BasePayment {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props);
        this.state.activeStep = 1;
    }
    childrenRender =()=>{
        return <div>Thanh toán</div>
    }
}


