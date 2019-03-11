import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import friendsReducer from './friendsReducer';
import addRecordReducer from './addRecordReducer';
import tradesReducer from './tradesReducer';
import makeTradeReducer from './makeTradeReducer';
import communityReducer from './communityReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer,
    friends: friendsReducer,
    addRec: addRecordReducer,
    trades: tradesReducer,
    community: communityReducer,
    makeTrade: makeTradeReducer,
})

export default rootReducer;
// state to mini reducers is 1 to 1