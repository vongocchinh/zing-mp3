import * as type from './../constant/topVN';
import getApiProduct from './../../utils/GetApi';
export const GET_ITEM_ALL=(id)=>{
    return (dispatch)=>{
        getApiProduct('','GET',null).then(res=>{
            var data=res.data.songs.top100_VN;
            dispatch({
                type:type.GET_ITEM_ALL,
                data:data[id].songs
            })
        })
   }

}

export const GET_ITEM_ALL_AM=(id)=>{
    return (dispatch)=>{
        getApiProduct('','GET',null).then(res=>{
            var data=res.data.songs.top100_AM;
            dispatch({
                type:type.GET_ITEM_ALL,
                data:data[id].songs
            })
        })
   }

}
export const GET_ITEM_ALL_CA=(id)=>{
    return (dispatch)=>{
        getApiProduct('','GET',null).then(res=>{
            var data=res.data.songs.top100_CA;
            dispatch({
                type:type.GET_ITEM_ALL,
                data:data[id].songs
            })
        })
   }

}


export const GET_ITEM_ALL_KL=(id)=>{
    return (dispatch)=>{
        getApiProduct('','GET',null).then(res=>{
            var data=res.data.songs.top100_KL;
            dispatch({
                type:type.GET_ITEM_ALL,
                data:data[id].songs
            })
        })
   }

}


export const SetRankPlayListMusic=(data)=>{
    return {
        type:type.SetRankPlayListMusic,
        data
    }
}