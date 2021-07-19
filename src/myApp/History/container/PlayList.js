import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import His from './../component/History';
import * as action from './../action/action';
import Item from '../component/Item1';
import * as actions from './../../TopItem/actions/topVN';
import * as actionf from '../../Footer/actions/Footer';
function PlayList(props) {
    const {PlayList}=props;
    useEffect(()=>{
        if(PlayList.length>0){
            var id="11";
            var arrs=PlayList
            props.SetRankDataMusic({arrs,id});
        }
    })
    const onPlay=(e)=>{
        props.onPlaying(e);
    }
    const showHistoty=(arr)=>{
        var html=null;

        if(arr){
            html=arr.map((value,key)=>{
                return (
                    <Item track={0} onPlay={onPlay} stt={key} value={value} key={key} />
                )
            })
        }

        return html;
    }
    const onDelete=()=>{
        props.onDelete();
    }
    return (
        <div>
            <His onDelete={onDelete}  name="Danh Sách Yêu Thích" show={showHistoty(PlayList)} />
        </div>
    );
}
const mapStateToProps=(state)=>{
    return {
      Footer:state.Footer,
      ItemVN:state.ItemVN,
      PlayList:state.PlayList
    }
  }
  const dispatchToProps=(dispatch,props)=>{
      return {
        onDelete:()=>{
            dispatch(action.DELETE_LIST());
        },
        SetRankDataMusic:(data)=>{
            dispatch(actions.SetRankPlayListMusic(data));
        },
        onPlaying:(data)=>{
            dispatch(actionf.onPlayingUrl(data));
          }
      }
  }
export default (connect(mapStateToProps,dispatchToProps))(PlayList);