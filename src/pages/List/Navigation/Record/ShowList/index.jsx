import React, { Component } from 'react'
import { post } from '../../../../../utils/axios'
import PubSub from 'pubsub-js'
import { Pagination,Alert  } from 'antd'
import Tr from './Tr'
import './index.css'

export default class Showtdst extends Component {
    state={
        arr:[],
        res:[],
        issearch:false,
        current:1
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
        this.token =  PubSub.subscribe('res',(_,stateObj)=>{
            this.setState({...stateObj})
        })
    }
    getTrmsg=()=>{
        this.getall()
        this.setState({})
    }
    saveCurrent=(current)=>{
        this.setState({current})
    }
    render() {
        const {current} = this.state
        return (
            <table id="table">
                <tbody><tr className="tdwrp">          
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
                    </tr>{this.state.issearch ? 
                    (this.state.res ? this.state.res.map((item1,index)=>{
                        if(index>=(current-1)*10 && index<=current*10-1 ){
                            return <Tr {...item1} key={item1.number}></Tr>
                        }
                        else{
                            return null
                        }
                        }): <Alert className="note" message="没有你要查找的数据" type="info" showIcon />) :
                    (this.state.arr ? this.state.arr.map((item,index)=>{
                        if(index>=(current-1)*10 && index<=current*10-1 ){
                        return <Tr getTrmsg={this.getTrmsg} {...item} key={item.number}></Tr>}
                        else{
                            return null
                        }
                        }) : <Alert className="note" message="没有数据" type="info" showIcon />)}</tbody>
                    <tfoot className="tfooter"><Pagination defaultCurrent={1} total={this.state.issearch ? (this.state.res ?this.state.res.length : 0) : (this.state.arr.length ? this.state.arr.length : 0)} onChange={this.saveCurrent}/></tfoot>
            </table>
        )
    }
}
