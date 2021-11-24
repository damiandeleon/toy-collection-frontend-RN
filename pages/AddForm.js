import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";

function AddForm({ navigation}) {

  return (
    <View>
      <View style={styles.navContainer}>
        <View style={styles.navButton}>
          <Button
            onPress={() => navigation.navigate("Main")}
            title='Home'
          ></Button>
        </View>
      </View>

      <Form />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "blanchedalmond",
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  button: {
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 25,
    borderStyle: "solid",
    backgroundColor: "orange",
    padding: 10,
    width: "75%",
    alignItems: "center",
    alignSelf: "center",
  },
  navContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  navButton: {
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 25,
    borderStyle: "solid",
    backgroundColor: "orange",
    padding: 10,
    width: "40%",
    alignItems: "center",
    alignSelf: "center",
    margin: 5,
  },
});

export default AddForm;
