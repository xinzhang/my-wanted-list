import * as types from '../actions/types';


export default function wantedReducer (state=[], action) {
  console.log('actiontype ' + action.type);
  switch (action.type) {
    case types.GET_WANTED_LIST :
      return Object.assign([], state, action.payload);

    case types.DELETE_PERSON:
      return state.filter(person => person.name !== action.payload.name);

    default:
      return state;
  }

}
