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
} from "react-native";

const MainBody = (props) => {
  const { id, toyName, toyLine, faction, maxForAge } = props.dataLoad;

  const data = props.dataLoad;
  console.log(data);
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
    } else {
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
      <View style={styles.button}>
        <Button 
        onPress={() => navigation.navigate('Details', data)}
        title="Go to Details">
          <Text>Click here for Details</Text>
        </Button>
      </View>
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
});

export default MainBody;
