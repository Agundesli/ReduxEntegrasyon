import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProvider from "./context/provider";

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Tab = createBottomTabNavigator();

const Router = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default Router;