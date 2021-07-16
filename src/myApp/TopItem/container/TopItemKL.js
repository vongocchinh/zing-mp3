import React from 'react';
import { connect } from 'react-redux';

import Item from './../component/Item';
const TopKL=(props)=>{

    const {Footer} = props;
    console.log(Footer);
    return(
        <>
        
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
export default (connect(mapStateToProps,dispatchToProps)) (TopKL);