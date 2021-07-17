/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState,useEffect, useMemo} from 'react';
import { connect } from 'react-redux';
import FooterComponent from './../component/Footer';
import * as action from './../actions/Footer';


const Footer=(props)=>{
    const {Footer}=props;
    
    const [playing, setPlaying] = useState(false);
    const [loop, setLoop] = useState(false);
    const [progess, setProgess] = useState(0);
    const [arrUrl,setArrUrl]=useState([{
      id:1
    }]);
   
    const [time,setTime]=useState(0);
    useMemo(()=>{
      setArrUrl(...[arrUrl],arrUrl.push(Footer.url));
      
    },[Footer.url])


    const onPlay=()=>{
       if(arrUrl[arrUrl.length-1].music){
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
     if(playing){
      audio.ontimeupdate=()=>{
        if(playing){
          setTime((audio.duration/60).toFixed(2));
          
        }

      }
      setProgess(0);
      audio.onloadstart=()=>{
        setProgess(0);
      }
     }
      
    },[Footer.url])


    useEffect(()=>{
      var audio = document.getElementById("audio");
      audio.ontimeupdate=()=>{
        
        setProgess(audio.currentTime/audio.duration*100)
      }
      setPlaying(Footer.playing);
    },[Footer.playing]);
    
    useEffect(async() =>{
      props.GET_ALL_MUSIC();
    },[1])
    


    useEffect(() => {
      var audio = document.getElementById("audio");
      
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
    window.onbeforeunload=function(){
        if(playing){
            return "Are you sure to leave this page?";
        }
    }
    useEffect(() => {
      var audio = document.getElementById("audio");
      audio.addEventListener('ended', () => {
        props.stopRorate();
        setPlaying(false)
      });
      
      return () => {
        
        audio.removeEventListener('ended', () => {
          props.stopRorate();
          setPlaying(false)
        });
      };
    }, []);
    useEffect(()=>{
      var audio = document.getElementById("audio");
      audio.loop=loop;
    },[loop])
    const onLoop=()=>{
      setLoop(!loop);      
    }

    const onChangeProgess=(e)=>{
      var audio = document.getElementById("audio");
      audio.ontimeupdate=()=>{
        
        var speek=audio.duration/100* e;
        console.log(speek+""+audio.currentTime);
        audio.currentTime=speek;
      }

     
    }
    return (
        <>
          <audio   autoPlay={true} id="audio" src={(arrUrl[arrUrl.length-1]).music}></audio>
          <FooterComponent onChangeProgess={onChangeProgess} progess={progess} loopMusic={loop} onLoop={onLoop} time={time} onChangeVolume={onChangeVolume} data={Footer.url} onPlay={onPlay} playing={playing} />
        </>
    )
}
const mapStateToProps=(state)=>{
  return {
    Footer:state.Footer
  }
}
const dispatchToProps=(dispatch,props)=>{
  return {
    onPlaying:()=>{
      dispatch(action.onOplaying());
    },
    GET_ALL_MUSIC: ()=>{
      dispatch(action.GET_ALL_MUSIC());
    },
    stopRorate:()=>{
      dispatch(action.endPlay());
    }
  }
}
export default (connect(mapStateToProps,dispatchToProps))(Footer);