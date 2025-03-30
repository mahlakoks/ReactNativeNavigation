import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import About from "../screens/about";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    //<NavigationContainer>
      <Stack.Navigator
        initialRouteName="About"
        screenOptions={{
          headerStyle: { backgroundColor: "lightgreen" },
          headerTintColor: "white",
          height:20,
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitle: "About GameZone",
          }}
        />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}
