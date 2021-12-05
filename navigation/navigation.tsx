import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import { Home, Create} from "../screens";

const Tab = createBottomTabNavigator();

export function Navigation() {

    return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name='Home' component={Home} />
              <Tab.Screen name='Create' component={Create} />
          </Tab.Navigator>
      </NavigationContainer>
    );
}

