import React, { Component } from 'react'
import { Button,Input } from 'antd';
import 'antd/dist/antd.css';
import { post } from '../../../../../../utils/axios';

export default class Tr extends Component {
    state={
        isedi:false
    }
    edi=()=>{
        this.setState({isedi:true})
    }
    delete = async(e) =>{
            try{
                let res = await post('http://1.14.74.79:9090/laf/delete',{
                    number:Number(e.currentTarget.value)
                })
                console.log(res)
                }
            catch(err){
                console.log(err)
            }   
        }
        cancel=()=>{
            this.setState({isedi:false})
        }
    render() {
        const {number,date,thing,name,student_number,status,address,re_date} = this.props
        return (
            this.state.edi ?
                    <tr className="tdwrp">
                        <td><input type="checkbox" /></td>
                        <td><Input value={number}/></td>
                        <td><Input value={date}/></td>
                        <td><Input value={thing}/></td>
                        <td><Input value={name}/></td>
                        <td><Input value={student_number}/></td>
                        <td><Input value={status}/></td>
                        <td><Input value={re_date}/></td>
                        <td><Input value={address}/></td>
                        <td>
                            <div>
                                <Button>保存</Button>
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
                    <td>{status ? '已找回' : '未找回'}</td>
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
