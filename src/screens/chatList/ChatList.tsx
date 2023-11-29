import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import NewChat from "../../../assets/newChat.svg";
import styles from "./Styles";

import Search from "../../../assets/search.svg";
import ChatCard from "../../components/chatCard/ChatCard";

const ChatScreen = ({ navigation }: any) => {
  let data = [
    {
      name: "Lara Melikson",
      chat: "Yes, i will be there!",
      time: "17:34",
    },
    {
      name: "Dana reznikov",
      chat: "Yes, i will be there!",
      time: "17:34",
    },
    {
      name: "Lara Melikson",
      chat: "Yes, i will be there!",
      time: "17:34",
    },
  ];

  return (
    <View style={[styles.container]}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewChatListScreen");
          }}
        >
          <NewChat />
        </TouchableOpacity>
      </View>

      <View style={styles.inputField}>
        <View style={styles.searchBarContainer}>
          <Search />
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            placeholderTextColor="#8F8F93"
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {data.map((item, index) => (
          <ChatCard
            isNewChat={false}
            key={index}
            arrayLength={data.length}
            index={index}
            details={{
              name: item.name,
              chat: item.chat,
              time: item.time,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatScreen;
