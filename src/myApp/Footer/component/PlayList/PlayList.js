import React from 'react';
import './styles.scss';

function PlayList(props) {
    return (
        <div className="con-play-list">
            <p>Nghe Gần Đây</p>
            <div id="style-3" className="con-play-list-item">
                {props.showHistory}
            </div>
        </div>
    );
}

export default PlayList;