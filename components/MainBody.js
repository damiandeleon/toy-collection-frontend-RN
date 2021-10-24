import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'


const MainBody = (props) => {
  const { id, toyName, toyLine, faction, maxForAge } = props.dataLoad;

  const data = props.dataLoad;

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
    if(factions == "Good"){
      toyFactionSumGood = toyFactionSumGood + 1;
    } else{
      toyFactionSumEvil = toyFactionSumEvil +1;
    }
  });
  //END: count the total number in each faction in the collection

  return (
    <View>
      {/* {props.dataLoad.map(toy => {
        return (
              // <Text style={styles.item} key={toy.id}>{toy.toyName}</Text>
         
        );
      })} */}
      <Text style={styles.item}>Total Toys Collected: {countTotal} </Text>
      <Text style={styles.item}>Total Toy Lines Collected: {toyLinesSum} </Text>
      <Text style={styles.item}>Total Heroes: {toyFactionSumGood} </Text>
      <Text style={styles.item}>Total Villains: {toyFactionSumEvil} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    // alignItems: "center",
  },
  item: {
    backgroundColor: "blanchedalmond",
    padding: 20,
    marginVertical: 8,
    textAlign: "center",
  },
  title: {
    fontSize: 25,
  },
});

export default MainBody
