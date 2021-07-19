import React from 'react';
import { connect } from 'react-redux';
import His from './../component/History';
import * as action from './../action/action';
import Item from './../component/Item';
function History(props) {
    const {History}=props;

    const ADD_PLAY_LIST=(data)=>{
        props.ADD_PLAY_LIST(data);
    }
    const showHistoty=(arr)=>{
        var html=null;

        if(arr){
            html=arr.map((value,key)=>{
                return (
                    <Item track={1} ADD_PLAY_LIST={ADD_PLAY_LIST} value={value} key={key} />
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
        }
      }
  }
export default (connect(mapStateToProps,dispatchToProps))(History);