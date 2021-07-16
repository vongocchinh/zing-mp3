/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import TopVNComponenet from './../component/TopVN';
import * as action from './../actions/topVN';
import * as actions from './../../Footer/actions/Footer';
import Item from '../component/Item';
const TopVN=(props)=>{
   const [arrs,setArrs]=useState([]);
   const [playings,setPlayings]= useState(false);
    const {ItemVN,Footer} = props;
    var id=props.match.params.id;
    useMemo(()=>{
      setPlayings(Footer.playing);
    },[Footer.playing]);
    useEffect(()=>{
      props.GET_ITEM_ALL(id);
    },[id])
    useEffect(()=>{
      setArrs(ItemVN.data);
    },[ItemVN])

    const onPlay=(e)=>{
      props.onPlaying(e);
    }
    const showItem=(arr)=>{
      var html=null;
      if(arr){
        html=arr.map((value,key)=>{
          return <Item key={key}  onPlay={onPlay} stt={key} value={value} />
        })
      }
      return html;
    }
    const playingbutton=()=>{
      props.playing();
    }
    return(
        <>
          <TopVNComponenet avatar={arrs[0]&&arrs[0]} onPlaying={playingbutton} play={playings} showItem={showItem(arrs)} />
        </>
    )
}
const mapStateToProps=(state)=>{
    return {
      Footer:state.Footer,
      ItemVN:state.ItemVN
    }
  }
  const dispatchToProps=(dispatch,props)=>{
    return {
      GET_ITEM_ALL:(id)=>{
        dispatch(action.GET_ITEM_ALL(id));
      },
      onPlaying:(data)=>{
        dispatch(actions.onPlayingUrl(data));
      },
      playing:()=>{
        dispatch(actions.onOplaying());
      }
    }
  }
export default (connect(mapStateToProps,dispatchToProps)) (TopVN);