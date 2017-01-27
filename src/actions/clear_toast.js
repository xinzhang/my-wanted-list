import { CLEAR_TOAST } from './types';

export default function clearToast(message) {
  return dispatch => {
    dispatch(clearToastAsync(message));
  }
}

function clearToastAsync(message){
  return {
    type: CLEAR_TOAST,
    payload: null
  };
}
