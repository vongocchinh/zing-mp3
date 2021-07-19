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

import IMGnhat from './asset/nhat.jpg'
import IMGhoa from './asset/hoa.jpg'
import IMGhq from './asset/hq.jpg'


import IMGp from './asset/p.jpg'
import IMGdp from './asset/dp.jpg'
import IMGhhp from './asset/hhp.jpg'
import IMGjp from './asset/jp.jpg'
import IMGcp from './asset/cp.jpg'
import IMGltp from './asset/ltp.jpg'

import Loading from './asset/lo.png';
const TopMusic=(props)=>{
    const [topVN,setTopVN]=useState([]);
    const [topAM,setTopAM]=useState([]);
    const [topKL,setTopKL]=useState([]);
    const [topCA,setTopCA]=useState([]);
    useEffect(()=>{
        if(props.data){
            setTopVN(props.data.top100_VN);
            setTopAM(props.data.top100_AM)
            setTopCA(props.data.top100_CA)
            setTopKL(props.data.top100_KL)
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

    const showImgAM=(key)=>{
        if(key===0){
            return <img alt="" src={IMGp} />
        }
        if(key===1){
            return <img alt="" src={IMGdp} />
        }
        if(key===2){
            return <img alt="" src={IMGhhp} />
        }
        if(key===3){
            return <img alt="" src={IMGjp} />
        }
        if(key===4){
            return <img alt="" src={IMGcp} />
        }
        if(key===5){
            return <img alt="" src={IMGltp} />
        }
    }


    const showImgCA=(key)=>{
        if(key===0){
            return <img alt="" src={IMGhq} />
        }
        if(key===1){
            return <img alt="" src={IMGhoa} />
        }
        if(key===2){
            return <img alt="" src={IMGnhat} />
        }
       
    }


    const showItemTopVN=(arr)=>{
        var html=null;
        if(arr.length>0){
           html= arr&&arr.map((value,key)=>{
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
            })
        }else{
             html= <div className="loading-div">
                <img alt="" src={Loading} />
            </div>
        }
        return html;
    }
    const showItemTopAm=(arr)=>{
        var html=null;


        if(arr.length>0){
            html= arr&&arr.map((value,key)=>{
                 return (
                    <SwiperSlide key={key} >    
                                <Link to={"/top100_AM/"+key}  className="album-slider-img-item not-link">
                                    <div className="img">
                                        <div className="option-albumn">
                                        <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                        </div>
                                        {showImgAM(key)}
                                        
                                    </div>
                                    <label  className="label not-link">{value.name}</label>
                                    <span>{"AM"}</span>
                                </Link>
                            </SwiperSlide>
                 )
             })
         }else{
              html= <div className="loading-div">
                 <img alt="" src={Loading} />
             </div>
         }
        return html;
    }

    const showItemTopKL=(arr)=>{
        var html=null;


        if(arr.length>0){
            html= arr&&arr.map((value,key)=>{
                 return (
                    <SwiperSlide key={key} >    
                                <Link to={"/top100_KL/"+key}  className="album-slider-img-item not-link">
                                    <div className="img">
                                        <div className="option-albumn">
                                        <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                        </div>
                                        <img alt="" src={topKL[0].songs[0].coverImage} />
                                        
                                    </div>
                                    <label  className="label not-link">{value.name}</label>
                                    <span>{"KL"}</span>
                                </Link>
                            </SwiperSlide>
                 )
             })
         }else{
              html= <div className="loading-div">
                 <img alt="" src={Loading} />
             </div>
         }
        return html;
    }

    const showItemTopCA=(arr)=>{
        var html=null;


        if(arr.length>0){
            html= arr&&arr.map((value,key)=>{
                 return (
                    <SwiperSlide key={key} >    
                                <Link to={"/top100_CA/"+key}  className="album-slider-img-item not-link">
                                    <div className="img">
                                        <div className="option-albumn">
                                        <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                        </div>
                                        {showImgCA(key)}
                                        
                                    </div>
                                    <label  className="label not-link">{value.name}</label>
                                    <span>{"CA"}</span>
                                </Link>
                            </SwiperSlide>
                 )
             })
         }else{
              html= <div className="loading-div">
                 <img alt="" src={Loading} />
             </div>
         }
        return html;
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
                        {showItemTopVN(topVN)}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Top 100 AM</p>
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
                            {showItemTopAm(topAM)}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Top 100 KL</p>
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
                            {showItemTopKL(topKL)}
                            
                            
                        
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Top 100 CA</p>
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
                            {showItemTopCA(topCA)}
                            
                            
                        
                    </Swiper>
                    
                </div>
            </div>
        </>
    )
}

export default TopMusic;