import * as type from './../constant/topMusic';
import getApiProduct from './../../utils/GetApi';
export const GET_ALL_TOP=()=>{
    return dispatch=>{
        getApiProduct('','GET',null).then(res=>{
            dispatch({
                type:type.GET_ALL_TOP,
                data:res.data
            })
        })
    }
}