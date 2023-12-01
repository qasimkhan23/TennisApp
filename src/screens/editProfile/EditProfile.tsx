import React, { useEffect } from "react";
import {
  Dimensions,
  // Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import styles from "./Styles";

import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg, Image } from "react-native-svg";
import Header from "../../components/header/Header";
import Wrapper from "../../components/wrapper/Wrapper";

const { width, height } = Dimensions.get("window");
const OS = Platform.OS;
console.log("height", height);
const CircleLength = OS == "android" ? height * 0.73 : height * 0.54;

const Radius = CircleLength / (2 * Math.PI);

const EditProfileScreen = ({ navigation }: any) => {
  const circularProgress = useSharedValue(1);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CircleLength * circularProgress.value,
  }));

  useEffect(() => {
    circularProgress.value = withTiming(0.75, { duration: 3000 });
  }, []);
  return (
    <View style={[styles.container]}>
      <Header />
      <Svg style={styles.svgView}>
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
      </Svg>
      <Wrapper style={{ flex: 1 }}>
        <View style={styles.mainView}>
          <View style={styles.inputField}>
            <TextInput
              value="Dana Miron"
              style={styles.input}
              placeholder="Region"
              placeholderTextColor="#8F8F93"
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              value="Rishon LeZion"
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#8F8F93"
            />
          </View>
          <View style={styles.multiLineInputField}>
            <TextInput
              multiline
              value="24 years old | I Like to play tennis | Evenings only"
              style={styles.input}
              placeholder="Bio"
              placeholderTextColor="#8F8F93"
            />
          </View>
        </View>
      </Wrapper>
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        <Text style={styles.submitBtnText}>Submit Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;
