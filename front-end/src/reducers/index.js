import { combineReducers } from 'redux';
import authReducer from './authReducer';
import collectionReducer from './collectionReducer';



const rootReducer = combineReducers({
    auth: authReducer,
    coll: collectionReducer
})


export default rootReducer;
