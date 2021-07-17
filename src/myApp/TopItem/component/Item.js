import React, { useState } from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './styles/styles.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Item=(props)=>{
    const [run,setRun]=useState(true);
    const onPlay=()=>{
        props.onPlay(props.value);
        setRun(true);
    }
    return(
        <>
         <div className="con-vn-right-item-music">
            <div className="item-left">
                <div className="con-vn-right-item-music-check">
                    {run?<MusicNoteIcon className="MusicNoteIcon" fontSize="small" />:"123"}
                </div>
                <div className="con-vn-right-item-music-name">
                    <img alt="" src={props.value.avatar} />
                    <div>
                        <label>{props.value.title}</label>
                        <span>{props.value.creator}</span>
                    </div>
                </div>
                <div className="con-vn-right-item-music-time">
                    <span>chưa cập nhật</span>
                </div>
            </div>

            <div className="con-vn-right-item-music-option">
                <FavoriteBorderIcon className="PlayArrowIcon" />
                <PlayArrowIcon className="PlayArrowIcon" onClick={onPlay} />
                <MoreHorizIcon className="PlayArrowIcon" />
            </div>
        </div> 
        </>
    )
}

export default (Item);