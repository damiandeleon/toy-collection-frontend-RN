import React from "react";
import { Button, Text, View } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";

function AddForm({ navigation }) {
  return (
    <View>
      <Header />
      <Text>I am the Add Form screen!</Text>
      <Button
        title='go to the main page'
        onPress={() => {
          navigation.navigate("Main");
        }}
      ></Button>
      <Form />
    </View>
  );
}

export default AddForm;
