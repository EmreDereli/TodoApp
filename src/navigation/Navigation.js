import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodosScreen from '../screens/TodosScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import SplashScreen from '../screens/SplashScreen';
import {TouchableOpacity, Alert} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TodosScreen"
          component={TodosScreen}
          options={({navigation}) => ({
            title: 'My Tasks',
            headerRight: () => (
              <TouchableOpacity
                style={{
                  margin: 10,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('ProfileScreen')}>
                <Icons name="user" size={24} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'My Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
