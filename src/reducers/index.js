import {combineReducers} from 'redux';
import wantedPeople from './wantedReducer';

const rootReducer = combineReducers({
  wantedPeople //: wantedReducer
})

export default rootReducer;
