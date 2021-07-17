import * as types from './../../TopMusic/constant/topMusic'

var initialState={
    dataMusic:[],
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.GET_ALL_TOP:
            state={
                ...state,
                dataMusic:actions.data
            }
            return state;
        
        default: return state;
    }
}

export default myReducer;