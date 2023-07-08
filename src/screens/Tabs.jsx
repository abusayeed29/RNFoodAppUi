import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Cart from './Cart';
import Home from './Home';
import Profile from './Profile';
import Searchs from './Searchs';

import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../utils/Colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown:false
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.btnFocused}>
                <Entypo name="home" size={24} color="white" />
              </View>
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.btnFocused}>
                <AntDesign name="search1" size={24} color="white" />
              </View>
            ) : (
              <AntDesign name="search1" size={24} color="grey" />
            ),
        }}
        name="Search"
        component={Searchs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.btnFocused}>
                <Feather name="shopping-cart" size={24} color="white" />
              </View>
            ) : (
              <Feather name="shopping-cart" size={24} color="grey" />
            ),
        }}
        name="Cart"
        component={Cart} 
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.btnFocused}>
                <Ionicons name="person-outline" size={24} color="white" />
              </View>
            ) : (
              <Ionicons name="person-outline" size={24} color="grey" />
            ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  btnFocused: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
