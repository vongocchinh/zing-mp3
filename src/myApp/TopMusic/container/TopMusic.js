import React from 'react';
import { connect } from 'react-redux';
import Top from './../component/TopMusic';
const TopMusic=(props)=>{

    const {Footer} = props;
    return(
        <>
          <Top data={Footer.dataMusic.songs&&Footer.dataMusic.songs} />
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
     
    }
  }
export default (connect(mapStateToProps,dispatchToProps)) (TopMusic);