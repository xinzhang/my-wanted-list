import * as types from '../actions/types';


export default function wantedReducer (state=[], action) {
  console.log('actiontype ' + action.type);
  switch (action.type) {
    case types.GET_WANTED_LIST :
      return Object.assign([], state, action.payload);
    default:
      return state;
  }

}
