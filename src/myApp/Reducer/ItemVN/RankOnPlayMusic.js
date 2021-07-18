import * as types from './../../TopItem/constant/topVN'


var initialState={
    data:[],
    rankOnPlay:false
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SetRankPlayListMusic:
            if(actions.data.length> 0){
                state={
                    data:actions.data,
                    rankOnPlay:true
                }
            }
            return state;
        case types.ResetRankPlayListMusic:
            state={
                data:[],
                rankOnPlay:false
            }
                return state;
        
        default: return state;
    }
}

export default myReducer;