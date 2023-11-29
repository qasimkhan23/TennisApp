import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./Styles";

import { useNavigation } from "@react-navigation/native";

const ChatCard = ({ details, index, arrayLength, isNewChat }: any) => {
  const navigation = useNavigation<any>();

  const { name, date, time, chat, exp } = details;

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
          <Text style={styles.cardText}>{name}</Text>

          <Text
            style={isNewChat ? styles.newChatCardExpText : styles.cardExpText}
          >
            {isNewChat ? exp : chat}
          </Text>
        </View>
      </View>
      {isNewChat == false ? (
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.playBtn}
          onPress={() => navigation.navigate("NewChatScreen")}
        >
          <Text style={styles.playBtnText}>Start Chat</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChatCard;
