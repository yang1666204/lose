import React, { Component } from 'react'
import { NavLink,Switch,Route } from 'react-router-dom'
import { Alert } from 'antd'
import Login from './Login'
import Register from './Register'
import './index.css'

export default class Frontpage extends Component {
    onClose = (e) => {
        console.log(e, 'I was closed.');
      }
    render() {
        return (
            <div id="backgroundimg">
                <Alert className="alert" message="账号或密码错误！" type="error" closable onClose={this.onClose}/>
                <div id="totalwrp">
                    <div className="linkwrp">
                        <NavLink className="link" activeStyle={{color:'#40A9FF'}} to="/Frontpage/Login">登录</NavLink>
                        <NavLink className="link" activeStyle={{color:'#40A9FF'}} to="/Frontpage/Register">注册</NavLink>
                    </div>
                    <Switch>
                        <Route path="/Frontpage/Login" component={Login}></Route>
                        <Route path="/Frontpage/Register" component={Register}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
