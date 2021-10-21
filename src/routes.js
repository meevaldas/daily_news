import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home/index';
import Header from './components/header';
import MainLayout from './hoc/mainLayout';
import Contact from './components/contact';
import Post from './components/posts';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/article/:id" component={Post}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes;