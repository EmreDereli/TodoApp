import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodosScreen from '../screens/TodosScreen';
import AddTodoScreen from '../screens/AddTodoScreen';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodosScreen" component={TodosScreen} />
        <Stack.Screen name="AddTodoScreen" component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
