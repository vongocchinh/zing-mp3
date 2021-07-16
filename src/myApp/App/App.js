import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from '../Router/Router';
import Varbar from './../Varbar/container/Varbar';
import './styles/styes.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../Footer/container/Footer'
  const App=()=>{
    return (
      <Router>
        <div className="container">
          <div className="con-left">
          <Varbar />
          </div>
          <div className="con-right">
          <div className="con-home" id="style-3">
            <div className="con-home-top">
                <div className="con-top-item" >
                    <ArrowBackIcon className="ArrowBackIcon" />
                    <ArrowForwardIcon className="ArrowBackIcon"  />
                </div>
                <div className="con-top-item2" >
                   <div>
                   <SearchIcon className="SearchIcon" />
                    <input type="text" placeholder="Nhập tên bài hát , nghệ sĩ hoặc MV..."  ></input>
                   </div>
                </div>
                <div className="con-top-item3" >
                    <div><ExitToAppIcon className="ArrowBackIcon" /></div>
                    <div><SettingsIcon  className="ArrowBackIcon"/></div>
                    <div><Brightness4Icon className="ArrowBackIcon" /></div>
                </div>
            </div>
            <div className="con-main">
            <Routers />
            </div>
            
            </div>
           
        
          </div>
        </div>
        <Footer />
       </Router>
    );
  }
  export default App;