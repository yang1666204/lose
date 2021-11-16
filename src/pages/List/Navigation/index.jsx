import React, { Component } from 'react'
import Sider from '../../../compoment/Sider'

export default class Navigation extends Component {
    state={
        num:'',
        username:''
    }
    componentDidMount(){
        this.setState({})
    }
    render() {
        return (
            <div className="Siderwrp">
                <Sider num={this.state.num} username={this.state.username}></Sider>        
            </div>
        )
    }
}
