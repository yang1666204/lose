import React, { Component } from 'react'
import './index.css'
import 'antd/dist/antd.css';
import FormSizeDemo from './FormSizeDemo'

export default class Single extends Component {
    render() {
        return (
            <div className="Fromwrp">
                <FormSizeDemo></FormSizeDemo>
            </div>
        )
    }
}
