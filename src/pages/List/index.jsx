import React, { Component } from 'react'
import Header from './Header'
import { Switch,Route } from 'react-router-dom'
import Navigation from './Navigation'
import About from './Navigation/About'
import MemberList from './Navigation/MemberList'
import Add from './Navigation/Add'
import Selfmsg from './Navigation/Selfmsg'
import Record from './Navigation/Record'
import Registration from './Navigation/Registration'
import Exit from './Navigation/Exit'
import './index.css'

export default class List extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Navigation></Navigation>
                <Switch>
                    <Route path='/List/About' component={About}></Route>
                    <Route path='/List/MemberList' component={MemberList}></Route>
                    <Route path='/List/Add' component={Add}></Route>
                    <Route path='/List/Selfmsg' component={Selfmsg}></Route>
                    <Route path='/List/Record' component={Record}></Route>
                    <Route path='/List/Registration' component={Registration}></Route>
                    <Route path='/List/Exit' component={Exit}></Route>
                </Switch>
            </div>
        )
    }
}
