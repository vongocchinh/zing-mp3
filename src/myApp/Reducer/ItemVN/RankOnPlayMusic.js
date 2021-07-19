import * as types from './../../TopItem/constant/topVN'


var initialState={
    data:JSON.parse(localStorage.getItem('dataRank'))?JSON.parse(localStorage.getItem('dataRank')):[],
    rankOnPlay:false,
    category:localStorage.getItem('categoryStore')?localStorage.getItem('categoryStore'):null
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.SetRankPlayListMusic:
            if(actions.data.arrs.length> 0){
                state={
                    data:actions.data.arrs,
                    rankOnPlay:true,
                    category:actions.data.idNew
                }
                localStorage.setItem('categoryStore',state.category);
                localStorage.setItem('dataRank',JSON.stringify(state.data));   
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