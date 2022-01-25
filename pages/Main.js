import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import Details from "../components/Details";
import AddForm from "./AddForm";
import api from "../routers/api/api";



function Main({ navigation }) {
  const loadEntries = () => {
    api.getToys().then((response) => {
      console.log(response);
      setData(response);
    });
  }; 
  const [data, setData] = useState([]);

 useEffect(() => {
    loadEntries()
 }, [])

  

  const date = new Date();
  const year = date.getFullYear();
  const footerInfo = "©️ " + year + " - No rights reserved!";
  return (
    <View style={styles.mainView}>
      <MainBody dataLoad={data} />
      
      {/* <Details dataLoad={data} /> */}
      <Banner style={styles.footer} text={footerInfo} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
  },
});

export default Main;
