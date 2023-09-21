import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchCityScreen from "./src/screens/SearchCityScreen/SearchCityScreen.js";
import Home from "./src/screens/Home/Home.js";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="SearchCityScreen" 
        component={SearchCityScreen}
        options={{
          headerShown: false
        }} 
        />
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} 
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
