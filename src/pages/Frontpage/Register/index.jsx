import React, { Component } from 'react'
import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined,LockOutlined,UserAddOutlined } from '@ant-design/icons'
import './index.css'

export default class Register extends Component {
    state={
        isnumhave:true,
        isRegitrationpasswordhave:true,
        isusernamehave:true,
        isnum:true,
        isRegitrationpassword:true,
        isident:true
    }
    saveRegistrationstudentId=(e)=>{
        let regnum = /^[0-9]{10}$/
        if(e.currentTarget.value===''){
            this.setState({isnumhave:false})
        }else{
            this.setState({isnumhave:true,isnum:regnum.test(e.currentTarget.value)})
        }
        this.setState({RegistrationId:e.currentTarget.value})
    }
    saveRegistrationpassword=(e)=>{
        let Registrationpassword = /^[0-9]{10}$/
        if(e.currentTarget.value===''){
            this.setState({isRegitrationpasswordhave:false})
        }else{
            this.setState({isRegitrationpasswordhave:true,isRegitrationpassword:Registrationpassword.test(e.currentTarget.value)})
        }
        this.setState({Registrationpassword:e.currentTarget.value})
    }
    isident=(e)=>{
        if(e.currentTarget.value===this.state.Registrationpassword){
            this.setState({isident:true})
        }else{
            this.setState({isident:false})
        }
    }
    saveRegistrationName=(e)=>{
        if(e.currentTarget.value===''){
            this.setState({isusernamehave:false})
        }else{
            this.setState({isusernamehave:true})
        }
        this.setState({RegistrationName:e.currentTarget.value})
    }
    Registration=()=>{
        const {RegistrationId,Registrationpassword,RegistrationName} = this.state
        if(RegistrationId && Registrationpassword && RegistrationName && this.state.ident){
        axios({
            method:'post',
            url:'/api/user/signup',
            data:{
                user_name:RegistrationId,
                password:Registrationpassword,
                student_number:Number(RegistrationId)
            }
        }).then(
            response=>{
                console.log(response)
            },
            error=>{
                console.log(error)
            }
        )
    }}
    render() {
        return (
            <div id="Registerwrp">
                <br />
                <Input size='middle' onChange={this.saveRegistrationstudentId} className="int1" placeholder="请输入学号" prefix={<UserOutlined />} />
                {this.state.isnumhave ? (this.state.isnum ? <br></br> : <div className="tip1">长度为10位！</div>) : <div className="tip1">请输入学号！</div>}
                <Input.Password size='middle' onChange={this.saveRegistrationpassword} className="int1" prefix={<LockOutlined />} placeholder="请输入密码"/>
                {this.state.isRegitrationpasswordhave ? (this.state.isRegitrationpassword ? <br></br> : <div className="tip1">长度至少为8位！</div>) : <div className="tip1">请输入密码！</div>}
                <Input.Password size='middle' onChange={this.isident} className="int1" prefix={<LockOutlined />} placeholder="请再次输入密码"/>
                {this.state.isident ? <br></br> : <div className="tip1">确保输入的密码一致</div>}
                <Input className="int1" size='middle' onChange={this.saveRegistrationName} placeholder="请输入用户名" prefix={<UserAddOutlined />} />
                {this.state.isusernamehave ? <br></br>  : <div className="tip1">请输入用户名！</div>}
                <button onClick={this.Registration} className="Registerbtn">注册</button>
            </div>
        )
    }
}
