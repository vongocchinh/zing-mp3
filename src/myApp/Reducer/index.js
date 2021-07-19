import {combineReducers} from 'redux';
import Footer from './Footer/Footer';
import ItemVN from './ItemVN/ItemVN';
import RanlOnplayMusic from './ItemVN/RankOnPlayMusic';
import TopMusicVN from './TopMusic/TopVN';
import History from './History/History';
import PlayList from './History/PlayList';

const myReducer=combineReducers({
    Footer,ItemVN,TopMusicVN,RanlOnplayMusic,History,PlayList
})

export default myReducer;
