import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
import Home from './Components/Home';


const Stack = createStackNavigator();


    export default function App() {
      return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
         
          </Stack.Navigator>
          <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
        </NavigationContainer>
      );
    }

    
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
