import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Loader from './Loader';
import {useSelector} from 'react-redux';

export default function Wrapper({children}) {
  const loading = useSelector(state => state.todoReducer.loading);
  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}

const styles = StyleSheet.create({});
