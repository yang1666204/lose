import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined,LockOutlined } from '@ant-design/icons'
import './index.css'
import { post } from '../../../utils/axios';

export default class Login extends Component{
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
        let regpassword = /^.{8}/
        if(e.currentTarget.value===''){
            this.setState({ispasswordhave:false})
        }else{
            this.setState({ispasswordhave:true,ispassword:regpassword.test(e.currentTarget.value)})
        }   
        this.setState({password:e.currentTarget.value})  
    }
    pushLogin=async()=>{
        const {student_number,password} = this.state
        if(student_number && password){
            try{
                let res = await post('http://1.14.74.79:9090/laf/login',{
                    student_number:Number(student_number),
                    password
                    })
                if(res.data.code===1000){
                    localStorage.setItem('atoken','Bearer '+res.data.data.atoken)
                    localStorage.setItem('self_msg',JSON.stringify({num:res.data.data.student_number,username:res.data.data.user_name}))
                    this.props.history.push('/List/Record/ShowList')
                }else if(res.data.code===1003){
                    PubSub.publish('data',{isexist:true,iserror:false,isbusy:false,issuccess:false,isexist_signup:false})
                }else if(res.data.code===1004){
                    PubSub.publish('data',{iserror:true,isexist:false,isbusy:false,issuccess:false,isexist_signup:false})
                }else if(res.data.code===1005){
                    PubSub.publish('data',{isbusy:true,iserror:false,isexist:false,issuccess:false,isexist_signup:false})
                }
            }catch(err){
                console.log("error",err)
        }
    }
}
    componentWillUnmount() {
        this.setState = () => false
    }
    render() {
        return (
            <div id="Loginwrp">
                    <br/>
                    <Input size="large" className="int" onChange={this.saveStudentId} placeholder="???????????????" prefix={<UserOutlined />} />
                    {this.state.isidhave ? (this.state.isid ? <br></br> : <div className="tip1">?????????10??????</div>) : <div className="tip1">??????????????????</div>}
                    <Input.Password size="small" className="int" onChange={this.savePassword} prefix={<LockOutlined />} placeholder="???????????????"/>
                    {this.state.ispasswordhave ? (this.state.ispassword ? <br></br> : <div className="tip1">???????????????8??????</div>) : <div className="tip1">??????????????????</div>}
                    <NavLink className="noaccount" to="/Frontpage/Register">????????????????????????</NavLink>
                <div className="checkbox"><input type="checkbox" />????????????</div>
                <button onClick={this.pushLogin} className="Loginbtn">??????</button>
            </div>
        )
    }
}
