import * as types from '../actions/types';


export default function wantedReducer (state=[], action) {
  console.log('actiontype ' + action.type);
  switch (action.type) {
    case types.GET_WANTED_LIST :
      return Object.assign([], state, action.payload);

    case types.DELETE_PERSON:
      return state.filter(person => person.name !== action.payload.name);

    case types.ADD_PERSON:
      return [action.payload, ...state];

    case types.UPDATE_PERSON:
      return state.map( person => {
        if (person.name == action.payload.name) {
          return action.payload;
        }
        return person;
      });

    default:
      return state;
  }

}
