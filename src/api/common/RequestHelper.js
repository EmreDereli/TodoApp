import Axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const header = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const post = async (url, parameters) => {
  let res;
  const token1 = await AsyncStorage.getItem('pakodemy_token');
  if (token1 !== null) {
    header.Authorization = `Bearer ${token1}`;
  }

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
  const token1 = await AsyncStorage.getItem('pakodemy_token');
  if (token1 !== null) {
    header.Authorization = `Bearer ${token1}`;
  }

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

  const token1 = await AsyncStorage.getItem('pakodemy_token');
  if (token1 !== null) {
    header.Authorization = `Bearer ${token1}`;
  }
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token1}`,
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

  const token1 = await AsyncStorage.getItem('pakodemy_token');
  if (token1 !== null) {
    header.Authorization = `Bearer ${token1}`;
  }
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token1}`,
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
