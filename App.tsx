import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackRouter from './src/Navigations/StackRouter';


const App = () => {
  return (
    
    <NavigationContainer>
     <StackRouter/>
    </NavigationContainer>
  );
}

export default App;
