import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {  SwiperSlide } from "swiper/react";
const Item=(props)=>{
    return(
        <SwiperSlide  >    
            <div to="/abc"  className="album-slider-img-item">
                <div className="img">
                    <div className="option-albumn">
                        <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                        <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                        <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                    </div>
                    <img alt="" src="" />
                    
                </div>
                <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                <span>Mr.Siro</span>
            </div>
         </SwiperSlide>
    )
}

export default Item;