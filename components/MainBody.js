import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Form from "./Form"

const MainBody = (props) => {
  const { id, toyName, toyLine, faction, maxForAge } = props.dataLoad;

  const data = props.dataLoad;

  const navigation = useNavigation();
  //count the total number of toys
  const countTotal = props.dataLoad.length;
  //END: count the total number of toys

  //count the total number of toyLines in collection
  const returnToyLines = data.map((toyLineList) => {
    return toyLineList.toyLine;
  });
  const toyLines = returnToyLines.filter(function (element, index) {
    return returnToyLines.indexOf(element) == index;
  });
  var toyLinesSum = toyLines.length;
  //END: count the total number of toyLines in collection

  //count the total number in each faction in the collection
  var toyFactionSumGood = 0;
  var toyFactionSumEvil = 0;

  const returnFactions = data.map((toyFactionList) => {
    const factions = toyFactionList.faction;
    if (factions == "Good") {
      toyFactionSumGood = toyFactionSumGood + 1;
    } else if(factions == "Evil"){
      toyFactionSumEvil = toyFactionSumEvil + 1;
    }
  });
  //END: count the total number in each faction in the collection

  return (
    <View>
      <View style={styles.container}>
        <Text>Total Toys Collected: {countTotal} </Text>
        <Text>Total Toy Lines Collected: {toyLinesSum} </Text>
        <Text>Total Heroes: {toyFactionSumGood} </Text>
        <Text>Total Villains: {toyFactionSumEvil} </Text>
      </View>
      {/* <View style={styles.navContainer}> */}
      {/* <View
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#E6E6FA" : "#00FF00",
          },
          styles.button,
        ]}
      >
        <Button
          onPress={() => navigation.navigate("Details", data)}
          title='Details'
        ></Button>
      </View> */}
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#E6E6FA" : "lightblue",
          },
          styles.button,
        ]}
        onPress={() => navigation.navigate("Details", data)}
      >
        <Text style={{ color: "black", textAlign: "center" }}>Details</Text>
      </Pressable>
      <View>
        {/* <Button
            onPress={() => navigation.navigate("AddForm")}
            title='Add Toy'
          ></Button> */}
        <Text style={styles.container}>Add a New Toy</Text>
        <Form />
      </View>
    </View>
    // </View>
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
    alignSelf: "center",
  },
  // button: {
  //   borderColor: "black",
  //   borderWidth: 0.5,
  //   borderRadius: 25,
  //   borderStyle: "solid",
  //   backgroundColor: "orange",
  //   padding: 0,
  //   width: "75%",
  //   alignItems: "center",
  //   alignSelf: "center",
  // },
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
  button: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default MainBody;
