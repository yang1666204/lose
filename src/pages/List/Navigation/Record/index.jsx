import React, { Component } from 'react'
import { Input } from 'antd';
import { NavLink,Switch,Route } from 'react-router-dom'
import ShowList from './ShowList'
import Showpic from './Showpic'
import './index.css'

export default class Record extends Component {
    
    render() {
        const { Search } = Input;
        const onSearch = value => console.log(value);
        return (
                <div className="showlink">
                    <div className="choosewrp">
                        <NavLink className="ListLink" to="/List/Record/ShowList">列表显示</NavLink>
                        <NavLink className="PicLink " to="/List/Record/Showpic">图表显示</NavLink>
                        <Search className="Searchint" placeholder="输入学号或姓名快速查询" onSearch={onSearch} enterButton />
                        <NavLink className="AddLink" to="/List/Add">新增失物</NavLink>
                    </div>
                    <Switch>
                        <Route path="/List/Record/ShowList" component={ShowList}></Route>
                        <Route path="/List/Record/Showpic" component={Showpic}></Route>
                    </Switch>
                    
                </div>        
        )
    }
}
