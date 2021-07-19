import React, {  } from 'react';
import His from './asset/x2.jpg';
import DeleteIcon from '@material-ui/icons/Delete';
const History=(props)=>{

    // const onPlaying=()=>{
    //     props.onPlaying();
    // }
    // const showAvatar=(data)=>{
    //     if(data){
    //         return  <img className={props.play? "img-rorate":""} alt=" " src={data.coverImage} />
    //     }
    // }
    // const onStop=()=>{
    //     props.onStop();
    // }

    const onDelete=()=>{
        props.onDelete();
    }
    return(
        <>
        <div className="con-vn">
            <div className="con-vn-left">
                <div className="div">
                    <div className="img">
                    <img className={props.play? "img-rorate":"img-play-list"} alt=" " src={His} />
                    </div>
                    {/* {props.play?<button onClick={onStop}>Tạm Dừng</button>: */}
                    {/* <button onClick={onPlaying}>Tiếp Tục Phát</button>} */}
                    <span className="span">{props.name}</span>
                    
                </div>
            </div>
            <div className="con-vn-right">
                <div className="con-vn-right-item-music">
                    <div className="item-left">
                        <div className="con-vn-right-item-music-check">
                            
                        </div>
                        <div className="con-vn-right-item-music-name">
                            <span>Bài Hát</span>
                            <div>
                               
                            </div>
                        </div>
                        <div className="con-vn-right-item-music-time">
                            <span>Thời Gian</span>
                        </div>
                    </div>

                    <div className="con-vn-right-item-music-option">
                        <DeleteIcon onClick={onDelete} style={{color:"white",fontSize:"18px"}} />
                    </div>
                </div> 
                {props.show}
            </div>    
        </div>
        </>
    )
}

export default (History);