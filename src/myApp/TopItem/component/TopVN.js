import React, {  } from 'react';
const TopVN=(props)=>{

    const onPlaying=()=>{
        props.onPlaying();
    }
    const showAvatar=(data)=>{
        if(data){
            return  <img className={props.play? "img-rorate":""} alt=" " src={data.coverImage} />
        }
    }
    return(
        <>
        <div className="con-vn">
            <div className="con-vn-left">
                <div className="div">
                    <div className="img">
                    {showAvatar(props.avatar)}
                    </div>
                    <button onClick={onPlaying}>{props.play?"Tạm Dừng":"Tiếp Tục Phát"}</button>
                    <span className="span">Cập Nhật: 16/07/2021</span>
                    <span>1 tỉ người yêu thích</span>
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
                        
                    </div>
                </div> 
                {props.showItem}
            </div>    
        </div>
        </>
    )
}

export default (TopVN);