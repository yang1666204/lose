import React, { Component } from 'react'
import { Input } from 'antd';
import { NavLink,Switch,Route } from 'react-router-dom'
import { post } from '../../../../utils/axios';
import ShowList from './ShowList'
import Showpic from './Showpic'
import './index.css'
import PubSub from 'pubsub-js';

export default class Record extends Component {
    
    render() {
        const { Search } = Input;
        const onSearch = async(value) => {
            try{
                let res = await post('http://1.14.74.79:9090/laf/get',{
                    student_number:isNaN(value) ? null : Number(value),
                    name:isNaN(value) ? value : null
                })
                if(res.data.code===1000 || res.data.code===1007){
                    PubSub.publish('res',{res:res.data.data,issearch:true})
                }
            }
            catch(err){
                console.log(err)
            }
        }
        return (
                <div className="showlink">
                    <div className="choosewrp">
                        <NavLink className="ListLink" to="/List/Record/ShowList">列表显示</NavLink>
                        <NavLink className="PicLink " to="/List/Record/Showpic">图表显示</NavLink>
                        <Search className="Searchint" placeholder="输入学号或姓名快速查询" onSearch={onSearch} enterButton />
                        <NavLink className="AddLink" to="/List/Add/Single">新增失物</NavLink>
                    </div>
                    <Switch>
                        <Route path="/List/Record/ShowList" component={ShowList}></Route>
                        <Route path="/List/Record/Showpic" component={Showpic}></Route>
                    </Switch>
                    
                </div>        
        )
    }
}
