import * as types from './../../TopMusic/constant/topMusic'

var initialState={
    dataMusic:JSON.parse(localStorage.getItem('topVN'))?JSON.parse(localStorage.getItem('topVN')):[],
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.GET_ALL_TOP:
            state={
                ...state,
                dataMusic:actions.data
            }
            localStorage.setItem('topVN',JSON.stringify(state));
            return state;
        
        default: return state;
    }
}

export default myReducer;