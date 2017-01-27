import * as types from './types';
import newToast from './new_toast';

export default function deletePerson(person) {
  const message = `You've just captured ${person.name}. Go collect your reward!`;
  return dispatch => {
    dispatch(deletePersonSuccess(person));
    dispatch(newToast(message))
  }
}

export function deletePersonSuccess(person) {
  return {
    type: types.DELETE_PERSON,
    payload: person
  }
}
