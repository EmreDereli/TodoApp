import Axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const header = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const post = async (url, parameters) => {
  let res;

  await Axios.post(url, parameters, {
    headers: header,
  })
    .then(response => {
      res = response;
    })
    .catch(err => {
      res = err.response;
    });

  return res;
};

export const put = async (url, parameters) => {
  let res;

  await Axios.put(url, parameters, {
    headers: header,
  })
    .then(response => {
      res = response;
    })
    .catch(err => {
      res = err.response;
    });

  return res;
};

export const get = async url => {
  let res;

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  await Axios.get(url, {
    headers,
  })
    .then(response => {
      res = response;
    })
    .catch(err => {
      res = err.response;
    });

  return res;
};

export const deleteById = async url => {
  let res;

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  await Axios.delete(url, {
    headers,
  })
    .then(response => {
      res = response;
    })
    .catch(err => {
      res = err.response;
    });

  return res;
};
