import React, { FC, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStackScreens from "./ProfileStack";
import ActiveProfile from "../assets/ActiveProfile.svg";
import InactiveProfile from "../assets/InactiveProfile.svg";
import ActiveSearch from "../assets/ActiveSearch.svg";
import InactiveSearch from "../assets/InactiveSearch.svg";
import ActiveEvents from "../assets/ActiveEvents.svg";
import InactiveEvents from "../assets/InactiveEvents.svg";
import ExploreScreen from "../src/screens/explore/Explore";
import ActiveExplore from "../assets/ActiveExplore.svg";
import ActiveChat from "../assets/ActiveChat.svg";
import InactiveChat from "../assets/InactiveChat.svg";

import InactiveExplore from "../assets/InactiveExplore.svg";
import ChatStackScreens from "./ChatStack";
import EventsStackScreens from "./EventsStack";
import SearchStackScreens from "./SearchStack";
import ExploreStackScreens from "./ExploreStack";
const BottomTab = createBottomTabNavigator();

const BottomStackScreens: FC<{}> = ({ navigation }: any) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Profile"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
        },
      })}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveProfile /> : <InactiveProfile />;
          },
        }}
        component={ProfileStackScreens}
        name="Profile"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveSearch /> : <InactiveSearch />;
          },
        }}
        component={SearchStackScreens}
        name="Search"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveProfile /> : <InactiveProfile />;
          },
        }}
        component={EventsStackScreens}
        name="Events"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveExplore /> : <InactiveExplore />;
          },
        }}
        component={ExploreStackScreens}
        name="Explore"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveChat /> : <InactiveChat />;
          },
        }}
        component={ChatStackScreens}
        name="Chat"
      />
    </BottomTab.Navigator>
  );
};
export default BottomStackScreens;
