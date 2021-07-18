/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/*eslint-disable  no-const-assign*/
/*eslint-env es6*/
import React ,{useState,useEffect, useMemo} from 'react';
import { connect } from 'react-redux';
import FooterComponent from './../component/Footer';
import * as action from './../actions/Footer';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Item from '../component/PlayList/Item';
const Footer=(props)=>{
    const {Footer,RanlOnplayMusic}=props;
    const [playing, setPlaying] = useState(false);
    const [loopMusic, setLoopMusic] = useState(false);
    const [progess, setProgess] = useState(0);

    const [startApp,setStartMusic]=useState(false);
    const [nexMusic,setNexMusic]=useState(true);
    
    const [arrUrl,setArrUrl]=useState(JSON.parse(localStorage.getItem('arrUrl'))?JSON.parse(localStorage.getItem('arrUrl')):[]);
    const [arrPlayMusicTop,setArrPlayMusicTop]=useState([])
    var [vtPlay,setVTPlay]=useState(null);
    const [openKara, setOpenKara] = React.useState(false);

    var [randomMusic,setRandom]=useState(false);

    const [time,setTime]=useState(0);

    useMemo(()=>{
        if(RanlOnplayMusic.rankOnPlay){
         
          setArrPlayMusicTop(RanlOnplayMusic.data);
          console.log(arrPlayMusicTop);
        }
    },[RanlOnplayMusic.rankOnPlay])
    
    useMemo(()=>{
      var indexPlayState=arrUrl.length>0?arrUrl.length-1:-1;
      setVTPlay(indexPlayState)
    },[arrUrl.length])


    const handleClickOpen = () => {
      setOpenKara(true);
    };
  
    const handleClose = () => {
      setOpenKara(false);
    };

    const getIndex=(i)=>{
     const result=arrUrl.find((value,key)=>key===i);
     return result;
    }
 
   
    useMemo(()=>{
      if(Footer.url&&Footer.url!==null){
        setArrUrl(...[arrUrl],arrUrl.push(Footer.url));
        localStorage.setItem('arrUrl',JSON.stringify(arrUrl));
      }
    },[Footer.url])




    const onPlay=()=>{
       if(arrUrl.length>0){
        props.onPlaying();
       }else{
       }
    }
    
    const onChangeVolume=(e)=>{
      var audio = document.getElementById("audio");
      audio.volume=e;
    }
    useMemo(()=>{
      var audio = document.getElementById("audio");
     if(startApp){
      audio.ontimeupdate=()=>{
        setTime((audio.duration/60).toFixed(2));
        setProgess(audio.currentTime/audio.duration*100)
      }
      setProgess(0);
      audio.onloadstart=()=>{
        setTime((audio.duration/60).toFixed(2));
        setProgess(audio.currentTime/audio.duration*100)
        setProgess(0);
      }
     }
      
    },[Footer.url])

    useEffect(()=>{
      setPlaying(Footer.playing);
     
    },[Footer.playing]);
    
    useEffect(()=>{
      var audio = document.getElementById("audio");
      if(playing){
        audio.ontimeupdate=()=>{
        setTime((audio.duration/60).toFixed(2));
        setProgess(audio.currentTime/audio.duration*100)
      }
      
    }
    },[playing])

    useEffect(() => {      
        playing ? musicPlay() : musicPause();
      },
      [playing]
    );

    const musicPlay=()=>{
      var audio = document.getElementById("audio");
      audio.play();
      setPlaying(true);
      setStartMusic(true);
      if(startApp){
       audio.ontimeupdate=()=>{
         setTime((audio.duration/60).toFixed(2));
         setProgess(audio.currentTime/audio.duration*100)
        }
      }
    }
    
    const musicPause=()=>{
      var audio = document.getElementById("audio");
      audio.pause()
      setStartMusic(false);
    }

    window.onbeforeunload=function(){
        if(playing){
            return "Are you sure to leave this page?";
        }
    }
    const onPlayingPlayList=(e)=>{
        props.stopRorate();
        props.Stop_PLAYING();
        setVTPlay(e);
        show();
        props.onPlaying();
        musicPlay();
    }
    const onsTopMusic=()=>{
      props.onStop();
    }
    const showHistory=(arr,vt)=>{
      var html=null;
      if(arr.length>0){
        html=arr.map((value,key)=>{
          return (
            <Item classname={key===vt?true : false} onsTopMusic={onsTopMusic}  value={value} key={key} stt={key} onPlayingPlayList={onPlayingPlayList} />
          )
        })
      }else{
        return <div className="not-arr"><span >Danh sách trống</span></div>
      }
      return html;
    }
    
    const randomMusics=()=>{
      if(arrUrl.length>0){
        setRandom(!randomMusic);
      }
    }


    const NextMusicRandom=()=>{
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * arrUrl.length);
      } while (newIndex===vtPlay);
      
      setVTPlay(newIndex);
      props.onPlaying();
      musicPlay();
}

    useMemo(()=>{
      if(randomMusic){
        setNexMusic(false);
        NextMusicRandom();
      }else{
        setNexMusic(true);
      }

    },[randomMusic]);

    useEffect(() => {
      var audio = document.getElementById("audio");
      audio.addEventListener('ended', () => {

        NextMusic();
      });
    }, []);

    const NextMusic=()=>{
      props.stopRorate();
      props.Stop_PLAYING();
      if(nexMusic){
        vtPlay++;
        if(vtPlay>arrUrl.length-1){
          vtPlay=0;
        }
        setVTPlay(vtPlay);
        show();
        props.onPlaying();
        musicPlay();
      }
      
    }



    useEffect(()=>{
      var audio = document.getElementById("audio");
      audio.loop=loopMusic;
    },[loopMusic])



    const onLoopMusic=()=>{
      setLoopMusic(!loopMusic);      
    }



    const onChangeProgess=(e)=>{
      var audio = document.getElementById("audio");
      audio.ontimeupdate=()=>{
        var speek=audio.duration/100* e;
        audio.currentTime=speek;
      }
    }

    const show=()=>{
      if(vtPlay!==-1){
        if(getIndex(vtPlay)){
          return getIndex(vtPlay).music;
        }
      }
    }
    const showData=()=>{
      if(vtPlay!==-1){

        if(getIndex(vtPlay)){
          return getIndex(vtPlay);
        }
      }
    }

    const preMusic=()=>{
      if(arrUrl.length>0){
        props.stopRorate();
        props.Stop_PLAYING();
        vtPlay--;
        if(vtPlay<0){
          vtPlay=arrUrl.length-1;
        }
        setVTPlay(vtPlay);
        show();
        props.onPlaying();
        musicPlay();
      }
    }
    const nextMusic=()=>{
     if(arrUrl.length>0){
      props.stopRorate();
      props.Stop_PLAYING();
      vtPlay++;
      if(vtPlay>arrUrl.length-1){
        vtPlay=0;
      }
      setVTPlay(vtPlay);
      show();
      props.onPlaying();
      musicPlay();
     }
    }
    const onStop=()=>{
      props.onStop();
    }

    const onDeleteHistory=()=>{
      var arrUrl=[];
      setArrUrl(arrUrl);
      localStorage.setItem('arrUrl',JSON.stringify(arrUrl));
      setProgess(0);
      setPlaying(false);
      props.Stop_PLAYING();
      setTime(0);
    }
    return (
        <>
        <Dialog
        open={openKara}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
         {/*  */}
        </DialogContent>
      </Dialog>
          <audio   autoPlay={true} id="audio" src={show()}></audio>
          <FooterComponent
            showHistory={showHistory(arrUrl,vtPlay)}
            onStop={onStop}
            random={randomMusic}
            onDeleteHistory={onDeleteHistory}
            handleClickOpen={handleClickOpen}
            randomMusic={randomMusics} preMusic={preMusic} 
            onChangeProgess={onChangeProgess} progess={progess} loopMusic={loopMusic} onLoopMusic={onLoopMusic} time={time}
            onChangeVolume={onChangeVolume} data={showData()} onPlay={onPlay} playing={playing} nextMusic={nextMusic} />
        </>
    )
}
const mapStateToProps=(state)=>{
  return {
    Footer:state.Footer,
    RanlOnplayMusic:state.RanlOnplayMusic
  }
}
const dispatchToProps=(dispatch,props)=>{
  return {
    onPlaying:()=>{
      dispatch(action.onOplaying());
    },
    stopRorate:()=>{
      dispatch(action.endPlay());
    },
    Stop_PLAYING:()=>{
      dispatch(action.END_PLAY());
    },
    onStop:()=>{
      dispatch(action.END_PLAY());
    }
  }
}
export default (connect(mapStateToProps,dispatchToProps))(Footer);