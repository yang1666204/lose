import React, { Component } from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import PubSub from 'pubsub-js';
import { UserOutlined,LockOutlined,UserAddOutlined } from '@ant-design/icons'
import './index.css'
import { post } from '../../../utils/axios';

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
        let regRegistrationpassword = /^.{8}/
        if(e.currentTarget.value===''){
            this.setState({isRegitrationpasswordhave:false})
        }else{
            this.setState({isRegitrationpasswordhave:true,isRegitrationpassword:regRegistrationpassword.test(e.currentTarget.value)})
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
    Registration = async()=>{
        const {RegistrationId,Registrationpassword,RegistrationName,isident,isnum,isRegitrationpassword} = this.state
        if(RegistrationId && Registrationpassword && RegistrationName && isident && isnum && isRegitrationpassword){
            try{
                    let res = await post('http://1.14.74.79:9090/laf/signup',{
                        student_number:Number(RegistrationId),
                        password:Registrationpassword,
                        user_name:RegistrationName
                        })
                        console.log(res)
                   if(res.data.code===1000){
                       this.props.history.push('/Frontpage/Login')
                       PubSub.publish('data',{isexist:false,iserror:false,isbusy:false,issuccess:true,isexist_signup:false})
                   }else if(res.data.code===1002){
                        PubSub.publish('data',{isexist:false,iserror:false,isbusy:false,issuccess:false,isexist_signup:true})
                   }
                }catch(err){
                    console.log("error",err)
            }      
    }}
    componentWillUnmount() {
        this.setState = () => false
    }
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
