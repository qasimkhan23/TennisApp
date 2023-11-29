import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/login/Login";
import SignupScreen from "../src/screens/signup/Signup";
import SignupContinueScreen from "../src/screens/signupContinue/SignupContinue";
const AuthStack = createNativeStackNavigator();

const AuthStackScreens: FC<{}> = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen component={LoginScreen} name="LoginScreen" />
      <AuthStack.Screen component={SignupScreen} name="SignupScreen" />
      <AuthStack.Screen
        component={SignupContinueScreen}
        name="SignupContinueScreen"
      />
    </AuthStack.Navigator>
  );
};
export default AuthStackScreens;
