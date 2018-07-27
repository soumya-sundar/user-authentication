import { Api } from '../api/Api';
//import fetch from 'cross-fetch';

const storeInput = input => {
  return {
    type: 'STORE_INPUT',
    input
  }
}

const invalidState = (error) => {
  return { 
    type: 'INVALID_STATE',
    error
  }
}

export const validateInput = (input) => {
  return dispatch => {
    return Api(input)
    .then(response => {

    })
    .catch(error => {
      dispatch(invalidState(error));
    })
  }
}

export const registerInput = (username, password, email) => {
  return dispatch => {
    return Api(username, password, email)
    .then(response => {
      console.log('Success:', response)
    })
    .catch(error => {
      console.error('Error:', error)
    })
  }
}