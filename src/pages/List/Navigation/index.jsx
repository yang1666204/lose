import React, { Component } from 'react'
import Sider from '../../../compoment/Sider'
import PubSub from 'pubsub-js'

export default class Navigation extends Component {
    state={
        num:'',
        username:''
    }
    componentDidMount(){
        this.token = PubSub.subscribe('self_msg',(_,stateObj)=>{
			this.setState(stateObj)
		})
    }
    render() {
        return (
            <div className="Siderwrp">
                <Sider num={this.state.num} username={this.state.username}></Sider>        
            </div>
        )
    }
}
