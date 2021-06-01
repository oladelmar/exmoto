import Curier from './src/containers/CurierBuilder/CurierBuilder';
import React from 'react';
import { Route } from 'react-router-dom';
import SliderBuilder from './src/containers/SliderBuilder/SliderBuilder';
import Messages from './src/containers/MessgesBuilder/MessagesBuilder';
import PricePage from './src/PricePage/PricePage';
import AboutUs from './src/components/AboutUs/AboutUs';
import Advertisement from './src/components/Advertisement/Advertisement';

import React from 'react';
import { Route, Redirect } from 'react-router';

export default (
    <Route>
        <Route path={'/price'} component={PricePage} />
        <Route path={'/delivery'} component={Curier} />
        <Route path={'/'}>
            <SliderBuilder />
            <Advertisement />
            <Messages />
            <AboutUs />
        </Route>
        <Redirect from='/home' to='/' />
        <Route path='*' />
    </Route>
);
