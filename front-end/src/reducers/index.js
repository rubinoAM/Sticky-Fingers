import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import friendsReducer from './friendsReducer';
import addRecordReducer from './addRecordReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer,
    friends: friendsReducer,
    addRec: addRecordReducer,
})

export default rootReducer;
// state to mini reducers is 1 to 1