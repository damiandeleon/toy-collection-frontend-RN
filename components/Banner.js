import React from 'react'
import { Text, StyleSheet } from 'react-native'

function Banner({text}) {
    return (
        <Text>{text}</Text>
    )
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: "darkslateblue",
        height: 64,
        justifyContent: "center",
        padding: 20,
        color: "white",
        fontSize: 20,
        textAlign: "center",
    }
})

export default Banner
