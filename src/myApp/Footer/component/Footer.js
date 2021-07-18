/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect}  from 'react';
import {Dialog} from '@material-ui/core';
import './styles/styles.scss'
import play from './asset/z.png';
import MoreHorizIcon from '@material-ui/icons/PlaylistAdd';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import MicIcon from '@material-ui/icons/Mic';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { AiOutlineStepBackward, AiOutlineStepForward ,AiOutlinePause, AiFillCaretRight } from 'react-icons/ai';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PlayList from './PlayList/PlayList';
const Footer=(props)=>{
  var volumes=localStorage.getItem('volume')?localStorage.getItem('volume'):1;
  const [openPlayList, setOpenPlayList] = React.useState(false);
  const [openHeart, setOpenHeart] = React.useState(false);
  const [volume, setVolume] = useState(volumes);
  const [muted, setMuted] = useState(false)
  const finalVolume = muted ? 0 : volume ** 2;
  localStorage.setItem('volume',finalVolume);
  const {playing}=props;
  const onPlay=()=>{
    props.onPlay();
  }
  useEffect(()=>{
    props.onChangeVolume(finalVolume);
    
  },[finalVolume])
  const muteVolume=()=>{
    setMuted(!muted);
  }
  const show=(data)=>{
    if(data){
      return <img src={data.avatar?data.avatar:play} alt="" className={playing?"rorate":""} />
    }else{
      return <img src={play} alt="" className={playing?"rorate":""} />
    }
  }

  const showTitle=(data)=>{
    if(data){
      return <>
      <span className={playing?"marquee playing":"marquee"}>{data.title?data.title:""}</span>
      <p>{data.creator?data.creator:""}</p>
      </>
    }else{
      return <>
      <span className={playing?"marquee playing":"marquee"}>{""}</span>
      <p>{""}</p>
      </>
    }
  }
  const onLoop=()=>{
    props.onLoopMusic();
  }
  const onChangeProgess=(e)=>{
    props.onChangeProgess(e.target.value);
  }
  const preMusic=()=>{
    props.preMusic();
  }
  const randomMusic=()=>{
    props.randomMusic();
  }
  const nextMusic=()=>{
    props.nextMusic();
  }
  const handleClickOpen=()=>{
    props.handleClickOpen();
  }


  const handleClickOpenList = () => {
    setOpenPlayList(true);
  };

  const handleClose = () => {
    setOpenPlayList(false);
  };

  const handleCloseHeart = () => {
    setOpenHeart(false);
  };

  
  const handleClickOpenListHeart = () => {
    setOpenHeart(true);
  };

  const format=(value)=>{
    var valueBe=parseInt(value);
    var valueAf=value-valueBe;
    var valueAfStr=Number((valueAf.toFixed(2)).toString().split(".")[1]);
    var count=0;
    while(valueAfStr>=60){
      count++;
      valueAfStr%=60;
    }
    var kq1=(valueBe+count);
    if(kq1.toString().split('').length===1){
      return "0"+kq1+":"+parseInt(valueAfStr);
    }
    return +":"+parseInt(valueAfStr);
  }
  const onStop=()=>{
    props.onStop();
  }
  const onDeleteHistory=()=>{
    props.onDeleteHistory();
  }
  return (
      <>
       <Dialog
        open={openPlayList}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{borderRadius:"20px"}}
      >
        <>
        <PlayList onDeleteHistory={onDeleteHistory} showHistory={props.showHistory} />
        </>
      </Dialog>
      <Dialog
        open={openHeart}
        keepMounted
        onClose={handleCloseHeart}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{borderRadius:"20px"}}
      >
        <>
        Chưa có
        </>
      </Dialog>
      <div className="con-footer">
        <div className="con-footer-item">
          <div className="con-footer-item-1">
            <div className="img">
              {show(props.data)}
            </div>
            <div className="item-play-name">
              {showTitle(props.data)}
              
            </div>
            <div className="icon" >
              <MoreHorizIcon onClick={handleClickOpenList} className="MoreHorizIcon" />
              <FavoriteBorderIcon onClick={handleClickOpenListHeart} className="MoreHorizIcon" />
             
            </div>
              
            {/* </div> */}
            {/* <div className="icon" >
              <div className="icon-hover-none-heart">
              <div className="icon-hover-play-list">
              </div>
            </div> */}

          </div>
          <div className="con-footer-item-2">

              <div className="con-footer-item-2-item-top">
             {props.random? <ShuffleIcon onClick={randomMusic} style={{color:"#7200A1"}} className="ShuffleIcons" />: <ShuffleIcon onClick={randomMusic} className="ShuffleIcons" />}
                <AiOutlineStepBackward onClick={preMusic} className="ShuffleIcons" />
                {playing?<AiOutlinePause className="ShuffleIcons" onClick={onStop} />:<AiFillCaretRight className="ShuffleIcons" onClick={onPlay} />}
                  
                <AiOutlineStepForward className="ShuffleIcons" onClick={nextMusic}  />
                {props.loopMusic?<RepeatOneIcon className="ShuffleIcon " style={{color:"#7200A1"}} onClick={onLoop} />:<RepeatIcon className="ShuffleIcon " onClick={onLoop} />}
              </div>
              <div className="con-footer-item-2-item">
                  <p className="span1">00.00</p> 
                <input id="progress" className="progress" type="range" onChange={onChangeProgess} value={props.progess?props.progess:0}  step="1" min="0" max="100" />
                <p className="span2">{props.time?format(props.time):"00.00"}</p>
              </div>
          </div>
          <div className="con-footer-item-1">
            <div className="option-vl" >
              <YouTubeIcon  className="YouTubeIcon" />
              <MicIcon onClick={handleClickOpen} className="YouTubeIcon" />
              <div>
                {muted? <VolumeOffIcon onClick={muteVolume} className="YouTubeIcon" /> :<VolumeUpIcon onClick={muteVolume} className="YouTubeIcon" /> }
                <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                disabled={muted}
                value={volume}
                onChange={event => {
                  setVolume(event.target.valueAsNumber)
                }}
              />
              </div>
              <ZoomOutMapIcon className="YouTubeIcon" />
            
            </div>  
          </div>
        </div>
      </div>
        </>
    )
}

export default Footer