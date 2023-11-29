import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import SignupScreen from "../src/screens/signup/Signup";
import ProfileScreen from "../src/screens/profile/Profile";
import EditProfileScreen from "../src/screens/editProfile/EditProfile";
import GameHistoryScreen from "../src/screens/gameHistory/GameHistory";
import MyFriendsScreen from "../src/screens/myFriends/MyFriends";
const ProfileStack = createNativeStackNavigator();

const ProfileStackScreens: FC<{}> = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen component={ProfileScreen} name="ProfileScreen" />
      <ProfileStack.Screen
        component={EditProfileScreen}
        name="EditProfileScreen"
      />
      <ProfileStack.Screen
        component={GameHistoryScreen}
        name="GameHistoryScreen"
      />
      <ProfileStack.Screen component={MyFriendsScreen} name="MyFriendsScreen" />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreens;
