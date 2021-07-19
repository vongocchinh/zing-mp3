import React from 'react';
import './styles/styles.scss'
import Logo from './asset/logo.svg';

import LibraryMusicIcon from '@material-ui/icons/LibraryMusicOutlined';
import AlbumIcon from '@material-ui/icons/AlbumOutlined';
import TimelineIcon from '@material-ui/icons/Timeline';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import BallotIcon from '@material-ui/icons/BallotOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import QueryBuilderIcon from '@material-ui/icons/WatchLater'
import {  NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
const Varbar=()=>{

    const activeItem=()=>{
        var item_row=document.querySelectorAll('.item-row');

        item_row.forEach(res=>res.addEventListener('click',()=>{
            let j=0;
            while(j<item_row.length){
                item_row[j++].className="item-row";
            }
            res.className='item-row active';
        }))
    }
    activeItem();
    return (
        <>
        <div className="bar">
            <div className="bar-con-top" >
                <img alt="" src={Logo} />
            </div>
            <div className="item-list" >
                <NavLink activeClassName="active"  to="/myMusic" className="item-row">
                  <span></span>  <span><LibraryMusicIcon className="LibraryMusicIcon"/></span> <label >Cá Nhân</label>
                </NavLink>
                <NavLink activeClassName="active" exact={true} to="/" className="item-row">
                  <span></span>  <span><AlbumIcon className="LibraryMusicIcon"/></span> <label >Khám Phá</label>
                </NavLink>
                <NavLink activeClassName="active" to="/zingchart" className="item-row">
                  <span></span>  <span><TimelineIcon className="LibraryMusicIcon"/></span> <label >Zing Chart</label>
                </NavLink>
                <NavLink activeClassName="active" to="/radio" className="item-row">
                  <span></span>  <span><WifiTetheringIcon className="LibraryMusicIcon"/></span> <label >Radio</label>
                </NavLink>
                <NavLink activeClassName="active" to="/subrite" className="item-row">
                  <span></span>  <span><BallotIcon className="LibraryMusicIcon"/></span> <label >Theo Dõi</label>
                </NavLink>
                <div className="item-row-border"></div>
            </div>
            <div className="item-list-2" id="style-3">
                <NavLink activeClassName="active" exact to="/1" className="item-row">
                  <span></span>  <span><MusicVideoIcon className="LibraryMusicIcon"/></span> <label >Nhạc Mới</label>
                </NavLink>
                <NavLink activeClassName="active" exact to="/2" className="item-row">
                  <span></span>  <span><AppsIcon className="LibraryMusicIcon"/></span> <label >Thể Loại</label>
                </NavLink>
                <NavLink activeClassName="active" exact to="/top100" className="item-row">
                  <span></span>  <span><StarBorderIcon className="LibraryMusicIcon"/></span> <label >Top 100</label>
                </NavLink>
                <NavLink activeClassName="active" exact to="/4" className="item-row">
                  <span></span>  <span><YouTubeIcon className="LibraryMusicIcon"/></span> <label >MV</label>
                </NavLink>
                <div className="item-row-name">
                    <label >Thư Viện</label>
                </div>
                <NavLink activeClassName="active" exact to="/5" className="item-row">
                  <span></span>  <span><MusicVideoIcon className="LibraryMusicIcon LibraryMusicIcon-1"/></span> <label >Bài Hát</label>
                </NavLink>
                <NavLink activeClassName="active" exact to="/playlist" className="item-row">
                  <span></span>  <span><PlaylistPlayIcon className="LibraryMusicIcon LibraryMusicIcon-2"/></span> <label >Play List</label>
                </NavLink>
                <NavLink activeClassName="active" exact to="/history" className="item-row">
                  <span></span>  <span><QueryBuilderIcon className="LibraryMusicIcon LibraryMusicIcon-3"/></span> <label >Gần Đây</label>
                </NavLink>
                
            </div>
            <div className="item-row-border-2"></div>
            <div className="item-list-footer" >
                <NavLink activeClassName="active"  to="/add" className="item-row">
                  <span></span>  <span><AddIcon className="LibraryMusicIcon"/></span> <label >Tạo plasy list mới</label>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default Varbar;