import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Checkbox from '../common/Checkbox';
import axios from 'axios';
import Fonts from '../../styles/Fonts';
import Colors from '../../styles/Colors';
import {getFormattedDate} from '../../helpers/DateHelper';
import {deleteTodoById} from '../../api/todos';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../redux/actions/todo/TodoAction';

export default function TodoItem({id, title, description, date, isDone}) {
  const dispatch = useDispatch();
  const updateTodo = async val => {
    const res = await axios.put(
      'https://60a513a5c0c1fd00175f3092.mockapi.io/api/v1/todos/1',
      {isDone: val},
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
        <Text style={styles.dateStyle}>{getFormattedDate(date)}</Text>
      </View>
      <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
        <Checkbox onChanged={val => updateTodo(val)} value={isDone} />
        <TouchableOpacity
          onPress={async () => {
            const response = await deleteTodoById(id);
            dispatch(deleteTodo({id}));
          }}>
          <Icons name="delete" size={20} color={Colors.Warning} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 6,
  },
  titleStyle: {
    fontSize: 16,
    margin: 5,
    fontFamily: Fonts.SemiBold,
    // textDecorationLine: 'line-through',
    // textDecorationColor: Colors.Primary,
    // textDecorationStyle: 'solid',
  },
  descriptionStyle: {
    fontSize: 14,
    color: '#e5e5e5',
    margin: 5,
    fontFamily: Fonts.Regular,
  },
  dateStyle: {
    fontSize: 10,
    color: '#e5e5e5',
    margin: 5,
  },
});
