import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import TodoItem from './TodoItem';

export default function TodoList({todos}) {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          id={item.id}
          title={item.title}
          description={item.description}
          isDone={item.isDone}
          date={item.createdAt}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
