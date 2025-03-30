import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import HomeStack from "./homeStack"; // Adjust the path as necessary
import AboutStack from "./aboutStack"; // Adjust the path as necessary

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#f0f0f0', // Background color of the drawer
          width: 240, // Width of the drawer
        }}
        drawerContentOptions={{
          activeTintColor: 'blue', // Color of the active item
          itemStyle: { marginVertical: 5 }, // Style for each item
        }}
      >
        <Drawer.Screen 
          name="GamingTest" 
          component={HomeStack}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} /> // Icon for Home
            ),
          }}
        />
        <Drawer.Screen 
          name="About" 
          component={AboutStack}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="information-circle-outline" size={24} color={color} /> // Icon for About
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
