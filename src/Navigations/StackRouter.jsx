import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import React from 'react';

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
      
      <Stack.Screen
        name="AnimationPartone"
        component={AnimationPartone}
        options={{}}
      />
      <Stack.Screen
        name="AnimationPartTwo"
        component={AnimationPartTwo}
        options={() => {}}
      />
    </Stack.Navigator>
  );
};

export default StackRouter;

const styles = StyleSheet.create({});
