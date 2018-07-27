import React from 'react';
import config from './config';
import axios from 'axios';

const serverRender = () => {
  return (
  axios.get(`${config.serverUrl}/api/users`)
  .then(resp => {
    const initialData = resp.data.data || [];
    //console.log(initialData);
    return initialData;
  })
  .catch(err => {
    //console.log(err);
    return err;
  })
  );
}


export default serverRender;
