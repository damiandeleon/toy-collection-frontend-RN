import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import api from "../routers/api/api";

function Details(props) {
  function deleteToy(id) {
    console.log("I am deleting the toy");
    api
      .deleteToy(id)
      // .then(navigation.navigate("Main"))
      .then(api.getToys().catch((err) => console.log(err)));
  }

  const data = props.route.params;
  const { id, toyName, toyLine, faction, maxForAge } = data;
  const navigation = useNavigation();

  return (
   
    <><View style={styles.navContainer}>
      <View style={styles.navButton}>
        <Button
          onPress={() => navigation.navigate("Main")}
          title='Home'
        ></Button>
      </View>
      <View style={styles.navButton}>
        <Button
          onPress={() => navigation.navigate("AddForm")}
          title='Add Toy'
        ></Button>
      </View>
    </View>
      <ScrollView>
        <View>
          {data.map((toy) => {
            if (toy.faction == "Good") {
              return (
                <View style={styles.good} key={toy.id}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {toy.toyName}
                  </Text>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    {toy.toyLine}
                  </Text>
                  <Text>Good Guy </Text>
                  <Text>Ages {toy.maxForAge} and up</Text>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? "#E6E6FA" : "#CD5C5C",
                      },
                      styles.button,
                    ]}
                  >
                    <Text
                      // add ".bind" after delete toy function to prevent the onPress from launching upon page refresh
                      onPress={() => {deleteToy(toy.id)}}
                      style={{ color: "white" }}
                    >
                      Delete Toy
                    </Text>
                  </Pressable>
                </View>
              );
            } else if (toy.faction == "Evil") {
              return (
                <View style={styles.evil} key={toy.id}>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    {toy.toyName}
                  </Text>
                  <Text style={{ fontWeight: "bold", fontSize: 13 }}>
                    {toy.toyLine}
                  </Text>
                  <Text>Bad Guy </Text>
                  <Text>Ages {toy.maxForAge} and up</Text>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? "#E6E6FA" : "#CD5C5C",
                      },
                      styles.button,
                    ]}
                  >
                    <Text
                      // add ".bind" after delete toy function to prevent the onPress from launching upon page refresh
                      onPress={() => {
                        deleteToy(toy.id);
                      }}
                      style={{ color: "white" }}
                    >
                      Delete Toy
                    </Text>
                  </Pressable>
                </View>
              );
            }
          })}
        </View>
      </ScrollView></>
  );
}

const styles = StyleSheet.create({
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
  good: {
    backgroundColor: "#F0E68C",
    padding: 10,
    marginVertical: 2,
    alignItems: "center",
    flexDirection: "column",
  },
  evil: {
    backgroundColor: "#7B68EE",
    padding: 10,
    marginVertical: 2,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
});

export default Details;
