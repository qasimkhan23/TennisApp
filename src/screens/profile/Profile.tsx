import React, { useEffect, useState } from "react";
import {
  Dimensions,
  // Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import Dots from "../../../assets/dots.svg";
import styles from "./Styles";

import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg, Image } from "react-native-svg";
import { ZeplinHeight, ZeplinWidth } from "../../../helpers/ZeplineHelper";
const OS = Platform.OS;
const CircleLength = 500;
const Radius = CircleLength / (2 * Math.PI);

const Wrapper = ({ children, style = {} }) => {
  const [childHeight, setChildHeight] = useState<any>(500);
  const [screenHeight, setScreenHight] = useState<any>(
    Dimensions.get("window").height - 200
  );

  const WrapperView = childHeight > screenHeight ? ScrollView : View;
  return (
    <WrapperView style={{ ...style }}>
      <View>{children}</View>
    </WrapperView>
  );
};

const ProfileScreen = ({ navigation }: any) => {
  const circularProgress = useSharedValue(1);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CircleLength * circularProgress.value,
  }));

  useEffect(() => {
    circularProgress.value = withTiming(0.75, { duration: 3000 });
  }, []);

  let s = {
    height: "50%",
  };

  return (
    <View style={[styles.container]}>
      <View>
        <ImageBackground
          imageStyle={{ borderRadius: 20 }}
          style={{
            height: 196,
            width: "100%",
            marginTop: "10%",
          }}
          source={require("../../../assets/profileBG.png")}
        >
          <Svg
            style={{
              marginTop: "20%",
              // backgroundColor: "red",
              height: "100%",
              width: "100%",
            }}
          >
            <AnimatedCircle
              cx={"50%"}
              cy={"51%"}
              r={Radius}
              strokeWidth={10}
              stroke="#D5FF45"
              strokeDasharray={CircleLength}
              animatedProps={animatedProps}
              strokeLinecap="round"
            />
            <Image
              x="15%"
              y="16%"
              width="70%"
              height="70%"
              href={require("../../../assets/profileImage.png")}
            />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: OS == "android" ? "8%" : "7.5%",
              }}
            >
              {/* <Image
                style={{
                  height: "93%",
                  width: "36%",
                  borderRadius: 134,
                }}
                source={require("../../../assets/profileImage.png")}
              /> */}

              {/* <Image
                x="5%"
                y="5%"
                width="100%"
                height="100%"
                // preserveAspectRatio="xMidYMid slice"
                // opacity="0.5"
                href={require("../../../assets/profileImage.png")}
                // clipPath="url(#clip)"
              /> */}
            </View>
          </Svg>
        </ImageBackground>
      </View>

      <Wrapper style={{ zIndex: -1 }}>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.nameText}>
            Dana Miron
          </Text>
          <View style={styles.despContainer}>
            <Text numberOfLines={1} style={styles.despText}>
              Rishon LeZion |
            </Text>
            <Text numberOfLines={1} style={styles.expLevel}>
              Fearless
            </Text>
          </View>
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            style={styles.historyBtn}
            onPress={() => {
              navigation.navigate("GameHistoryScreen");
            }}
          >
            <Text style={styles.historyBtnText}>Game History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.friendsBtn}
            onPress={() => {
              navigation.navigate("MyFriendsScreen");
            }}
          >
            <Text style={styles.friendsBtnText}> My Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfileScreen");
            }}
          >
            <Dots />
          </TouchableOpacity>
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.bioText} numberOfLines={2}>
            24 years old | I like to play tennis | Evenings only
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          <ImageBackground
            style={styles.card}
            imageStyle={{ borderRadius: 12 }}
            source={require("../../../assets/card_1.png")}
          >
            <Text style={styles.cardText}> Dana Reznikov</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card}
            imageStyle={{ borderRadius: 12 }}
            source={require("../../../assets/card_2.png")}
          >
            <Text style={styles.cardText}> Lia Slomi</Text>
          </ImageBackground>
          <ImageBackground
            style={styles.card}
            imageStyle={{ borderRadius: 12 }}
            source={require("../../../assets/card_3.png")}
          >
            <Text style={styles.cardText}> Yossi Brossi</Text>
          </ImageBackground>
        </View>
      </Wrapper>
    </View>
  );
};

export default ProfileScreen;
