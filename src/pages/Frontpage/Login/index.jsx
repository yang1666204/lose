import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined,LockOutlined } from '@ant-design/icons'

import './index.css'

export default class Login extends Component {
    state={
        isidhave:true,
        ispasswordhave:true,
        isid:true,
        ispassword:true
    }
    saveStudentId=(e)=>{
        let regid = /^[0-9]{10}$/
        if(e.currentTarget.value===''){
            this.setState({isidhave:false})
        }else{
            this.setState({isidhave:true,isid:regid.test(e.currentTarget.value)})
        }
        this.setState({student_number:e.currentTarget.value})    
    }
    savePassword=(e)=>{
        let regpassword = /^[*]{8}/
        if(e.currentTarget.value===''){
            this.setState({ispasswordhave:false})
        }else{
            this.setState({ispasswordhave:true,ispassword:regpassword.test(e.currentTarget.value)})
        }   
        this.setState({password:e.currentTarget.value})  
    }
    pushLogin=()=>{
        const {student_number,password} = this.state
        if(student_number && password){
        axios({
            method:'post',
            url:'/api/user/login',
            data:{
                student_number:Number(student_number),
                password
            }
        }).then(
            response=>{
                if(response.data.code===1000){
                    this.props.history.push('/List')

                }else if(response.data.data===1003){
                    
                }
            },
            error=>{
                console.log(error)
            }
        )
    }
    }
    render() {
        return (
            <div id="Loginwrp">
                    <br/>
                    <Input size="large" className="int" onChange={this.saveStudentId} placeholder="请输入学号" prefix={<UserOutlined />} />
                    {this.state.isidhave ? (this.state.isid ? <br></br> : <div className="tip1">长度为10位！</div>) : <div className="tip1">请输入学号！</div>}
                    <Input.Password size="small" className="int" onChange={this.savePassword} prefix={<LockOutlined />} placeholder="请输入密码"/>
                    {this.state.ispasswordhave ? (this.state.ispassword ? <br></br> : <div className="tip1">长度至少为8位！</div>) : <div className="tip1">请输入密码！</div>}
                    <NavLink className="noaccount" to="/Frontpage/Register">没有账号点击注册</NavLink>
                <div className="checkbox"><input type="checkbox" />记住密码</div>
                <button onClick={this.pushLogin} className="Loginbtn">登录</button>
            </div>
        )
    }
}
