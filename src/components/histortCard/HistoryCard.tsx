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
      <View>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.name}>{date} </Text>
        <Text style={styles.detailsText}>{id}</Text>
      </View>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../../assets/profileImage.png")}
      ></ImageBackground>
    </View>
  );
};

export default HistoryCard;
