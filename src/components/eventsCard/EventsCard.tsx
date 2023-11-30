import React from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./Styles";

const EventsCard = ({ details }: any) => {
  const { name, desp, exp, bgImageSource, profileImageSrc } = details;

  return (
    <ImageBackground
      imageStyle={{ borderRadius: 16 }}
      style={styles.bg}
      source={bgImageSource}
    >
      <View style={styles.transparentView}>
        <TouchableOpacity style={styles.clickableView}>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={profileImageSrc} />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              opacity: 1,
              // backgroundColor: "red",
            }}
          >
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.expLevel}>{exp}</Text>
          </View>

          <Text style={styles.cardDesp}>{desp}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EventsCard;
