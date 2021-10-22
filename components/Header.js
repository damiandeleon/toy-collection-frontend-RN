import React from 'react'
import { Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <Text>
            This is the Header
        </Text>
    )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Header
