import * as types from './../contanst/Footer';
import getApiProduct from './../../utils/GetApi';

export const onOplaying=()=>{
    return {
        type:types.ON_PLAYING_MUSIC
    }
}

export const GET_ALL_MUSIC=()=>{
   return (dispatch)=>{
    getApiProduct('','GET',null).then(res=>{
            dispatch({
                type:types.GET_ALL_MUSIC,
                data:res.data
            })
        })
   }

}

export const END_PLAY=()=>{
    return {
        type:types.endPlay
    }
}

export const onPlayingUrl=(data)=>{
    return {
        type:types.ON_PLAYING_URL,
        data
    }
}


export const endPlay=()=>{
    return{
        type:types.endPlay
    }
}


export const ADD_LIST_HISTORY=(data)=>{
    return {
        type:types.ADD_LIST_HISTIRY,
        data
    }
}