import * as types from './types';
import newToast from './new_toast';

export default function addPerson(person) {
  const message = `You've just added ${person.name} to the Most Wanted List.`;
  return dispatch => {
    dispatch(addPersonSuccess(person));
    dispatch(newToast(message))
  }
}

export function addPersonSuccess(person) {
  return {
    type: types.ADD_PERSON,
    payload: person
  }
}
