import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import styles from "./Styles";

const ExploreScreen = ({ navigation }: any) => {
  const [show, setShow] = useState(false);

  const switchScreen = () => {
    setShow(true);

    setTimeout(() => {
      navigation.navigate("ProfileDetailScreen");
      setTimeout(() => {
        setShow(false);
      }, 100);
    }, 2000);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.mainView}>
        <Text style={styles.title}>The Magic Algorithm</Text>
        <Text style={styles.desp}>
          Press the button and get your perfect game match
        </Text>
        <ImageBackground
          style={styles.bg}
          source={require("../../../assets/Eclipse.png")}
        >
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/profileImage.png")}
            />
          </View>
        </ImageBackground>
      </View>

      <TouchableOpacity style={styles.continueBtn} onPress={switchScreen}>
        {show ? (
          <Image
            style={{ width: "40%", height: "100%", alignSelf: "center" }}
            source={require("../../../assets/spinner.gif")}
          />
        ) : (
          <Text style={styles.continueBtnText}>Let’s Find A Partner</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;
