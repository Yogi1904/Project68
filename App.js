import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FB from "./Screens/FB";
import Insta from "./Screens/Insta";

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen: FB},
  Instagram: {screen: Insta}
});

const AppContainer = createAppContainer(TabNavigator);