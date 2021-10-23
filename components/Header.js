import React from "react";
import { Text, StyleSheet, useWindowDimensions } from "react-native";

// const viewStyle = { width: useWindowDimensions().width};

function Header() {
  return <Text style={styles.container}>Welcome to your toy collection</Text>;
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "lightgray",
    textAlign: "center",
  },
});

export default Header;
