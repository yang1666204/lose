import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import List from './pages/List'
// import Login from './pages/Frontpage/Login'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/List" component={List}></Route>
                    <Route path='/Frontpage' component={Frontpage}></Route>
                    <Redirect path="/" to="/Frontpage/Login"></Redirect>
                </Switch>
            </div>
        )
    }
}
