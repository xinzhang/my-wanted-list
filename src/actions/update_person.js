import * as types from './types';

export default function updatePerson(person) {  
  return dispatch => {
    dispatch(updatePersonSuccess(person));
    //dispatch(newToast(message))
  }
}

export function updatePersonSuccess(person) {
  return {
    type: types.ADD_PERSON,
    payload: person
  }
}
