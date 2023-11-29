import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";

const FriendsCard = ({ details, index, arrayLength }: any) => {
  const { name, date, id } = details;
  return (
    <View
      style={[
        styles.mainView,
        { borderBottomWidth: index == arrayLength - 1 ? 0 : 1 },
      ]}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={require("../../../assets/profileImage.png")}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>Dana reznikov</Text>
          <Text style={styles.cardExpText}>Legend</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.playBtn}>
        <Text style={styles.playBtnText}>Let’s Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendsCard;
