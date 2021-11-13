import React, { Component } from 'react'
import { post } from '../../../../../utils/axios'
import Ul from './Tr'
import './index.css'

export default class Showtdst extends Component {
    state={
        arr:[]
    }
    getall = async()=>{
        try{
            let res = await post('http://1.14.74.79:9090/laf/getall')
            this.setState({arr:res.data.data})
        }catch(err){
            console.log("error",err)
     }
    }
    componentDidMount(){
        this.getall()
    }
    render() {
        return (
            <table id="table">
                <tbody>
                    <tr className="tdwrp">          
                        <td><input type="checkbox" /></td>
                        <td>编号</td>
                        <td>日期</td>
                        <td>失物</td>
                        <td>姓名</td>
                        <td>学号</td>
                        <td>状态</td>
                        <td>找回日期</td>
                        <td>领取地址</td>
                        <td>操作</td>
                    </tr> 
                    {this.state.arr ? this.state.arr.map((item,index)=>{
                        return <Ul {...item} key={index}></Ul>
                    }) : null}
                    </tbody>
            </table>
        )
    }
}
