import * as types from './../../Footer/contanst/Footer'

// var data=JSON.parse(localStorage.getItem('url'));
// var initialState=data?data:{}
var initialState={
    playing:false,
    dataMusic:[],
    url:{}
}

var myReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case types.ON_PLAYING_MUSIC:
            state={
                ...state,
                playing:!state.playing
            };
            localStorage.setItem('url',JSON.stringify(state));
            return state;
            case types.endPlay:
                state={
                    ...state,
                    playing:false
                };
                localStorage.setItem('url',JSON.stringify(state));
                return state;
        case types.GET_ALL_MUSIC:
            state={
                ...state,
                dataMusic:actions.data
            }
            localStorage.setItem('url',JSON.stringify(state));
            return state;
        case types.ON_PLAYING_URL:
            state={
                ...state,
                playing:true,
                url:actions.data
            }
            localStorage.setItem('url',JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default myReducer;