import React, { FC, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomStackScreens: FC<{}> = ({ navigation }: any) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      {/* <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveHomeIcon /> : <InactiveHomeIcon />;
          },
        }}
        component={HomeStackScreens}
        name="Home"
      /> */}
    </BottomTab.Navigator>
  );
};
export default BottomStackScreens;
