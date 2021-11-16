import React, { Component } from 'react'
import { NavLink,Switch,Route } from 'react-router-dom'
import Single from './Single'
import Multiple from './Multiple'
import './index.css'

export default class Add extends Component {
    render() {
        return (
            <div className="AddWrp">
                <div className="AddLinkwrp">
                    <NavLink className="SingleLink" to="/List/Add/Single">新增单条记录</NavLink>
                    <NavLink className="MultipleLink" to="/List/Add/Multiple">批量导入</NavLink>
                </div>
                <Switch>
                    <Route path="/List/Add/Single" component={Single}></Route>
                    <Route path="/List/Add/Multiple" component={Multiple}></Route>
                </Switch>
            </div>
        )
    }
}
