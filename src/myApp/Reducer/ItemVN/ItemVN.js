import * as types from './../../TopItem/constant/topVN'


var initialState={
    data:[]
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.GET_ITEM_ALL:
           state={
               data:actions.data
           }
            return state;
        
        default: return state;
    }
}

export default myReducer;