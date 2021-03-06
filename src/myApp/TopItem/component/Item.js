/* eslint-disable react-hooks/exhaustive-deps  */
import React, { useMemo, useState } from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './styles/styles.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MuiAlert from '@material-ui/lab/Alert';

import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
    return <MuiAlert severity="success" elevation={6} variant="filled" {...props} />;
  }
const Item=(props)=>{
    const [open, setOpen] = React.useState(false);
    var vertical= 'top';
    var horizontal= 'right';
    const handleClose = () => {
        setOpen(false);
      };
    const [run,setRun]=useState(true);
    const onPlay=()=>{
        props.onPlay(props.stt);
        props.ADD_LIST_HISTORY(props.value);
        setRun(true);
    }
    const ADD_PLAY_LIST=()=>{
        props.ADD_PLAY_LIST(props.value);
        setOpen(true);
    }
    useMemo(()=>{
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    },[open])
    return(
        <><Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
                onClose={handleClose}
                key={vertical + horizontal}
            >
                <Alert onClose={handleClose} severity="info">
                    Đã Thêm Vào Danh Sách Yêu Thích
                </Alert>
            </Snackbar>
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
                <FavoriteBorderIcon className="PlayArrowIcon" onClick={ADD_PLAY_LIST} />
                <PlayArrowIcon className="PlayArrowIcon" onClick={onPlay} />
                <MoreHorizIcon className="PlayArrowIcon" />
            </div>
        </div> 
        </>
    )
}

export default (Item);