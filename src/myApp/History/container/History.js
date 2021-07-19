import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import His from './../component/History';
import * as action from './../action/action';
import Item from './../component/Item2';
import * as actionf from '../../Footer/actions/Footer';
import * as actions from './../../TopItem/actions/topVN';

function History(props) {
    const {History}=props;

    const ADD_PLAY_LIST=(data)=>{
        props.ADD_PLAY_LIST(data);
    }
    useEffect(()=>{
        if(History.length>0){
            var id="10";
            var arrs=History
            props.SetRankDataMusic({arrs,id});
        }
    })
    const onPlay=(e)=>{
        console.log(e);
        props.onPlaying(e);
    }
    const showHistoty=(arr)=>{
        var html=null;

        if(arr){
            html=arr.map((value,key)=>{
                return (
                    <Item track={1} stt={key}  ADD_PLAY_LIST={ADD_PLAY_LIST} onPlay={onPlay} value={value} key={key} />
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
            
            <His onDelete={onDelete} name="Nhạc Nghe Gần Nhất" show={showHistoty(History)} />
        </div>
    );
}
const mapStateToProps=(state)=>{
    return {
      Footer:state.Footer,
      ItemVN:state.ItemVN,
      History:state.History
    }
  }
  const dispatchToProps=(dispatch,props)=>{
      return {
        ADD_PLAY_LIST:(data)=>{
            dispatch(action.ADD_PLAY_LIST(data));
        },
        onDelete:()=>{
            dispatch(action.DELETE_HISTORY());
        },
        SetRankDataMusic:(data)=>{
            dispatch(actions.SetRankPlayListMusic(data));
        }
        ,
        onPlaying:(data)=>{
            dispatch(actionf.onPlayingUrl(data));
          }
      }
  }
export default (connect(mapStateToProps,dispatchToProps))(History);