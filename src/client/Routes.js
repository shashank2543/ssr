import React, { Fragment } from 'react';
import {Route}from 'react-router-dom';
import Home from './pages/Home';
import UsersListPage from './pages/UsersListPage'

export default () => {
    return(
        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/users' component={UsersListPage}/>
        </div>
    )
}