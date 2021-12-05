import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Create} from "../screens";

const Tab = createBottomTabNavigator();

export function Navigation() {

    return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
              <Tab.Screen name='Home' component={Home} options={{tabBarIcon: <TabBarIcon name="home" color="#f54284"/> }}/>
              <Tab.Screen name='Create' component={Create} options={{tabBarIcon: <TabBarIcon name="info" color="#f54284"/> }}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
}

