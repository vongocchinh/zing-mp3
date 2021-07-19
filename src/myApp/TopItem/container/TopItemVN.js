/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import TopVNComponenet from './../component/TopVN';
import * as action from './../actions/topVN';
import * as actions from './../../Footer/actions/Footer';
import Item from '../component/Item';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import * as actionPL from '../../History/action/action';
function Alert(props) {
  return <MuiAlert elevation={6} severity="info" variant="filled" {...props} />;
}

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
    useMemo(()=>{
      setArrs(ItemVN.data);
    },[ItemVN])

    const onPlay=(e)=>{
      props.onPlaying(e);
    }
    useEffect(()=>{
      props.SetRankPlayListMusic({arrs,id});
    })

    const ADD_PLAY_LIST=(data)=>{
      props.ADD_PLAY_LIST(data);
    }
    const ADD_LIST_HISTORY=(data)=>{
      props.ADD_LIST_HISTORY(data);
    }
    const showItem=(arr)=>{
      var html=null;
      if(arr){
        html=arr.map((value,key)=>{
          return <Item key={key} ADD_LIST_HISTORY={ADD_LIST_HISTORY} ADD_PLAY_LIST={ADD_PLAY_LIST} onPlay={onPlay} stt={key} value={value} />
        })
      }
      return html;
    }
    const playingbutton=()=>{
      props.playing();
    }
    const onStop=()=>{
      props.onStop();
    }
    const [open, setOpen] = React.useState(false);
    var vertical= 'top';
    var horizontal= 'right';
    const handleClose = () => {
        setOpen(false);
      };
      useEffect(()=>{
          setOpen(true);
          setTimeout(() => {
              setOpen(false);
          }, 5000);
      },[1])
    const showAlert=(id)=>{
      id=Number(id);
      if(id===0){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Trẻ ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }else if(id===1){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Trữ Tình ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }else if(id===2){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Tiền Chiến ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }else if(id===3){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Trịnh ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }else if(id===4){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Rap Việt ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }else if(id===5){
        return (
          <Snackbar anchorOrigin={{ vertical, horizontal }} open={open}  key={vertical + horizontal} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info">
            Bạn Đang Nghe Nhạc Remix Trẻ ở Top 100 Việt Nam
          </Alert>
        </Snackbar>
        )
      }
    }
    return(
        <>
          {showAlert(id)}
          <TopVNComponenet onStop={onStop} avatar={arrs[0]&&arrs[0]} onPlaying={playingbutton} play={playings} showItem={showItem(arrs)} />
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
      },
      onStop:()=>{
        dispatch(actions.END_PLAY());
      },
      SetRankPlayListMusic:(data)=>{
        dispatch(action.SetRankPlayListMusic(data));
      },
      ADD_PLAY_LIST:(data)=>{
        dispatch(actionPL.ADD_PLAY_LIST(data));
      },
      ADD_LIST_HISTORY:(data)=>{
        dispatch(actionPL.ADD_LIST_HISTORY(data));
      }
    }
  }
export default (connect(mapStateToProps,dispatchToProps)) (TopVN);