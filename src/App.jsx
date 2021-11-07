import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Frontpage from './pages/Frontpage'
import List from './pages/List'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={Frontpage} exact></Route>
                    <Route path="/List" component={List}></Route>
                    <Route path='/Frontpage' component={Frontpage}></Route>
                </Switch>
            </div>
        )
    }
}
