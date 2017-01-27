import * as types from '../actions/types';


export default function toastReducer (state=[], action) {

  switch (action.type) {
    case types.NEW_TOAST :
      return action.payload;

    case types.CLEAR_TOAST:
      return '';

    default:
      return state;
  }

}
