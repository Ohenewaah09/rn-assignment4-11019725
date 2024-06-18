import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './Components/Login';
import Home from './Components/Home';


const Stack = createStackNavigator();


    export default function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
         
          </Stack.Navigator>
          <View style={styles.container}>
          
      <StatusBar style="auto" />
    </View>
        </NavigationContainer>
      );
    }
    

    
 

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
