import React, { useRef } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackIcon from "../../../assets/BackIcon.svg";
import ChatBall from "../../../assets/chatBall.svg";
import NewChat from "../../../assets/newChat.svg";
import Send from "../../../assets/send.svg";
import styles from "./Styles";

const NewChatScreen = ({ navigation }: any) => {
  let data = {
    name: "Lara Melikson sdfsdfsdfsdfsdfsdfsdfsd",
    chat: "Yes, i will be there!",
    time: "17:34",
  };
  const inputRef = useRef<any>();

  return (
    <View style={[styles.container]}>
      <View style={styles.headerView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackIcon />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/profileImage.png")}
              />
            </View>
            <Text style={styles.name}>
              {data.name.length > 20
                ? data.name.substring(0, 20) + "..."
                : data.name}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <ChatBall />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <View style={{ flex: 1, marginTop: 16 }}>
          <View style={styles.chatBar}>
            <Text>typed some chat here</Text>
          </View>
          <View style={styles.selfChatBar}>
            <Text>typed some chat here</Text>
          </View>
          <View style={styles.chatBar}>
            <Text>typed some chat here</Text>
          </View>
          <View style={styles.chatBar}>
            <Text>typed some chat here</Text>
          </View>
          <View style={styles.selfChatBar}>
            <Text>typed some chat here</Text>
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.inputField}>
          <TextInput
            multiline
            style={styles.input}
            placeholder="type here"
            placeholderTextColor="#8F8F93"
            ref={inputRef}
            onLayout={() => inputRef.current.focus()}
          />
        </View>
        <TouchableOpacity style={{ marginLeft: 12 }}>
          <Send />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewChatScreen;
