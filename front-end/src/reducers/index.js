import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import friendsReducer from './friendsReducer';
import addRecordReducer from './addRecordReducer';
import tradesReducer from './tradesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer,
    friends: friendsReducer,
    addRec: addRecordReducer,
    trades: tradesReducer,
})

export default rootReducer;
// state to mini reducers is 1 to 1