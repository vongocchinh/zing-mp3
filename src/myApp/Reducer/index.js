import {combineReducers} from 'redux';
import Footer from './Footer/Footer';
import ItemVN from './ItemVN/ItemVN';
import TopMusicVN from './TopMusic/TopVN';
const myReducer=combineReducers({
    Footer,ItemVN,TopMusicVN
})

export default myReducer;
