import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import PopularMovieScreen from './screens/Popular';
import RecommendedMovieScreen from './screens/Recommended';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name = 'Recommended Movies' component = {RecommendedMovieScreen} />
      <Tab.Screen name = 'Popular Movies' component = {PopularMovieScreen} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
const StackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name = 'Home' component = {HomeScreen} />
      <Stack.Screen name = 'Dashboard' component = {BottomTab} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
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
