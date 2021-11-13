import React, { Component } from 'react'
import { NavLink,Switch,Route } from 'react-router-dom'
import { Alert } from 'antd'
import PubSub from 'pubsub-js'
import Login from './Login'
import Register from './Register'
import './index.css'

export default class Frontpage extends Component {
    state={
        isexist:false,
        iserror:false,
        isbusy:false,
        issuccess:false,
        isexist_signup:false
    }
    onClose = (e) => {
        this.setState({isexist:false,iserror:false,isbusy:false,issuccess:false,isexist_signup:false})
      }
    componentDidMount(){
        this.token = PubSub.subscribe('data',(_,stateObj)=>{
			this.setState(stateObj)
		})
    }
    componentWillUnmount() {
        this.setState = () => false
    }
    render() {
        return (
            <div id="backgroundimg">
                {this.state.iserror ? <Alert className="alert" message="账号或密码错误！" type="error Text" closable onClose={this.onClose}/> : null}
                {this.state.isexist ? <Alert className="alert" message="账号不存在！" type="error Text" closable onClose={this.onClose}/> : null}
                {this.state.isbusy ? <Alert className="alert" message="服务繁忙！" type="error Text" closable onClose={this.onClose}/> : null}
                {this.state.issuccess ? <Alert className="alert1" message="注册成功，请登录！" type="success Text" closable onClose={this.onClose}/> : null}
                {this.state.isexist_signup ? <Alert className="alert" message="用户名已存在！" type="warning Text" closable onClose={this.onClose}/> : null}
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
