import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

import Login from './screens/Login';
import Welcome from './screens/Welcome';
import SignUp from './screens/SignUp';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={styles.mainContainer}>
    //   <Welcome/>
    // </View>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


