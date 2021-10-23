
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Main from "./pages/Main";

export default function App() {
  const viewStyle = { ...styles.view, width: useWindowDimensions().width };
  return (
    <SafeAreaView style={viewStyle}>
      <View>
        <Main />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "dodgerblue",
    justifyContent: "center",
    padding: 16,
  },
});
