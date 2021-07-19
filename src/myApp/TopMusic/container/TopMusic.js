/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Top from './../component/TopMusic';
import * as action from './../actions/topmusic';
const TopMusic=(props)=>{
    useEffect(()=>{
      window.scrollTo({top:0,behavior:"auto"})
    })
    const {TopMusicVN} = props;
    useEffect(()=>{
      props.GET_ALL_TOP();
    },[1])
    return(
        <>
          <Top data={TopMusicVN.dataMusic.songs&&TopMusicVN.dataMusic.songs} />
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
      TopMusicVN:state.TopMusicVN
    }
  }
  const dispatchToProps=(dispatch,props)=>{
    return {
      GET_ALL_TOP:()=>{
          dispatch(action.GET_ALL_TOP());
      }
    }
  }
export default (connect(mapStateToProps,dispatchToProps)) (TopMusic);