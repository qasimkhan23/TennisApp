import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import styles from "./Styles";

import Search from "../../../assets/search.svg";
import ChatCard from "../../components/chatCard/ChatCard";
import Header from "../../components/header/Header";

const NewChatScreen = ({ navigation }: any) => {
  let data = [
    {
      name: "Lara Melikson",
      exp: "Rising",
    },
    {
      name: "Dana reznikov",
      exp: "Fearless",
    },
    {
      name: "Lara Melikson",
      exp: "Rising",
    },
  ];

  return (
    <View style={[styles.container]}>
      <Header />
      {/* <View style={styles.headerView}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity>
          <NewChat />
        </TouchableOpacity>
      </View> */}

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
            key={index}
            arrayLength={data.length}
            index={index}
            isNewChat={true}
            details={{
              name: item.name,
              exp: item.exp,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NewChatScreen;
