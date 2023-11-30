import React from "react";
import { ImageBackground, Text, View } from "react-native";
import Ball from "../../../assets/ball.svg";
import styles from "./Styles";

const HistoryCard = ({ navigation, details }: any) => {
  const { name, date, id } = details;
  return (
    <View style={styles.mainView}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../../assets/profileImage.png")}
      >
        <Ball style={styles.ball} />
      </ImageBackground>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.name}>
          {name.length > 25 ? name.substring(0, 25) + "..." : name}
        </Text>
        <Text style={styles.date}>{date} </Text>
        <Text numberOfLines={1} style={styles.detailsText}>
          {id}
        </Text>
      </View>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../../assets/profileImage.png")}
      ></ImageBackground>
    </View>
  );
};

export default HistoryCard;
