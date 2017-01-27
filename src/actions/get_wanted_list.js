import * as types from './types';
import axios from 'axios';
import wantedApi from '../api/wantedApi';

export default function getWantedList() {

  // return dispatch => {
  //   return wantedApi.getAllWanted().then( wanted => {
  //     dispatch(getWantedListSuccess(wanted));
  //   }).catch(error => {
  //     throw(error);
  //   })
  // }

  return dispatch => {
    axios.get('../wanted_list.json')
      .then(res => {
        const people = res.data.map(person => {
          person.note = 'none';
          return person;
        });
        dispatch(getWantedListSuccess(people));
      })
  }

}

export function getWantedListSuccess(people) {
  return {
    type: types.GET_WANTED_LIST,
    payload: people
  };

}
