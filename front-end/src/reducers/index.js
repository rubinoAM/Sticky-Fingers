import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';
import friendsReducer from './friendsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer,
    friends: friendsReducer,
})

export default rootReducer;
// state to mini reducers is 1 to 1