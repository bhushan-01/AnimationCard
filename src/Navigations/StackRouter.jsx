import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import React from 'react';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import AnimationPartone from '../Screens/AnimationTest/AnimationPartone';
import AnimationPartTwo from '../Screens/AnimationTest/AnimationPartTwo';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();

const StackRouter = () => {
  const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress } }) => {
      return {
        cardStyle: {
          opacity: progress
        }
      };
    }
  };
  return (
    <Stack.Navigator
      initialRouteName="AnimationPartone"
      screenOptions={{
        // cardStyle: { backgroundColor: '#000' },
        headerShown: false,
      }}

      headerMode='none'
    >
      <Stack.Screen name="Screen1" component={Screen1} options={{}} />
      <Stack.Screen name="Screen2" component={Screen2} options={{}} />
      <Stack.Screen
        name="AnimationPartone"
        component={AnimationPartone}
        options={{}}
      />
      <Stack.Screen
        name="AnimationPartTwo"
        component={AnimationPartTwo}
        options={() => options}
      />
    </Stack.Navigator>
  );
};

export default StackRouter;

const styles = StyleSheet.create({});
