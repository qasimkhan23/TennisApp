import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Dots from "../../../assets/dots.svg";
import styles from "./Styles";

import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const CircleLength = 500;
const Radius = CircleLength / (2 * Math.PI);

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
            marginTop: 75,
          }}
          source={require("../../../assets/profileBG.png")}
        >
          <Svg style={{ marginTop: 80 }}>
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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "8%",
              }}
            >
              <Image
                style={{ height: 140, width: 140, borderRadius: 134 }}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
          </Svg>
        </ImageBackground>
      </View>

      <ScrollView style={{ zIndex: -1 }}>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>Dana Miron</Text>
          <View style={styles.despContainer}>
            <Text style={styles.despText}>Rishon LeZion | </Text>
            <Text style={styles.expLevel}> Fearless</Text>
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
          <Text style={styles.bioText}>
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
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
