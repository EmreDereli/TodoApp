import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Colors from '../../styles/Colors';

export default function Checkbox({value, onChanged}) {
  const [isSelected, setIsSelected] = useState(value);
  return (
    <TouchableOpacity
      onPress={() => {
        onChanged && onChanged(!isSelected);
        setIsSelected(!isSelected);
      }}>
      <Icons
        name={isSelected ? 'checkcircle' : 'checkcircleo'}
        size={25}
        color={isSelected ? Colors.Done : Colors.Black}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
