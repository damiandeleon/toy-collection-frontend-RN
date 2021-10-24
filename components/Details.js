import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

function Details(props) {
  const { id, toyName, toyLine, faction, maxForAge } = props.dataLoad;

//   ____________________returns the names of the toys_______________

  const returnToyNames = props.dataLoad.map((ids) => {

    console.log(ids.toyName);
  });
  
//   __________________end returns the names of the toys ______________;
  return (
    <View style={styles.container}>
      {props.dataLoad.map(toy => {
        return (
              <Text style={styles.item} key={toy.id}>{toy.toyName}</Text>
        );
      })}
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

export default Details
