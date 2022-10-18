import {combineReducers} from 'redux';
import UserReducer from './userReducer';
import bidsReducer from './bidsReducer';

export default combineReducers({user: UserReducer, bids: bidsReducer});
