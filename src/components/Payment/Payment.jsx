import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BasePayment from './BasePayment'
import FillInformation from './FillInformation'

export default class Payment extends BasePayment {
    
    childrenRender = ()=> {
        return <FillInformation/>
    }
}
