import React from 'react';
import { connect } from 'react-redux';
import His from './../component/History';
import * as action from './../action/action';
import Item from './../component/Item';
function PlayList(props) {
    const {PlayList}=props;
    const showHistoty=(arr)=>{
        var html=null;

        if(arr){
            html=arr.map((value,key)=>{
                return (
                    <Item track={0} value={value} key={key} />
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
        }
      }
  }
export default (connect(mapStateToProps,dispatchToProps))(PlayList);