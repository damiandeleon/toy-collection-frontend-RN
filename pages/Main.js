import React from 'react'
import { Text, View } from 'react-native'
import Banner from '../components/Banner';
import Header from '../components/Header'

function Main() {

    const date = new Date;
    const year = date.getFullYear();
    const footerInfo = "©️ " + year + " - No rights reserved!"
    return (
      <View>
        <Header />
        <Text>This is the main page</Text>
        <Banner text={footerInfo}/>
      </View>
    );
}

export default Main
