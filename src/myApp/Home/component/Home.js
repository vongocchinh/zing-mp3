import React from 'react';
import './styles/styles.scss'

import { Link } from 'react-router-dom';

import Img1 from './asset/a.jpg'

import Img2 from './asset/b.jpg'

import Img3 from './asset/c.jpg'
import IMGs from './asset/s.jpg'
import IMGt from './asset/t.jpg'

import IMGst from './asset/st.jpg'
import IMGz from './asset/z.jpg'

import IMGtt from './asset/tt.jpg'
import IMGc from './asset/m.jpg'

import IMGf from './asset/f.jpg'
import IMGg from './asset/g.jpg'


import IMGk1 from './asset/k1.jpg'
import IMGk2 from './asset/k2.jpg'

import IMGk7 from './asset/t7.jpg'
import IMGk72 from './asset/t72.jpg'


import IMGu from './asset/u.jpg'
import IMGu2 from './asset/u2.jpg'



import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



  
const Home=()=>{
    return (
        <>

            <div className="con-home-slider">
                <Link to="/abc" className="con-home-slider-img">
                    <img alt="" src={Img1} />
                </Link>
                <Link to="/abc" className="con-home-slider-img">
                    <img alt="" src={Img2} />
                </Link>
                <Link to="/abc" className="con-home-slider-img">
                    <img alt="" src={Img3} />
                </Link>
            </div>
            <div className="con-home-main-1">
                <p>Hôm Nay Nghe Gì</p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key}      >
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGs:IMGt} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Nghe Gần Nhất <ArrowForwardIosIcon className="ArrowForwardIosIcon" /></p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key} >    
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGst:IMGz} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Mix Riêng Cho Bạn</p>
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
                       {[1,2,3,4].map((value,key)=>{
                           return (
                            <SwiperSlide key={key} >    
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGu:IMGu2} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Tâm Trạng Và Hoạt Động </p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key}>
                                <Link to="/abc" className="album-slider-img-item-one">
                                    <div className="img-items">
                                        <img alt="" src={key%2?IMGtt:IMGc} />
                                    </div>
                                </Link>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Âm Nhạc Thịnh Hành</p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key} >    
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGf:IMGg} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>K-Pop Muôn Màu</p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key} >    
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGk1:IMGk2} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
            <div className="con-home-main-1">
                <p>Nhạc Mới Mỗi Ngày</p>
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
                       {[1,2,3,4,5,6,7].map((value,key)=>{
                           return (
                            <SwiperSlide key={key} >    
                                <div to="/abc"  className="album-slider-img-item">
                                    <div className="img">
                                        <div className="option-albumn">
                                            <FavoriteBorderIcon className="FavoriteBorderIcon" fontSize="small" />
                                            <PlayArrowIcon  className="FavoriteBorderIcon" fontSize="large" />
                                            <MoreHorizIcon  className="FavoriteBorderIcon" fontSize="small" />
                                        </div>
                                        <img alt="" src={key%2?IMGk7:IMGk72} />
                                        
                                    </div>
                                    <Link to="/abc" className="label">Những Bài Hát Hay Nhất Của Mr.Siro</Link>
                                    <span>Mr.Siro</span>
                                </div>
                            </SwiperSlide>
                           )
                       })}
                    </Swiper>
                    
                </div>
            </div>
        </>
    )
}

export default Home;