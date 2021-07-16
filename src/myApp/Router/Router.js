import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/container/Home';
import TopMusic from '../TopMusic/container/TopMusic';
import TopVN from './../TopItem/container/TopItemVN';
const Router=()=>{
    return (
        <>
        <Switch>
            <Route exact={true} path="/" component={Home} ></Route>
            <Route path="/top100" component={TopMusic} ></Route>
            <Route path="/top100_VN/:id" component={TopVN} ></Route>
        </Switch>
        </>
    )
}

export default Router;