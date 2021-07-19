import * as types from './../../History/constant/constant';


var initialState=JSON.parse(localStorage.getItem('history'))?JSON.parse(localStorage.getItem('history')):[];

var myReducer=(state=initialState,actions)=>{ 
    switch (actions.type) {
       
        case types.DD_LIST_HISTORY:
            if(actions.data!==undefined){
                state.push(actions.data);
            }
            localStorage.setItem('history',JSON.stringify(state));
            return state;
        case types.DELETE_ALL_HISTORY:
            state=[];
            localStorage.setItem('history',JSON.stringify(state));
            return state;
        default:
            return state;
    }
}


export default myReducer;