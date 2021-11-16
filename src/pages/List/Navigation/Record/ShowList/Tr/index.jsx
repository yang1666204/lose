import React, { Component } from 'react'
import { Button,Input,Select } from 'antd';
import 'antd/dist/antd.css';
import { post } from '../../../../../../utils/axios';
const { Option } = Select;


export default class Tr extends Component {
    state={
        isedi:false,
        ...this.props,
        re_date:''
    }
    edi=()=>{
        this.setState({isedi:true})
    }
    chagevalue=()=>{}
    delete = async(e) =>{
            try{
                let res = await post('http://1.14.74.79:9090/laf/delete',{
                    number:Number(e.currentTarget.value)
                })
                console.log(res)
                this.props.getTrmsg()
                }
            catch(err){
                console.log(err)
            }   
        }
        savedate=(e)=>{
            this.setState({date:e.currentTarget.value})
        }
        saveaddress=(e)=>{
            this.setState({address:e.currentTarget.value})
        }
        savename=(e)=>{
            this.setState({name:e.currentTarget.value})
        }
        savething=(e)=>{
            this.setState({thing:e.currentTarget.value})
        }
        savestudent_number=(e)=>{
            this.setState({student_number:e.currentTarget.value})
        }
        savere_date=(e)=>{
            this.setState({re_date:e.currentTarget.value})
        }
        handleChange=(value)=>{
            this.setState({status:value})
          }
    update=async(e)=>{
        console.log(this.state.status)
        try{
            let res = await post('http://1.14.74.79:9090/laf/update',{
                    date:this.state.date,
                    re_date:this.state.re_date,
                    thing:this.state.thing,
                    name:this.state.name,
                    student_number:Number(this.state.student_number),
                    address:this.state.address,
                    status:this.state.status,
                    number:Number(e.currentTarget.value)
            })
            console.log(res)
            this.setState({isedi:false})
            this.props.getTrmsg()
        }
        catch(err){

        }
    }
    cancel=()=>{
        this.setState({isedi:false})
    }
    render() {
        const {number,date,thing,name,student_number,status,address,re_date} = this.props
        return (
            this.state.isedi ?
                    <tr className="tdwrp">
                        <td><input type="checkbox" /></td>
                        <td>{number}</td>
                        <td><Input defaultValue={date} onChange={this.savedate}/></td>
                        <td><Input defaultValue={thing} onChange={this.savething}/></td>
                        <td><Input defaultValue={name} onChange={this.savename}/></td>
                        <td><Input defaultValue={student_number} onChange={this.savestudent_number}/></td>
                        <td> <Select defaultValue={(status==='true') ? '已找回' : '未找回'} style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value='false'>未找回</Option>
                                <Option value='true'>已找回</Option>
                            </Select></td>
                        <td><Input defaultValue={re_date} onChange={this.savere_date}/></td>
                        <td><Input defaultValue={address} onChange={this.saveaddress}/></td>
                        <td>
                            <div>
                                <Button onClick={this.update} value={number}>保存</Button>
                                <Button onClick={this.cancel}>取消</Button>                    
                            </div>
                        </td>
                </tr>:
                <tr className="tdwrp">
                    <td><input type="checkbox" /></td>
                    <td>{number}</td>
                    <td>{date}</td>
                    <td>{thing}</td>
                    <td>{name}</td>
                    <td>{student_number}</td>
                    <td>{(status==='true') ? '已找回' : '未找回'}</td>
                    <td>{re_date}</td>
                    <td>{address}</td>
                    <td>
                        <div>
                            <Button onClick={this.edi}>编辑</Button>
                            <Button type="primary" danger onClick={this.delete} value={number}>删除</Button>                    
                        </div>
                    </td>
                </tr>
        )
    }
}
