import React from 'react';
import {ScrollView,StyleSheet,Text,View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

// 1) Set up Redux
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

// 2) Screens
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';

// 3) navigation

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const App = () => {
 
  return (
    <Provider store={store}>
      <NavigationContainer>
        
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
              headerShown:false,
              }
            }/>
            <Stack.Screen name="MapScreen" component={MapScreen} options={{
              headerShown:false,
              }
            }/>
          </Stack.Navigator>
          {/* <HomeScreen/> */}
        
      </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
