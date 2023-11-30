import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";

const FriendsCard = ({ details, index, arrayLength }: any) => {
  const { name, exp, id } = details;
  const navigation = useNavigation<any>();

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
          <Text style={styles.cardText}>
            {name.length > 25 ? name.substring(0, 25) + "..." : name}
          </Text>
          <Text style={styles.cardExpText}>{exp}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.playBtn}
        onPress={() => navigation.navigate("NestedNewChatScreen")}
      >
        <Text style={styles.playBtnText}>Let’s Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FriendsCard;
