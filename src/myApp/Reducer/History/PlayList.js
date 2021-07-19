import * as types from './../../History/constant/constant';


var initialState=JSON.parse(localStorage.getItem('play-list-heart'))?JSON.parse(localStorage.getItem('play-list-heart')):[];

var myReducer=(state=initialState,actions)=>{ 
    switch (actions.type) {
       
        case types.ADD_PLAY_LIST:
            if(actions.data!==undefined){
                state.push(actions.data);
            }
            localStorage.setItem('play-list-heart',JSON.stringify(state));
            return state;
        case types.DELETE_ALL_PLAY_LIST:
            state=[];
            localStorage.setItem('play-list-heart',JSON.stringify(state));
            return state;
        default:
            return state;
    }
}


export default myReducer;