/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState,useEffect} from 'react';
import { connect } from 'react-redux';
import FooterComponent from './../component/Footer';
import * as action from './../actions/Footer';


const Footer=(props)=>{

    
    const [playing, setPlaying] = useState(false);
    const [music,setAudio]=useState('https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=uPqHA1vdgUDNNYcvqr2oaA&e=1626319087');
    const [audio] = useState(new Audio(music));
    const {Footer}=props;

    const onPlay=()=>{
        props.onPlaying();
    }

    const onChangeVolume=(e)=>{
      audio.volume=e;
    }
    useEffect(()=>{
      setPlaying(Footer.playing);
    },[Footer.playing]);
    
    useEffect(async() =>{
      props.GET_ALL_MUSIC();
    },[1])


    useEffect(()=>{
      setAudio(Footer.url.music)
    })

    useEffect(() => {
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
    return (
        <>
          <FooterComponent onChangeVolume={onChangeVolume} data={Footer.url} onPlay={onPlay} playing={playing} />
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