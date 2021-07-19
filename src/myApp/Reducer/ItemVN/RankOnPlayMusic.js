import * as types from './../../TopItem/constant/topVN'


var initialState={
    data:[],
    rankOnPlay:false,
    category:null
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SetRankPlayListMusic:
            if(actions.data.arrs.length> 0){
                state={
                    data:actions.data.arrs,
                    rankOnPlay:true,
                    category:actions.data.id
                }
            }
            return state;
        case types.ResetRankPlayListMusic:
            state={
                data:[],
                rankOnPlay:false,
                category:null
            }
                return state;
        
        default: return state;
    }
}

export default myReducer;