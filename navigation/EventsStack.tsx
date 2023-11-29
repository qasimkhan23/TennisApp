import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import SignupScreen from "../src/screens/signup/Signup";
import ProfileScreen from "../src/screens/profile/Profile";
import EditProfileScreen from "../src/screens/editProfile/EditProfile";
import GameHistoryScreen from "../src/screens/gameHistory/GameHistory";
import MyFriendsScreen from "../src/screens/myFriends/MyFriends";
import EventsScreen from "../src/screens/events/Events";
import NewEventScreen from "../src/screens/newEvent/NewEvent";
const EventsStack = createNativeStackNavigator();

const EventsStackScreens: FC<{}> = () => {
  return (
    <EventsStack.Navigator screenOptions={{ headerShown: false }}>
      <EventsStack.Screen component={EventsScreen} name="EventsScreen" />
      <EventsStack.Screen component={NewEventScreen} name="NewEventScreen" />
    </EventsStack.Navigator>
  );
};
export default EventsStackScreens;
