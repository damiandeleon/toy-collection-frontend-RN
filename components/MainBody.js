import React from 'react'
import { FlatList, Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native'


const MainBody = (props) => {
  const { id, toyName, toyLine, faction, maxForAge } = props.dataLoad;

  const data = props.dataLoad;

  //count the number of items are in the following categorie:  toyLine and total number and byfaction

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

  //count the total number of factions in collection
    const returnFactions = data.map((toyFactionList) => {
    return toyFactionList.faction;
  });
  const toyFactions = returnFactions.filter(function (element, index) {
    return returnFactions.indexOf(element) == index;
  });
    console.log(toyFactions);
  var toyFactionSum = toyFactions.length;

  //END: count the total number of factions in collection

  //____________________returns the names of the toys_______________

  // const returnToyNames = props.dataLoad.map((ids) => {

  //   console.log(ids.toyName);
  // });
  //
  //__________________end returns the names of the toys ______________;

  return (
    <View>
      {/* {props.dataLoad.map(toy => {
        return (
              // <Text style={styles.item} key={toy.id}>{toy.toyName}</Text>
         
        );
      })} */}
      <Text style={styles.item}>Total Toys Collected: {countTotal} </Text>
      <Text style={styles.item}>Total Toy Lines Collected: {toyLinesSum} </Text>
      <Text style={styles.item}>Total Toy Lines Collected: {toyFactions[0]} </Text>
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
