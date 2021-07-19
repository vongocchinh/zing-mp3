import React from 'react';
import { Route, Switch } from 'react-router-dom';
import History from '../History/container/History';
import PlayList from '../History/container/PlayList';
import Home from '../Home/container/Home';
import TopMusic from '../TopMusic/container/TopMusic';
import TopVN from './../TopItem/container/TopItemVN';
import TopKL from './../TopItem/container/TopItemKL';
import TopCA from './../TopItem/container/TopItemCA';
import TopAM from './../TopItem/container/TopItemAM';
const Router=()=>{
    return (
        <>
        <Switch>
            <Route exact={true} path="/" component={Home} ></Route>
            <Route path="/top100" component={TopMusic} ></Route>
            <Route path="/history" component={History} ></Route>
            <Route path="/playlist" component={PlayList} ></Route>
            <Route path="/top100_VN/:id" component={TopVN} ></Route>
            <Route path="/top100_AM/:id" component={TopAM} ></Route>
            <Route path="/top100_CA/:id" component={TopCA} ></Route>
            <Route path="/top100_KL/:id" component={TopKL} ></Route>
        </Switch>
        </>
    )
}

export default Router;