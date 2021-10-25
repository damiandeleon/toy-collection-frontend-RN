import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Banner from '../components/Banner';
import Header from '../components/Header'
import MainBody from '../components/MainBody';
import Details from '../components/Details';

function Main() {

      const data = [
        {
          id: "1",
          toyName: "He-Man",
          toyLine: "Masters of the Universe",
          faction: "Good",
          maxForAge: 8,
        },
        {
          id: "2",
          toyName: "Skeletor",
          toyLine: "Masters of the Universe",
          faction: "Evil",
          maxForAge: 8,
        },
        {
          id: "3",
          toyName: "Optimus Prime",
          toyLine: "Tranformers",
          faction: "Good",
          maxForAge: 8,
        },
        {
          id: "4",
          toyName: "Megatron",
          toyLine: "Tranformers",
          faction: "Evil",
          maxForAge: 8,
        },
        {
          id: "5",
          toyName: "Starscream",
          toyLine: "Tranformers",
          faction: "Evil",
          maxForAge: 8,
        },
        {
          id: "6",
          toyName: "Grimlock",
          toyLine: "Tranformers",
          faction: "Good",
          maxForAge: 8,
        },
      ];

      const renderToys = () => {
        data.map(item => {

        })
      }

    const date = new Date;
    const year = date.getFullYear();
    const footerInfo = "©️ " + year + " - No rights reserved!"
    return (
      <View style={styles.mainView}>
        <Header />
        <MainBody 
        dataLoad = {data}
        />
        <Details 
        dataLoad = {data}/>
        <Banner style={styles.footer} text={footerInfo} />
      </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
    alignItems: "center",
    },
    footer: {
        position: "absolute",
        bottom: 0,

    }

})

export default Main
