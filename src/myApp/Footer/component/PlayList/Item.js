import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
function Item(props) {
    const onPlayingPlayList=()=>{
        props.onPlayingPlayList(props.stt);
    }

    // const activePlay=()=>{
    //     var play=document.querySelectorAll('.PlayArrowIcon');
    //     play.forEach(res=>res.addEventListener('click',()=>{
    //         let j=0;
    //         while(j<play.length){
    //             play[j].className='PlayArrowIcon';
    //             j++;
    //         }
    //         res.className="PlayArrowIcon rorate"
    //     }))
    // }
    // activePlay();
    const onsTopMusic=()=>{
        props.onsTopMusic();
    }
    const showIcon=(play,classname)=>{

        if(classname){
            if(play){
                return <PauseCircleFilledIcon onClick={onsTopMusic} className="Icon rorate" />
            }else{
                return <PauseCircleFilledIcon onClick={onsTopMusic} className="Icon" />
            }

        }else{
            return <PlayArrowIcon className="Icon"  />
        }
    }
    return (
        <div>
             <div className="item-con-play-list">
                    <img alt="" src={props.value?props.value.avatar:''} />
                    <div className="name">
                        <label>{props.value?props.value.title:''}</label>
                        <span>{props.value?props.value.creator:''}</span>
                    </div>
                    <div className={"PlayArrowIcon "} onClick={onPlayingPlayList}>
                        {showIcon(props.play,props.classname)}
                        
                    </div >
                    
                </div>
        </div>
    );
}

export default Item;