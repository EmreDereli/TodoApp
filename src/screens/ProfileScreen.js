import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/common/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import Input from '../components/common/Input';
import {useSelector} from 'react-redux';
import Layout from '../components/common/Layout';

export default function ProfileScreen({navigation}) {
  const user = useSelector(state => state.userReducer.user);
  return (
    <Layout style={{backgroundColor: 'white', justifyContent: 'space-between'}}>
      <View>
        <Input editable={false} value={user.name} />
        <Input editable={false} value={user.email} />
        <Input secureTextEntry editable={false} value={user.password} />
      </View>

      <Button
        title="Logout"
        onPress={async () => {
          await AsyncStorage.removeItem('user_id');

          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'MainScreen'}],
            }),
          );
        }}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
