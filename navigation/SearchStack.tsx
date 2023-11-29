import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import SignupScreen from "../src/screens/signup/Signup";
import ProfileScreen from "../src/screens/profile/Profile";
import EditProfileScreen from "../src/screens/editProfile/EditProfile";
import GameHistoryScreen from "../src/screens/gameHistory/GameHistory";
import MyFriendsScreen from "../src/screens/myFriends/MyFriends";
import SearchScreen from "../src/screens/search/Search";
import ProfileDetailScreen from "../src/screens/profileDetail/ProfileDetail";
const SearchStack = createNativeStackNavigator();

const SearchStackScreens: FC<{}> = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen component={SearchScreen} name="SearchScreen" />
      <SearchStack.Screen
        component={ProfileDetailScreen}
        name="ProfileDetailScreen"
      />
    </SearchStack.Navigator>
  );
};
export default SearchStackScreens;
