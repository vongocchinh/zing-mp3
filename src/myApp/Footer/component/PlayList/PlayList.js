import React from 'react';
import './styles.scss';
// import DeleteIcon from '@material-ui/icons/Delete';
function PlayList(props) {
    // const onDeleteHistory=()=>{
    //     props.onDeleteHistory();
    // }
    return (
        <div className="con-play-list">
            <div className="option-header" >
            <p>Danh Sách Đang Phát</p>
            {/* <DeleteIcon  hiden={true} onClick={onDeleteHistory} className="DeleteIcon" /> */}
            </div>
            <div id="style-3" className="con-play-list-item">
                {props.showHistory}
            </div>
        </div>
    );
}

export default PlayList;