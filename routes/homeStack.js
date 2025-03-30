import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../styles/header";
import React from "react";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
   // <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "lightgreen" },
          headerTintColor: "white",
          height:20,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
           headerTitle: "GameZone", 
           // headerTitle: ()=><Header />, //
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            headerTitle: "Reviews",
          }}
        />
      </Stack.Navigator>
   // </NavigationContainer>
  );
}
