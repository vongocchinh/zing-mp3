import * as type from '../constant/constant';


export const ADD_PLAY_LIST=(data)=>{
    return{
        type:type.ADD_PLAY_LIST,
        data
    }
}


export const  ADD_LIST_HISTORY=(data)=>{
    return {
        type:type.DD_LIST_HISTORY,
        data
    }
}

export const DELETE_HISTORY=()=>{
    return {
        type:type.DELETE_ALL_HISTORY
    }
}


export const DELETE_LIST=()=>{
    return {
        type:type.DELETE_ALL_PLAY_LIST
    }
}