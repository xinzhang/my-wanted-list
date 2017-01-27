class WantedApi {
  static getAllWanted() {
    return fetch('../wanted_list.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default WantedApi;
