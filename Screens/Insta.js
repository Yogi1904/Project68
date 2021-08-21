import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Insta extends React.Component{
  render(){
    return(
     <View>
      <Text style = {styles.text}> Instagram </Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    flex: 1,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})