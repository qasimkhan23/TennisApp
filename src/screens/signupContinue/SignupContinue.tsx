import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Header from "../../components/header/Header";
import styles from "./Styles";

const Wrapper = ({ children, style }) => {
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

const SignupContinueScreen = ({ navigation }: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "23", value: "23" },
    { label: "24", value: "24" },
    { label: "25", value: "25" },
  ]);
  const setToken = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
      navigation.navigate("BottomStack");
    } catch (e) {
      console.log("store error is here", e);
      // saving error
    }
  };

  return (
    <View style={[styles.container]}>
      <Header />

      <View>
        <Text style={styles.title}>Signup</Text>
        <Text style={styles.desp}>Choose your tennis level</Text>
      </View>

      <Wrapper
        // bounces={false}
        style={styles.bodyContainer}
        // contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.mainView}>
          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_1.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Fresh</Text>
                <Text style={styles.cardDesp}>
                  Just started - less than 6 months on the court, playing
                  occasionally
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_2.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Rising</Text>
                <Text style={styles.cardDesp}>
                  6 months to 1 year of experience, hitting the court monthly,
                  mastering the basics
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_3.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Fearless</Text>
                <Text style={styles.cardDesp}>
                  1-2 years in, weekly plays, honing skills in spirited rallies
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_4.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Smasher</Text>
                <Text style={styles.cardDesp}>
                  With 2-3 years under the belt, I hit the court weekly,
                  refining my baseline game
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_5.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Elite</Text>
                <Text style={styles.cardDesp}>
                  3-4 years of experience, frequent play several times a week,
                  mastering the serve and volley
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            style={styles.bg}
            source={require("../../../assets/bg_6.png")}
          >
            <View style={styles.transparentView}>
              <TouchableOpacity style={styles.clickableView}>
                <Text style={styles.cardTitle}>Legend</Text>
                <Text style={styles.cardDesp}>
                  Over 5 years dedicated to the game, practically live on the
                  court, competing at a near-daily, professional level
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Wrapper>
      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => setToken("token", "dummyToken")}
      >
        <Text style={styles.signupBtnText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupContinueScreen;
