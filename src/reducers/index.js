import {combineReducers} from 'redux';
import wantedPeople from './wantedReducer';
import toast from './toastReducer';

const rootReducer = combineReducers({
  wantedPeople, //: wantedReducer
  toast
});

export default rootReducer;
