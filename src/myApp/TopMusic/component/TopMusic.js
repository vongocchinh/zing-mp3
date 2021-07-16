import React, { useEffect, useState } from 'react';
import './styles/styles.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import IMGtr from './asset/tr.jpg'
import IMGtri from './asset/tri.jpg'
import IMGtru from './asset/tru.jpg'
import IMGti from './asset/ti.jpg'
import IMGrm from './asset/rm.jpg'
import IMGra from './asset/ra.jpg'
const TopMusic=(props)=>{
    const [topVN,setTopVN]=useState([]);
    useEffect(()=>{
        if(props.data){
            setTopVN(props.data.top100_VN);
        }
    },[props.data])

    const showImg=(key)=>{
        if(key===0){
            return <img alt="" src={IMGtr} />
        }
        if(key===1){
            return <img alt="" src={IMGtru} />
        }
        if(key===2){
            return <img alt="" src={IMGtri} />
        }
        if(key===3){
            return <img alt="" src={IMGti} />
        }
        if(key===4){
            return <img alt="" src={IMGra} />
        }
        if(key===5){
            return <img alt="" src={IMGrm} />
        }
    }
    return (
        <>
        <div className="con-home-main-1">
                <p>Top 100 Việt Nam</p>
                <div className="album-slider-img">
                <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                    "clickable": false
                    }} breakpoints={{
                    "640": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 4,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 5,
                        "spaceBetween": 50
                    }
                    }} className="mySwiper">
                            {topVN&&topVN.map((value,key)=>{
                                return (
                            <SwiperSlide key={key} >    
                                <Link to={"/top100_VN/"+key}  className="album-slider-img-item not-link">
                                    <div className="img">
                                        <div className="option-albumn">
                                        <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                        </div>
                                        {showImg(key)}
                                        
                                    </div>
                                    <label  className="label not-link">{value.name}</label>
                                    <span>{"việt nam"}</span>
                                </Link>
                            </SwiperSlide>
                                )
                            })}
                            
                            
                        
                    </Swiper>
                    
                </div>
            </div>
        </>
    )
}

export default TopMusic;