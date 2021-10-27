
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main'
import AddForm from './pages/AddForm';
import Details from './components/Details';
import MainBody from './components/MainBody';

const Stack = createNativeStackNavigator();


export default function App() {
  const viewStyle = { ...styles.view, width: useWindowDimensions().width };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ title: "Welcome to Your Toy Collection!" }}
        />
        <Stack.Screen
          name='MainBody'
          component={MainBody}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{ title: "Toy Collection Details!" }}
        />
        <Stack.Screen
          name='AddForm'
          component={AddForm}
          options={{ title: "I am your add form screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    padding: 16,
  },
});
