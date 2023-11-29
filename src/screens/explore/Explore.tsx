import React from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles from "./Styles";
const ExploreScreen = ({ navigation }: any) => {
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

      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.continueBtnText}>Let’s Find A Partner</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreScreen;
