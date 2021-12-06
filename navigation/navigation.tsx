import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Home, Create} from "../screens";

const Tab = createBottomTabNavigator();

export function Navigation() {

    return (
      <NavigationContainer>
          <Tab.Navigator initialRouteName="Home"
            screenOptions={({route}:any) => ({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })}>
              <Tab.Screen name='Home' component={Home}/>
              <Tab.Screen name='Create' component={Create}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
}

const screenOptions = (route: any, color: any) => {
    let iconName: any;

    switch (route.name){
        case 'Home':
            iconName = 'list';
            break;
        case 'Create':
            iconName = 'plus';
            break;
        default:
            break;
    }

    return <TabBarIcon name={iconName} color={color} />;
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome5>['name'];
    color: string;
}) {
    return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}
