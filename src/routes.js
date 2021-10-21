import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/home/index';
import Header from './components/header';
import MainLayout from './hoc/mainLayout';
import Contact from './components/contact';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <MainLayout>
            <Switch>
                <Route path="/contact" component={Contact}/>
                <Route path="/" component={Home}/>
            </Switch>
        </MainLayout>
    </BrowserRouter>
)

export default Routes;