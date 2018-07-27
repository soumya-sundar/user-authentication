import config from '../../config';
import axios from 'axios';


export const Api = (username, password, email) => {
  let data = {'username': username,'password': password,'email': email};
  return serverRender;
  return (
    axios.get(`${config.serverUrl}/api/users`)
    .then(res => res.json())
    .catch(error => Promise.reject(error))
    );
}

