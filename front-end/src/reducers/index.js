import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import friendsReducer from './friendsReducer';
import addRecordReducer from './addRecordReducer';
import tradesReducer from './tradesReducer';
import makeTradeReducer from './makeTradeReducer';
import communityReducer from './communityReducer';
import friendsInfoReducer from './friendsInfoReducer';
import avatarReducer from './avatarReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer,
    friends: friendsReducer,
    addRec: addRecordReducer,
    trades: tradesReducer,
    community: communityReducer,
    makeTrade: makeTradeReducer,
    friendsInfo: friendsInfoReducer,
    avatar: avatarReducer,
})

export default rootReducer;