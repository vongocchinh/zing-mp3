import {combineReducers} from 'redux';
import Footer from './Footer/Footer';
import ItemVN from './ItemVN/ItemVN';
import RanlOnplayMusic from './ItemVN/RankOnPlayMusic';
import TopMusicVN from './TopMusic/TopVN';

const myReducer=combineReducers({
    Footer,ItemVN,TopMusicVN,RanlOnplayMusic
})

export default myReducer;
