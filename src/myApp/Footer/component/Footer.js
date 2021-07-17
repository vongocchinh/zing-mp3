/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect}  from 'react';
import './styles/styles.scss'
import play from './asset/z.png';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import MicIcon from '@material-ui/icons/Mic';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { AiOutlineStepBackward, AiOutlineStepForward ,AiOutlinePause, AiFillCaretRight } from 'react-icons/ai';


const Footer=(props)=>{
  var volumes=localStorage.getItem('volume')?localStorage.getItem('volume'):1;
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
    return (
        <>
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
                <MoreHorizIcon className="MoreHorizIcon" />
                <FavoriteBorderIcon className="MoreHorizIcon" />
              </div>
            </div>
            <div className="con-footer-item-2">

                <div className="con-footer-item-2-item-top">
                <ShuffleIcon className="ShuffleIcons" />
                  <AiOutlineStepBackward className="ShuffleIcons" />
                  {playing?<AiOutlinePause className="ShuffleIcons" onClick={onPlay} />:<AiFillCaretRight className="ShuffleIcons" onClick={onPlay} />}
                    
                  <AiOutlineStepForward className="ShuffleIcons" />
                <RepeatIcon className="ShuffleIcon" />
                </div>
                <div className="con-footer-item-2-item">
                   <p className="span1">00.00</p> 
                  <input id="progress" className="progress" type="range"  step="1" min="0" max="100" />
                  <p className="span2">{props.time?props.time:"00.00"}</p>
                </div>
            </div>
            <div className="con-footer-item-1">
              <div className="option-vl" >
                <YouTubeIcon  className="YouTubeIcon" />
                <MicIcon className="YouTubeIcon" />
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